# CSS-Only Radial Spotlight Hover Card

**EaseMotion CSS · Issue [#74673](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/74673)**

A `.ease-spotlight-card` component that renders a radial-gradient "spotlight" that smoothly sweeps across a dark-themed card on hover — built **without JavaScript**.

## Live Demo

Open `demo.html` in any modern browser and hover over the cards.

## How It Works

### 1 — Register animatable custom properties with `@property`

```css
@property --x {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 50%;
}

@property --y {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 50%;
}
```

Registering `--x` and `--y` as `<percentage>` tells the browser their *type*, which unlocks smooth interpolation inside `@keyframes`. Without `@property` the values jump discretely between keyframe stops instead of animating.

### 2 — Spotlight overlay via `::before` + `radial-gradient`

```css
.ease-spotlight-card::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;

  background: radial-gradient(
    circle 220px at var(--x) var(--y),
    rgba(255, 255, 255, 0.18),
    transparent 80%
  );
  mix-blend-mode: overlay;
  opacity: 0;
  transition: opacity 0.4s ease;
}
```

`mix-blend-mode: overlay` softly brightens card content wherever the gradient circle falls, mimicking a real directional light source.

### 3 — Sweep animation on hover

```css
.ease-spotlight-card:hover::before {
  opacity: 1;
  animation: ease-spotlight-sweep 5s ease-in-out infinite alternate;
}

@keyframes ease-spotlight-sweep {
  0%   { --x: 10%; --y: 10%; }
  20%  { --x: 90%; --y:  5%; }
  40%  { --x: 95%; --y: 90%; }
  60%  { --x: 50%; --y: 50%; }
  80%  { --x:  5%; --y: 90%; }
  100% { --x: 10%; --y: 10%; }
}
```

The browser lerps `--x` and `--y` between stops because of the `@property` registration, producing a smooth orbiting-spotlight illusion — no `mousemove` listener needed.

## File Structure

```
spotlight-hover-card/
├── demo.html   — Usage example with three cards
├── style.css   — Component styles + page scaffold
└── README.md   — This file
```

## Usage

Add the class `.ease-spotlight-card` to any dark card container:

```html
<link rel="stylesheet" href="style.css" />

<div class="ease-spotlight-card">
  <h2>Your Title</h2>
  <p>Your description text.</p>
</div>
```

## Customisation

| CSS variable / property | What it controls |
|---|---|
| `circle 220px` in `radial-gradient` | Spotlight radius |
| `rgba(255,255,255,0.18)` peak colour | Spotlight brightness |
| `animation-duration` (default `5s`) | Sweep speed |
| `--x` / `--y` initial values | Resting spotlight position |
| `mix-blend-mode` | Blending approach (`screen`, `hard-light`, etc.) |

## Browser Support & Limitations

| Feature | Chrome | Edge | Firefox | Safari |
|---|---|---|---|---|
| `@property` | ✅ 85+ | ✅ 85+ | ✅ 128+ | ✅ 16.4+ |
| `mix-blend-mode` | ✅ | ✅ | ✅ | ✅ |
| Animatable custom props | ✅ | ✅ | ✅ 128+ | ✅ 16.4+ |

### Limitations without JavaScript

- The spotlight **cannot track the real cursor position** without a `mousemove` listener. The CSS-only approximation uses a looping `@keyframes` sweep around the card's edges.
- In browsers that **don't support `@property`** (IE, old Safari < 16.4, Firefox < 128) the spotlight will not animate; it will remain at `50% 50%` and fade in/out on hover without movement — a graceful degradation.
- `prefers-reduced-motion` is respected: the sweep animation is disabled and the spotlight sits static at `20% 20%` for users who prefer reduced motion.

## License

This example is submitted to EaseMotion CSS under the project's open-source license and is provided for educational and demonstration purposes.
