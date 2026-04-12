# Design System Document

## 1. Overview & Creative North Star: "The Artisanal Hearth"

This design system moves away from the "fast-food template" and toward a high-end editorial experience that celebrates the craft of pizza. Our Creative North Star is **"The Artisanal Hearth."** It combines the high-energy urgency of a local pizzeria with the sophisticated layering of a modern culinary magazine.

We break the "standard grid" by utilizing intentional asymmetry—overlapping ingredient photography over container edges and using a high-contrast typography scale to create rhythm. The interface should feel as layered and textured as a hand-tossed crust, moving beyond flat boxes into a world of depth, warmth, and appetite appeal.

---

## 2. Colors: Tonal Depth & Warmth

Our palette is rooted in heat and freshness. We use a sophisticated Material-based scale to ensure the brand feels "Appetizing" without becoming a generic "Red & Yellow" cliché.

### The "No-Line" Rule
To maintain a premium feel, **sectioning via 1px solid borders is strictly prohibited.** Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit directly against a `surface` background. This creates a seamless, modern flow that feels designed, not "built."

### Surface Hierarchy & Nesting
Treat the UI as physical layers. Use the hierarchy below to define importance:
- **Surface (Base):** `#fbf8ff` – The canvas.
- **Surface-Container-Low:** `#f4f2ff` – Sub-sections or subtle grouping.
- **Surface-Container-Highest:** `#e0e0fc` – Prominent cards or "Order Now" sidebars.

### The "Glass & Gradient" Rule
To add "soul," avoid flat red buttons. Apply a subtle radial gradient transitioning from `primary` (#b7102a) at the center to `primary-container` (#db313f) at the edges. For floating elements like "Cart" previews, use **Glassmorphism**: a semi-transparent `surface` color with a 12px backdrop-blur to let the vibrant food photography "glow" through the interface.

---

## 3. Typography: The Editorial Voice

We pair the friendly, rounded energy of **Plus Jakarta Sans** (Display/Headlines) with the hyper-functional clarity of **Inter** (Body/Labels).

*   **Display (L/M/S):** Plus Jakarta Sans. Bold weights only. Used for high-impact marketing copy and "Hero" pizza names. High tracking (-2%) for a tighter, premium look.
*   **Headlines:** Plus Jakarta Sans. Medium to Bold. Used for menu categories.
*   **Title & Body:** Inter. This is our workhorse. We use `title-md` for item descriptions to ensure readability for families and quick scanning.
*   **Labels:** Inter. Uppercase with increased letter spacing (+5%) for a "curated" feel on price tags and dietary tags (e.g., VEGAN, GLUTEN-FREE).

---

## 4. Elevation & Depth: The Layering Principle

Shadows are a secondary thought; **Tonal Layering** is our primary tool for depth.

*   **Natural Lift:** Instead of a shadow, place a `surface-container-lowest` card on a `surface-container-low` background. The subtle shift in hex value provides a soft, sophisticated lift.
*   **Ambient Shadows:** For floating action buttons or "hot" deal cards, use an extra-diffused shadow: `0 12px 24px rgba(24, 26, 46, 0.06)`. Note the tint: we use a desaturated version of our `on-surface` color rather than pure black to keep the light feeling natural.
*   **The "Ghost Border":** If a separation is required for accessibility, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
*   **Glass Depth:** Use semi-transparent layers for navigation bars. This allows the energetic primary reds and warm oranges of the food photography to bleed through, making the app feel alive.

---

## 5. Components: Intentional Primitives

### Buttons
- **Primary:** Gradient-filled (`primary` to `primary-container`). 12px (`md`) corner radius. No border.
- **Secondary:** `secondary-fixed` background with `on-secondary-fixed` text. Used for "Add to Cart" or "Customize."
- **Tertiary:** No background. Bold `primary` text. Used for "View Details."

### Cards & Lists (The "No-Divider" Rule)
**Divider lines are forbidden.** Separate menu items using `1.5rem` (xl) vertical whitespace or by nesting the item within a `surface-container-low` rounded box. Item names should be `title-lg` to command attention.

### Chips (Dietary & Status)
Use `tertiary-container` (#008379) for positive states (e.g., "Ready for Pickup" or "Vegetarian"). The high-contrast teal acts as a sophisticated counterpoint to the warm red/orange palette.

### Interactive Inputs
- **Text Fields:** Use `surface-container-high` as the fill. Upon focus, transition the background to `surface-container-lowest` and apply a "Ghost Border" of `primary` at 20% opacity.

### Featured "Pizza Hero" Component
A bespoke component for this system: An oversized, asymmetrical card where the pizza image breaks the top and right boundaries. Use `secondary-container` (#ffab69) for the background to evoke a "warm oven" glow.

---

## 6. Do's and Don'ts

### Do:
- **Do** use generous whitespace. High-end editorial design breathes.
- **Do** overlap elements. Let a "Pepperoni" tag overlap the edge of a pizza image.
- **Do** use the `lg` (1rem) and `xl` (1.5rem) roundness for large containers to maintain the "friendly/family" brand persona.

### Don't:
- **Don't** use 1px solid black or grey borders. They kill the artisanal feel.
- **Don't** use pure black (#000000) for text. Always use `on-surface` (#181a2e) for a softer, more premium charcoal.
- **Don't** crowd the "Order" button. It should sit in a clear, high-contrast `surface-container-lowest` area to reduce friction.
- **Don't** use sharp corners. Everything should feel approachable and "hand-made."