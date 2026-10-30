# Section 13 — Web Accessibility (a11y)

## Overview
This section focuses on making websites usable by everyone, including people who use screen readers, keyboard navigation, or other assistive technologies. Accessibility is both a best practice and a legal requirement in many countries.

## Topics Covered

| Folder | Topic |
| :----- | :---- |
| `01-screen-reader-testing` | Testing with NVDA/VoiceOver, how screen readers interpret HTML |
| `02-role-attribute` | ARIA `role` attribute — landmark roles like `banner`, `navigation`, `main`, `contentinfo` |
| `03-ARIA-attribures` | `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-hidden` |
| `04-ARIA-expand` | `aria-expanded` for toggleable menus, modals, and accordions |

## Key Concepts
- **Semantic HTML is the foundation of accessibility** — use the right element for the job
- ARIA (Accessible Rich Internet Applications) supplements semantic HTML
- `aria-label` provides accessible names for elements without visible text
- `aria-expanded="true/false"` communicates open/closed state of interactive widgets
- `tabindex` controls keyboard focus order
- Color contrast ratios (WCAG 2.1: minimum 4.5:1 for normal text)
- Skip navigation links for keyboard users

## Accessibility Checklist
- [ ] All images have descriptive `alt` text
- [ ] Form inputs have associated `<label>` elements
- [ ] Interactive elements are reachable by keyboard
- [ ] Color is not the only way to convey information
- [ ] Page has a single `<h1>` and logical heading hierarchy
- [ ] ARIA roles and attributes are used appropriately
