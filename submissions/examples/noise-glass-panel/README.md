# Noise Grain Glassmorphism Panel

1. **What does this do?**  
   Adds a frosted glass blur panel (`backdrop-filter: blur(12px)`) layered with an inline SVG grain noise texture overlay (`feTurbulence`) for tactile UI depth.

2. **How is it used?**  
   Apply `.noise-glass-panel` (or `.noise-glass-panel-hover`, `.panel-glow`) to a container element:

   ```html
   <div class="noise-glass-panel noise-glass-panel-hover panel-glow">
     <div class="panel-header">
       <h3 class="panel-title">Tactile Glass Card</h3>
       <p class="panel-subtitle">Sub-heading</p>
     </div>
     <div class="panel-body">
       <p>Frosted glass card content layered with SVG noise texture.</p>
     </div>
     <div class="panel-footer">
       <button class="btn">Action</button>
     </div>
   </div>
   ```

3. **Why is it useful?**  
   Standard flat glassmorphism cards can feel overdone in modern web design. Overlaying a subtle SVG noise grain texture using `mix-blend-mode: overlay` creates depth, tactile physical presence, and a high-end aesthetic seen on cutting-edge tools like Linear and Vercel, fitting EaseMotion CSS's human-readable, animation-first philosophy with zero dependencies.
