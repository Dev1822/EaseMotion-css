# Spotlight Hover Card (`.ease-spotlight-card`)

A flagship CSS-only card component featuring a radial spotlight hover effect centered on dark-themed cards, built without JavaScript using CSS custom properties (`@property`) and radial gradients.

## Features

- **Pure CSS**: No JavaScript mouse listeners required.
- **`@property` Interpolation**: Uses registered custom properties (`--x` and `--y` with `<percentage>` syntax) to smoothly transition gradient center coordinates.
- **Radial Gradient Spotlight**: Creates a high-end glowing spotlight effect centered over dark surfaces.
- **`mix-blend-mode: overlay`**: Blends the glowing spotlight naturally into card content and text without obstructing readability.
- **Accessibility & Motion**: Respects `prefers-reduced-motion` settings.

## Folder Structure

```
spotlight-hover-card/
├── demo.html
├── style.css
└── README.md
```

## How It Works

### 1. `@property` Registration
```css
@property --x {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 50%;
}

@property --y {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 50%;
}
```

### 2. Radial Gradient Overlay with `mix-blend-mode`
```css
.ease-spotlight-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    circle 300px at var(--x) var(--y),
    rgba(255, 255, 255, 0.22) 0%,
    rgba(255, 255, 255, 0.05) 40%,
    transparent 80%
  );
  mix-blend-mode: overlay;
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}
```

## Browser Support & Limitations

| Feature | Browser Support | Fallback |
| --- | --- | --- |
| `@property` | Chrome 85+, Edge 85+, Safari 16.4+, Firefox 128+ | Gracefully falls back to static center radial gradient on older browsers. |
| `mix-blend-mode: overlay` | All modern browsers | Standard semi-transparent gradient layer. |

- **CSS-Only Limitation**: True 1:1 real-time cursor tracking inside cards requires JavaScript mousemove event handlers or element-scoped CSS variables. The CSS-only technique leverages `@property` lerp animation and hover transitions to achieve a smooth ambient spotlight sweep without JS overhead.

## Usage

Include `style.css` in your project or copy the component rules into your stylesheet:

```html
<article class="ease-spotlight-card">
    <h2>Card Title</h2>
    <p>Card description goes here...</p>
</article>
```

## Customization

You can adjust CSS variables:
- `--ease-spotlight-color`: Change glow color/opacity (e.g. `rgba(108, 99, 255, 0.3)` for primary tint).
- `--ease-spotlight-size`: Control radial radius size (default `280px`).
