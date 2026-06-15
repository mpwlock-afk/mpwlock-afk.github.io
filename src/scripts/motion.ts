import Lenis from "lenis";

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// Robust viewport height (some embedded/headless contexts report 0)
const vh = () =>
  window.innerHeight || document.documentElement.clientHeight || 800;

/* ============================================================
   Singletons (created once, survive view transitions)
   ============================================================ */
let lenis: Lenis | null = null;
let scrollY = 0;
let velocity = 0;

if (!reduce) {
  lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  (window as any).lenis = lenis;
  const raf = (time: number) => {
    lenis!.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  lenis.on("scroll", (e: any) => {
    scrollY = e.scroll;
    velocity = e.velocity;
    onScroll();
  });
} else {
  window.addEventListener(
    "scroll",
    () => {
      scrollY = window.scrollY;
      onScroll();
    },
    { passive: true }
  );
}

/* ---------- Custom cursor (delegated, survives swaps) ---------- */
if (fine && !reduce) {
  document.body.classList.add("has-cursor");
  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  const ring = document.createElement("div");
  ring.className = "cursor-ring";
  document.body.append(dot, ring);

  let mx = window.innerWidth / 2,
    my = vh() / 2;
  let rx = mx,
    ry = my;
  window.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });
  const tick = () => {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  };
  tick();
  // delegation: no re-wiring needed after page swaps
  document.addEventListener("mouseover", (e) => {
    if ((e.target as HTMLElement).closest("a, button, .hoverable"))
      ring.classList.add("is-hover");
  });
  document.addEventListener("mouseout", (e) => {
    if ((e.target as HTMLElement).closest("a, button, .hoverable"))
      ring.classList.remove("is-hover");
  });
}

/* ============================================================
   Per-page state (rebuilt by initPage on every navigation)
   ============================================================ */
let parallaxEls: HTMLElement[] = [];
let hpinEls: HTMLElement[] = [];
let depthEls: HTMLElement[] = [];
let marquees: { track: HTMLElement; x: number; base: number; w: number }[] = [];
let revealQueue: HTMLElement[] = [];
let progressEl: HTMLElement | null = null;

function layout() {
  hpinEls.forEach((sec) => {
    const track = sec.querySelector<HTMLElement>(".hpin__track");
    if (!track) return;
    const distance = track.scrollWidth - window.innerWidth;
    sec.style.height = `${vh() + Math.max(distance, 0)}px`;
  });
}

// Safety net: if the animation timeline stalls (some embedded contexts
// freeze it after a view transition), force the end state so content
// can never stay invisible.
function forceVisible(el: HTMLElement) {
  const settle = (n: HTMLElement) => {
    n.style.animation = "none";
    n.style.opacity = "1";
    n.style.transform = "none";
    n.style.filter = "none";
  };
  settle(el);
  el.querySelectorAll<HTMLElement>(".char, .line > span").forEach(settle);
}

function revealCheck() {
  if (!revealQueue.length) return;
  const trigger = vh() * 0.92;
  const still: HTMLElement[] = [];
  for (const el of revealQueue) {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add("in");
      el.classList.add("is-visible"); // legacy support
      if (el.dataset.count !== undefined) countUp(el);
      setTimeout(() => forceVisible(el), 2400);
    } else {
      still.push(el);
    }
  }
  revealQueue = still;
}

function onScroll() {
  const docH = document.documentElement.scrollHeight - vh();
  if (progressEl)
    progressEl.style.setProperty(
      "--progress",
      String(docH > 0 ? scrollY / docH : 0)
    );

  revealCheck();

  if (reduce) return;
  const H = vh();

  for (const el of parallaxEls) {
    const speed = parseFloat(el.dataset.parallax || "0.15");
    const r = el.getBoundingClientRect();
    const center = r.top + r.height / 2 - H / 2;
    el.style.transform = `translate3d(0, ${(-center * speed).toFixed(2)}px, 0)`;
  }

  // depth: content recedes into 3D space as you scroll past
  for (const el of depthEls) {
    const p = Math.min(Math.max(scrollY / (H * 0.9), 0), 1);
    el.style.transform = `perspective(1000px) translate3d(0, ${(p * 60).toFixed(1)}px, ${(-p * 180).toFixed(1)}px) rotateX(${(p * 6).toFixed(2)}deg)`;
    el.style.opacity = String(1 - p * 0.85);
  }

  for (const sec of hpinEls) {
    const track = sec.querySelector<HTMLElement>(".hpin__track");
    if (!track) continue;
    const distance = track.scrollWidth - window.innerWidth;
    const top = sec.offsetTop;
    const p = Math.min(Math.max((scrollY - top) / (sec.offsetHeight - H), 0), 1);
    track.style.transform = `translate3d(${(-p * distance).toFixed(2)}px, 0, 0)`;
  }
}

/* ---------- Count up ---------- */
function countUp(el: HTMLElement) {
  const raw = el.dataset.count || "0";
  const num = parseFloat(raw.replace(/[^0-9.]/g, ""));
  const prefix = raw.match(/^[^0-9]*/)?.[0] || "";
  const suffix = raw.match(/[^0-9.]*$/)?.[0] || "";
  const decimals = (raw.split(".")[1]?.replace(/[^0-9]/g, "") || "").length;
  if (reduce || isNaN(num)) {
    el.textContent = raw;
    return;
  }
  const dur = 1600;
  const start = performance.now();
  const step = (now: number) => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + (num * eased).toFixed(decimals) + suffix;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = raw;
  };
  requestAnimationFrame(step);
}

/* ---------- 3D tilt cards with glare ---------- */
function wireTilt(root: Document | HTMLElement) {
  if (!fine || reduce) return;
  root.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
    if (el.dataset.tiltWired) return;
    el.dataset.tiltWired = "1";
    const max = parseFloat(el.dataset.tilt || "7");
    el.style.transformStyle = "preserve-3d";
    const glare = document.createElement("div");
    glare.className = "tilt-glare";
    el.appendChild(glare);

    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rotY = (px - 0.5) * 2 * max;
      const rotX = (0.5 - py) * 2 * max;
      el.style.transform = `perspective(900px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(10px)`;
      glare.style.opacity = "1";
      glare.style.background = `radial-gradient(circle at ${(px * 100).toFixed(1)}% ${(py * 100).toFixed(1)}%, rgba(255,255,255,0.16), transparent 55%)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
      glare.style.opacity = "0";
    });
  });
}

/* ---------- Page init (runs on load + after every view transition) ---------- */
function initPage() {
  progressEl = document.querySelector<HTMLElement>(".scroll-progress");
  parallaxEls = Array.from(
    document.querySelectorAll<HTMLElement>("[data-parallax]")
  );
  hpinEls = Array.from(document.querySelectorAll<HTMLElement>("[data-hscroll]"));
  depthEls = Array.from(document.querySelectorAll<HTMLElement>("[data-depth]"));

  // velocity marquees (duplicate content once for seamless loop)
  marquees = Array.from(document.querySelectorAll<HTMLElement>(".marquee")).map(
    (m) => {
      const track = m.querySelector<HTMLElement>(".marquee__track")!;
      if (!track.dataset.mq) {
        track.dataset.mq = "1";
        track.innerHTML += track.innerHTML;
      }
      return {
        track,
        x: 0,
        base:
          parseFloat(m.dataset.speed || "0.6") *
          (m.dataset.dir === "rl" ? -1 : 1),
        w: track.scrollWidth / 2,
      };
    }
  );

  // magnetic buttons
  if (fine && !reduce) {
    document.querySelectorAll<HTMLElement>(".magnetic").forEach((el) => {
      if (el.dataset.magWired) return;
      el.dataset.magWired = "1";
      const strength = parseFloat(el.dataset.magnetic || "0.4");
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  }

  // kinetic text split
  document.querySelectorAll<HTMLElement>(".kinetic[data-split]").forEach((el) => {
    if (el.dataset.split === "done") return;
    el.dataset.split = "done";
    const walk = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        (node.textContent || "").split("").forEach((ch) => {
          const span = document.createElement("span");
          span.className = "char";
          span.textContent = ch === " " ? " " : ch;
          frag.appendChild(span);
        });
        node.parentNode?.replaceChild(frag, node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        Array.from(node.childNodes).forEach(walk);
      }
    };
    Array.from(el.childNodes).forEach(walk);
    el.querySelectorAll<HTMLElement>(".char").forEach((c, i) => {
      c.style.setProperty("--ci", String(i));
    });
  });

  // anchor links through Lenis
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    if (a.dataset.anchorWired) return;
    a.dataset.anchorWired = "1";
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el && lenis) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -80 });
      }
    });
  });

  wireTilt(document);

  // entrance reveals
  revealQueue = Array.from(
    document.querySelectorAll<HTMLElement>(
      ".anim:not(.in), .reveal-lines:not(.in), .kinetic:not(.in), [data-count]:not(.in), [data-reveal]:not(.in)"
    )
  );

  layout();
  onScroll();
  // late-loading images can change layout — re-measure
  setTimeout(() => {
    layout();
    onScroll();
  }, 350);
}

/* ---------- Global rAF: marquees ---------- */
function frame() {
  for (const m of marquees) {
    const boost = reduce ? 0 : velocity * 0.6;
    m.x -= m.base + boost;
    if (m.x <= -m.w) m.x += m.w;
    if (m.x > 0) m.x -= m.w;
    m.track.style.transform = `translate3d(${m.x.toFixed(2)}px, 0, 0)`;
  }
  velocity *= 0.9;
  requestAnimationFrame(frame);
}
frame();

window.addEventListener("resize", () => {
  layout();
  onScroll();
});

/* ---------- Boot + view transitions ---------- */
initPage();
document.addEventListener("astro:page-load", initPage);
document.addEventListener("astro:after-swap", () => {
  scrollY = 0;
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo(0, 0);
});
