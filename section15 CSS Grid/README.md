# Section 15 — CSS Grid

## Overview
This section covers CSS Grid — the most powerful two-dimensional layout system available in CSS. Unlike Flexbox (which is one-dimensional), Grid lets you control both rows and columns simultaneously, making complex layouts straightforward.

## Topics Covered

| Folder | Topic |
| :----- | :---- |
| `01-grid-columns` | `display: grid`, `grid-template-columns`, `fr` unit |
| `02-repeat-minmax-functions` | `repeat()`, `minmax()`, `auto-fill`, `auto-fit` |
| `03-grid-rows` | `grid-template-rows`, `grid-auto-rows`, `row-gap` |
| `04-grid-challenge-1` | 🏗️ Challenge: build a layout using grid columns and rows |
| `05-align-and-justify` | `justify-items`, `align-items`, `justify-content`, `align-content`, `place-items` |
| `06-autofill-autofit` | Responsive grids without media queries using `auto-fill` vs `auto-fit` |
| `07-positioning-spanning` | `grid-column`, `grid-row`, `span` keyword for spanning cells |
| `08-named-grid-lines` | Naming grid lines `[line-name]` for readable positioning |
| `09-grid-challenge-2` | 🏗️ Challenge: complex grid layout with spanning |
| `10-responsive-grid` | Fully responsive grid layouts — no media queries needed |
| `11-grid-templates-areas` | `grid-template-areas` for semantic, named layout regions |

## Key Concepts
- `fr` (fractional unit) — distributes available space proportionally
- `repeat(3, 1fr)` creates 3 equal columns
- `minmax(200px, 1fr)` sets min and max size for a track
- `auto-fill` vs `auto-fit`: both create responsive columns, `auto-fit` collapses empty tracks
- `grid-column: 1 / 3` — span from line 1 to line 3
- `grid-template-areas` creates a visual map of your layout in CSS
- Grid vs Flexbox: use **Grid for 2D** layout, **Flexbox for 1D** (rows or columns)

## Example: Template Areas
```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 200px 1fr;
}
```
