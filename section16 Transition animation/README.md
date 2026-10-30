# Section 16 — CSS Transitions & Animations

## Overview
This section brings your UI to life with CSS transitions, transforms, and keyframe animations. You'll also get a taste of how JavaScript can trigger CSS-based animations for interactive effects.

## Topics Covered

| Folder | Topic |
| :----- | :---- |
| `01-creating-transitions` | `transition` property, `duration`, `timing-function`, `delay`, transitioning multiple properties |
| `02-transforms` | `transform`: `translate()`, `scale()`, `rotate()`, `skew()` |
| `03-absolute-centering-translate` | Centering elements with `position: absolute` + `transform: translate(-50%, -50%)` |
| `04-3d-transmission` | `perspective`, `rotateX()`, `rotateY()`, `rotateZ()`, `transform-style: preserve-3d` |
| `05-js-and-css` | Toggling CSS classes with JavaScript to trigger transitions |
| `06-hamburger-menu` | Animated hamburger menu → X icon using CSS transitions and JS |
| `07-keyframes-1` | `@keyframes`, `animation-name`, `animation-duration`, `animation-iteration-count` |
| `08-keyframes-2` | `animation-delay`, `animation-direction`, `animation-fill-mode`, `animation-play-state` |
| `09-3d-rotating-cube` | 🏗️ Mini-project: 3D rotating cube with CSS transforms and keyframes |
| `10-presentation-website` | 🏗️ Mini-project: animated presentation/portfolio-style website |

## Key Concepts
- `transition: all 0.3s ease` — shorthand for smooth property changes
- Timing functions: `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier()`
- `transform` does not trigger layout reflow — performant for animations
- `@keyframes` for multi-step, repeating animations
- `animation-fill-mode: forwards` — keeps the final animation state
- Combining JS class toggling + CSS transitions = powerful interactive UI
