# Design System

## Holoconnects Brand Interpretation
- Premium communication technology brand.
- Luxury-tech presentation with clarity, restraint, and confidence.
- Calm, minimal interfaces with strong hierarchy and high production polish.

## Design Principles
- Large, confident typography with disciplined spacing.
- Clean visual rhythm with generous whitespace.
- Refined surfaces, subtle depth, and restrained motion.
- Conversion-oriented layouts with minimal clutter and high scanability.
- Apple-inspired craftsmanship translated into a distinct Holoconnects identity.
- Current homepage direction now also follows the user's supplied concept: bold contrast, oversized typography, bento economics, and a dramatic hero reveal.
- Current homepage is now based directly on the user's supplied HTML reference rather than a custom reinterpretation.

## Colors
- Current homepage palette:
  - Warm off-white background
  - White and ivory surfaces
  - Black typography
  - Holoconnects gold accent
- Chosen to better align with the supplied Holoconnects logo and white transparent product renders.

## Typography
- Pending implementation stack and available brand assets.
- Current homepage pairing:
  - `Outfit` for all UI, display, and body typography
- Large display scale with high-contrast weight transitions similar to the supplied concept.

## Spacing
- Section spacing should feel spacious and premium.
- Use a consistent scale with wider desktop breathing room and compact mobile rhythm.
- Current homepage uses a clear cadence of framed sections separated by air, not heavy borders or dense blocks.

## Grid Rules
- Responsive modular grid.
- Strong alignment discipline across hero, feature, proof, and CTA sections.
- Current homepage uses a full-screen hero stage, a 12-column bento section, and stacked mobile collapse at tablet widths.

## Motion Rules
- Motion should be subtle, smooth, and purposeful.
- Avoid decorative animation; favor fades, gentle parallax, staggered reveals, and polished hover states.
- Current homepage uses scroll reveal, rotating headline text, and spotlight-follow behavior in the hero.

## Component Style Rules
- Cards should feel refined, not template-like.
- Buttons should be crisp, minimal, and high-contrast.
- Navigation should stay clean and understated.
- Form controls should prioritize clarity and tactility.
- Use large radii, clean light surfaces, and restrained glow for hologram-related product presentation.
- Keep text blocks concise and commercially legible.
- Dark UI moments such as the IRIS OS section should feel premium and dashboard-like, not generic SaaS.

## Image Treatment Rules
- Premium crops with generous negative space.
- High-contrast presentation with restrained overlays.
- Use placeholders only where assets are missing, and mark them in code comments.
- Prefer transparent product renders on clean backgrounds.
- Current homepage approximates the supplied transparent Holobox assets in CSS until the actual files are added locally.
- Store active homepage imagery in the workspace `images/` folder for predictable reuse.

## Status
- Baseline design principles established.
- Homepage-level visual tokens are now implemented in `styles.css` with the new example-led restyle.
- Secondary-page tokens and asset rules will be refined after the rest of the live site is mapped.
- Active homepage styling is currently embedded directly inside `index.html`.
