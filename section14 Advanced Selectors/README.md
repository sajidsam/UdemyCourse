# Section 14 — Advanced CSS Selectors

## Overview

This section dives into powerful CSS selectors that go far beyond basic class and ID targeting. You'll learn to write precise, efficient, and modern CSS using attribute selectors, combinators, pseudo-elements, and cutting-edge relational selectors.

## Topics Covered

| Folder                           | Topic                                                                                               |
| :------------------------------- | :-------------------------------------------------------------------------------------------------- |
| `01-attribute-selectors`       | `[attr]`, `[attr="value"]`, `[attr^="start"]`, `[attr$="end"]`, `[attr*="contains"]`      |
| `02-child-sibling-combinators` | `>` (child), `+` (adjacent sibling), `~` (general sibling)                                    |
| `03-pseudo-elements`           | `::before`, `::after`, `::first-line`, `::first-letter`, `::placeholder`, `::selection` |
| `04-nth-child-classes`         | `:nth-child(n)`, `:first-child`, `:last-child`, `:only-child`                               |
| `05-nth-of-type-classes`       | `:nth-of-type(n)`, `:first-of-type`, `:last-of-type`                                          |
| `06-before-and-after`          | Using `::before` and `::after` with `content` for decorative elements                         |
| `07-image-overlay`             | CSS overlay effects using `::before`/`::after` with `position: absolute`                      |
| `08-is-where-has`              | `:is()`, `:where()` (forgiving selector lists), `:has()` (parent selector)                    |
| `09-styling-forms`             | Advanced form styling using attribute and pseudo-class selectors                                    |
| `10-selectors-challenge`       |  Challenge: apply advanced selectors to style a complex page                                       |

## Key Concepts

- Attribute selectors for targeting elements by HTML attributes (great for forms)
- `::before` and `::after` require `content: ""` to render
- `:nth-child(2n)` selects even elements; `:nth-child(2n+1)` selects odd
- `:is()` reduces repetition: `:is(h1, h2, h3) { color: red }`
- `:where()` is like `:is()` but has **zero specificity**
- `:has()` — the long-awaited "parent selector": `div:has(img) { ... }`
