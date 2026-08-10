# Animated Gradient Text Mask

## What does this add?
This introduces an `.ease-gradient-text-animated` typography utility that applies a vibrant, continuously moving gradient inside the actual text characters, creating a beautiful shimmering effect. It degrades gracefully on older browsers that do not support `-webkit-background-clip: text` by falling back to the solid primary color.

## How does a developer use it?
Simply add the `.ease-gradient-text-animated` class to any text element (such as a heading) where you want the effect to appear. You can control the colors using `--ease-color-primary` and `--ease-color-secondary`.

```html
<h1 class="ease-gradient-text-animated">
    Next Generation UI
</h1>
```

## Why does it fit EaseMotion CSS?
Animated gradient text is incredibly popular for main headings and call-to-actions on modern SaaS landing pages because it gives typography a living, dynamic feel. Doing this purely in CSS using `background-clip` aligns perfectly with EaseMotion's lightweight and performant animation-first philosophy.
