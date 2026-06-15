const revealTargets = document.querySelectorAll(".reveal");
const header = document.querySelector("[data-header]");
const spotlightHost = document.querySelector("[data-spotlight]");
const spotlightLayer = document.querySelector("[data-spotlight-layer]");
const rotatingWords = document.querySelectorAll("[data-rotating-text] span");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -48px 0px",
  }
);

revealTargets.forEach((target) => {
  revealObserver.observe(target);
});

const syncHeaderState = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > window.innerHeight - 120);
};

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

if (spotlightHost && spotlightLayer) {
  const moveSpotlight = (event) => {
    const bounds = spotlightHost.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    spotlightLayer.style.background = `radial-gradient(circle 350px at ${x}px ${y}px, transparent 0%, rgba(0,0,0,0.86) 40%, #000000 70%)`;
  };

  spotlightHost.addEventListener("mousemove", moveSpotlight);
}

if (rotatingWords.length > 0) {
  let activeIndex = 0;

  window.setInterval(() => {
    rotatingWords[activeIndex].classList.remove("is-active");
    activeIndex = (activeIndex + 1) % rotatingWords.length;
    rotatingWords[activeIndex].classList.add("is-active");
  }, 3000);
}
