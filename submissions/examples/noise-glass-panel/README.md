# CSS-Only Noise Grain Glassmorphism Panel Component (`.ease-glass-panel`)

## Overview

The `.ease-glass-panel` component brings a modern, tactile frosted glass UI aesthetic to EaseMotion CSS. It combines CSS `backdrop-filter: blur(...)` with a subtle inline SVG fractal noise texture generated via `<feTurbulence>`. Blended with `mix-blend-mode: overlay`, the noise texture creates visual depth, tactile richness, and realistic refraction without needing external image files or JavaScript.

## Features

- **Inline SVG Noise Overlay**: Generated dynamically with `background-image: url("data:image/svg+xml,...")` using `feTurbulence`.
- **Blend Mode Layering**: `mix-blend-mode: overlay` at customizable opacity (`--ease-glass-grain-opacity`).
- **Interactive Refraction**: Hover effects smoothly intensify the backdrop blur (from 12px to 18px) and brighten the border refraction.
- **Theme & Variants**: Includes `.ease-glass-panel-dark`, `.ease-glass-panel-light`, `.ease-glass-panel-glow`, `.ease-glass-grain-subtle`, and `.ease-glass-grain-intense`.
- **Graceful Fallbacks**: Includes `@supports not (backdrop-filter: blur(...))` fallbacks for older browsers.
- **Accessible & Responsive**: Full support for `@media (prefers-reduced-motion: reduce)` and flexible layout container sizing.

## Installation / Usage

Import EaseMotion CSS or copy the `.ease-glass-panel` CSS rules into your stylesheet:

```html
<link rel="stylesheet" href="easemotion.css" />
```

### Basic HTML Structure

```html
<div class="ease-glass-panel">
  <h3>Glass Panel Title</h3>
  <p>Content inside a tactile frosted noise glass panel.</p>
</div>
```

### Variant Examples

```html
<!-- Dark Glass Panel with Intense Grain -->
<div class="ease-glass-panel ease-glass-panel-dark ease-glass-grain-intense">
  <h3>Dark Glass Panel</h3>
  <p>Dark backdrop with enhanced noise texture strength.</p>
</div>

<!-- Light Glass Panel with Subtle Grain -->
<div class="ease-glass-panel ease-glass-panel-light ease-glass-grain-subtle">
  <h3>Light Glass Panel</h3>
  <p>Clean light theme backdrop for high contrast cards.</p>
</div>

<!-- Glow Border Variant -->
<div class="ease-glass-panel ease-glass-panel-glow">
  <h3>Glow Border Glass</h3>
  <p>Includes a subtle gradient highlight along the edge.</p>
</div>
```

## CSS Custom Properties

Customize panel styling using variables:

| Variable | Default Value | Description |
|---|---|---|
| `--ease-glass-bg` | `rgba(255, 255, 255, 0.15)` | Panel backdrop color tint |
| `--ease-glass-border` | `rgba(255, 255, 255, 0.25)` | Edge border color |
| `--ease-glass-blur` | `12px` | Backdrop blur radius |
| `--ease-glass-grain-opacity` | `0.08` | Noise texture opacity |
| `--ease-glass-shadow` | `0 8px 32px 0 rgba(0, 0, 0, 0.12)` | Outer box shadow and inset edge highlight |

## Browser Compatibility

- Chrome / Edge (89+)
- Firefox (103+)
- Safari (13.1+) with `-webkit-backdrop-filter`

For unsupported legacy browsers, the `@supports not` fallback renders a clean semi-opaque solid surface.
