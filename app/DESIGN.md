# Outscaled Design System

## 1. Purpose

Outscaled uses a cinematic, editorial landing-page system: warm-white surfaces float over dark photographic hero imagery. The hero integration rail communicates breadth with compact, branded app cards.

## 2. Foundations

- Canvas: `--color-001` warm white and black photographic overlays.
- Type: Headland One for display copy; Switzer and Geist for UI copy.
- Spacing: 4px base unit; 8px, 12px, 16px, 24px, 32px, and 40px are the standard increments.
- Radius: 16px for small cards, 24px for large content surfaces, 40px for the hero shell.

## 3. Typography

- Hero display: Headland One, centered, responsive 54–83px.
- UI labels: Switzer, medium weight, 12–14px.
- App-card labels: Switzer, medium weight, 11–12px; labels collapse at the narrow mobile breakpoint so marks remain legible.

## 4. Color and Depth

- Hero shell uses the existing translucent `--surface` layer and inset highlights.
- Integration cards are warm white with a low-contrast white inset highlight, preserving the hero's soft physical depth.
- Brand color is reserved for each integration mark; it is never used as a decorative page accent.

## 5. Components

- `IntegrationLogoCard`: live SVG mark plus an accessible app label. It appears in the five-column hero integration rail and uses a single transform/box-shadow hover affordance.
- Hero shell: rounded, frosted, photographic background with a dark lower gradient for legibility.

## 6. Responsive Behavior

- The integration rail always shows five equal-width cards.
- At the mobile breakpoint, each card keeps its logo but hides its label to prevent clipped copy.
- Cards retain a 16px radius and at least a 40px visual touch target.
- Generated fixed-width content wrappers must shrink to their parent below the 375px capture width; decorative absolute-positioned artwork may still bleed beyond its frame.
- Dense horizontal card headers stack on mobile rather than compressing their labels into unreadable columns.
- Full-height opening sections use the dynamic viewport height on mobile browsers.

## 7. Motion and Interaction

- Integration cards lift 2px on hover/focus through `transform`, with a 220ms custom cubic-bezier transition.
- Keyboard focus uses a visible blue focus ring.
- No essential behavior depends on animation.

## 8. Accessibility and Accepted Debt

- All brand marks have text alternatives through their visible or screen-reader label.
- Brand SVGs are presentational; the card's text supplies the accessible name.
- The app cards are informational in this iteration; links are not implied until destinations exist.
