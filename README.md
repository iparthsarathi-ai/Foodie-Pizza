# 🍕 Foodie Pizza — Website

A mobile-first, high-performance static website for Foodie Pizza — a local pizza cafe.

## ✨ Features

- **Artisanal Design** — "The Artisanal Hearth" design system with rich typography, warm palette, and glassmorphism effects
- **Mobile-First** — Fully responsive from 320px to 1920px+ with a slide-in hamburger menu
- **Dynamic Menu** — 14 items across Veg, Non-Veg, Sides & Drinks — rendered from `js/data.js`
- **Category Filtering** — Instant filter with animated card transitions
- **WhatsApp Ordering** — Deep-linked pre-filled WhatsApp messages per menu item
- **Google Maps** — Embedded location map in the contact section
- **SEO Optimized** — Title, meta description, Open Graph, semantic HTML5, alt text on all images
- **Performance** — Lazy-loaded images, minimal dependencies, no build step required

## 📁 Folder Structure

```
foodie-pizza/
├── index.html       # Single-page app (all sections)
├── css/
│   └── style.css    # Design system + all component styles
├── js/
│   ├── data.js      # Menu data (edit this to update the menu!)
│   └── main.js      # JS for rendering, filtering, mobile nav
└── README.md
```

## 🛠️ Customisation

### Update WhatsApp Number
In `js/data.js`, change the first line:
```js
const WHATSAPP_NUMBER = "919999999999"; // Replace with your actual number
```
Also update the number in the `href` attributes in `index.html` (search for `wa.me/919999999999`).

### Update Menu Items
Edit the `menuData` array in `js/data.js`. Each item follows this schema:
```js
{
  id: 1,
  name: "Pizza Name",
  category: "veg",          // "veg" | "non-veg" | "sides" | "drinks"
  tag: "VEGAN",             // Short label on the image (null to hide)
  tagType: "veg",           // "veg" | "hot" | "featured" | "new"
  description: "...",
  price: 349,
  image: "images/products/your-image.jpg",
  imageAlt: "Description for accessibility",
  featured: false,          // true = warm orange glow card
  isVeg: true               // Enables Indian veg/non-veg dot indicator
}
```

### Update Google Maps
In `index.html`, find the `<iframe>` in the `#contact` section and replace the `src` with your own Google Maps embed URL.

### Update Address & Hours
In `index.html`, find the `<address>` block inside `#contact` and update accordingly.

## 🚀 Deployment (GitHub Pages)

1. Create a public repository on GitHub named `foodie-pizza`
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit — Foodie Pizza website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/foodie-pizza.git
git push -u origin main
```
3. Go to **Repo Settings → Pages → Source → Deploy from branch → `main` → Save**
4. Your site will be live at `https://YOUR_USERNAME.github.io/foodie-pizza`

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#b7102a` | Buttons, prices, active states |
| `--secondary-container` | `#ffab69` | Featured card warm glow |
| `--tertiary-container` | `#008379` | Veg tags, positive states |
| `--surface` | `#fbf8ff` | Page background |
| `--on-surface` | `#181a2e` | Body text |

Fonts: **Plus Jakarta Sans** (headlines) + **Inter** (body)

## 📱 Responsive Breakpoints

| Breakpoint | Grid Columns |
|---|---|
| Mobile (< 640px) | 1 column |
| Tablet (640px+) | 2 columns |
| Desktop (1024px+) | 3 columns |
| Wide (1280px+) | 4 columns |

---

© 2024 Foodie Pizza. Built with ❤️ and 🔥
