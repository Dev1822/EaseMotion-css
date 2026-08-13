import { describe, it, expect, beforeAll } from 'vitest';
import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('EaseRadialMenu Component Tests', () => {
  let dom;
  let document;
  let css;

  beforeAll(() => {
    const radialMenuCss = readFileSync(
      resolve(__dirname, '../components/radial-menu.css'),
      'utf8'
    );
    css = radialMenuCss;

    dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
        <head></head>
        <body>
          <div class="ease-radial-menu ease-radial-lg">
            <input type="checkbox" class="ease-radial-toggle" id="test-radial-toggle" />
            <label for="test-radial-toggle" class="ease-radial-trigger">
              <span class="ease-radial-icon">+</span>
            </label>
            <ul class="ease-radial-list">
              <li class="ease-radial-item ease-radial-8-item">Item 1</li>
              <li class="ease-radial-item ease-radial-8-item">Item 2</li>
            </ul>
          </div>
        </body>
      </html>
    `);
    document = dom.window.document;

    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  });

  it('should contain essential radial menu classes', () => {
    expect(css).toContain('.ease-radial-menu');
    expect(css).toContain('.ease-radial-trigger');
    expect(css).toContain('.ease-radial-item');
    expect(css).toContain('.ease-radial-toggle');
    expect(css).toContain('.ease-radial-list');
  });

  it('should use CSS custom properties for radial positioning and distance', () => {
    expect(css).toContain('--radial-distance: 100px;');
    expect(css).toContain('--radial-size: 52px;');
    expect(css).toContain('--radial-item-size: 44px;');
  });

  it('should apply 360 degree radial transform math with counter rotation', () => {
    expect(css).toContain('rotate(var(--angle, 0deg))');
    expect(css).toContain('translate(var(--radial-distance))');
    expect(css).toContain('rotate(calc(-1 * var(--angle, 0deg)))');
  });

  it('should support elastic cubic-bezier easing curve', () => {
    expect(css).toContain('cubic-bezier(0.68, -0.55, 0.265, 1.55)');
  });

  it('should support checkbox toggle, hover, and focus-within states', () => {
    expect(css).toContain('.ease-radial-toggle:checked ~ .ease-radial-list .ease-radial-item');
    expect(css).toContain('.ease-radial-menu:hover .ease-radial-list .ease-radial-item');
    expect(css).toContain('.ease-radial-menu:focus-within .ease-radial-list .ease-radial-item');
  });

  it('should contain 4, 6, and 8 item preset angle distributions', () => {
    expect(css).toContain('.ease-radial-4-item:nth-child(1)');
    expect(css).toContain('--angle: 90deg');
    expect(css).toContain('--angle: 180deg');
    expect(css).toContain('.ease-radial-8-item:nth-child(8)');
    expect(css).toContain('--angle: 315deg');
  });

  it('should contain size and theme variants', () => {
    expect(css).toContain('.ease-radial-sm');
    expect(css).toContain('.ease-radial-lg');
    expect(css).toContain('.ease-radial-dark');
    expect(css).toContain('.ease-radial-glass');
  });
});
