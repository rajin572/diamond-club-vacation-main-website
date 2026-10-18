import type Lenis from "lenis";

/**
 * The page-wide Lenis smooth-scroll instance (created in LenisSmoothScroll). Lenis keeps its own scroll position,
 * so anything that scrolls the page from code has to go through it; native `scrollIntoView` / `scrollTo` calls get
 * overridden by Lenis on the next frame, which made the first click on an in-page link do nothing.
 */
let instance: Lenis | null = null;

export function setLenisInstance(lenis: Lenis | null): void {
  instance = lenis;
}

export function getLenisInstance(): Lenis | null {
  return instance;
}
