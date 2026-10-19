"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import type { DesignImage } from "./types";

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const TAP_ZOOM = 2.5;
const BUTTON_STEP = 1.5;
/** Sideways distance (px) that counts as a swipe to the next / previous photo. */
const SWIPE_DISTANCE = 50;

interface View {
  scale: number;
  x: number;
  y: number;
}

const FIT: View = { scale: MIN_SCALE, x: 0, y: 0 };

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

/** Keeps the zoomed photo from being dragged completely out of the viewer. */
function constrain(view: View, width: number, height: number): View {
  const scale = clamp(view.scale, MIN_SCALE, MAX_SCALE);
  if (scale <= MIN_SCALE) return FIT;
  const maxX = (width * (scale - 1)) / 2;
  const maxY = (height * (scale - 1)) / 2;
  return { scale, x: clamp(view.x, -maxX, maxX), y: clamp(view.y, -maxY, maxY) };
}

/** Zooms to `nextScale` while keeping the point (cx, cy), measured from the stage centre, under the cursor/finger. */
function zoomAbout(view: View, nextScale: number, cx: number, cy: number, width: number, height: number): View {
  const scale = clamp(nextScale, MIN_SCALE, MAX_SCALE);
  const ratio = scale / view.scale;
  return constrain({ scale, x: cx - (cx - view.x) * ratio, y: cy - (cy - view.y) * ratio }, width, height);
}

interface GestureState {
  startX: number;
  startY: number;
  originX: number;
  originY: number;
  moved: boolean;
  pinched: boolean;
  pinchDistance: number;
  pinchScale: number;
}

/**
 * One photo with zoom: click/tap toggles 1x <-> 2.5x at the pointer, the mouse wheel and pinch zoom
 * continuously, drag pans, and the toolbar / + - 0 keys zoom about the centre. Remounted (via `key`)
 * for every photo so each one opens fitted to the screen. A quick sideways swipe on a fitted photo (phones)
 * calls  to go to the next / previous photo.
 */
function ZoomStage({ image, label, onSwipe }: { image: DesignImage; label: string; onSwipe?: (direction: "next" | "prev") => void }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const gesture = useRef<GestureState | null>(null);
  const [view, setView] = useState<View>(FIT);
  const [dragging, setDragging] = useState(false);

  const measure = () => {
    const rect = stageRef.current?.getBoundingClientRect();
    return rect ?? new DOMRect(0, 0, 1, 1);
  };

  const zoomBy = useCallback((factor: number) => {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    setView((current) => zoomAbout(current, current.scale * factor, 0, 0, rect.width, rect.height));
  }, []);

  // Wheel needs a non-passive listener so the page behind does not scroll while zooming.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const rect = stage.getBoundingClientRect();
      const cx = event.clientX - rect.left - rect.width / 2;
      const cy = event.clientY - rect.top - rect.height / 2;
      setView((current) =>
        zoomAbout(current, current.scale * Math.exp(-event.deltaY * 0.002), cx, cy, rect.width, rect.height)
      );
    };
    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => stage.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "+" || event.key === "=") zoomBy(BUTTON_STEP);
      if (event.key === "-" || event.key === "_") zoomBy(1 / BUTTON_STEP);
      if (event.key === "0") setView(FIT);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomBy]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.current.size === 1) {
      gesture.current = {
        startX: event.clientX,
        startY: event.clientY,
        originX: view.x,
        originY: view.y,
        moved: false,
        pinched: false,
        pinchDistance: 0,
        pinchScale: view.scale,
      };
    } else if (pointers.current.size === 2 && gesture.current) {
      const [a, b] = [...pointers.current.values()];
      gesture.current.pinched = true;
      gesture.current.pinchDistance = Math.hypot(a.x - b.x, a.y - b.y) || 1;
      gesture.current.pinchScale = view.scale;
    }
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!pointers.current.has(event.pointerId) || !gesture.current) return;
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const state = gesture.current;
    const rect = measure();

    if (pointers.current.size >= 2) {
      const [a, b] = [...pointers.current.values()];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      const cx = (a.x + b.x) / 2 - rect.left - rect.width / 2;
      const cy = (a.y + b.y) / 2 - rect.top - rect.height / 2;
      const target = state.pinchScale * (distance / state.pinchDistance);
      setView((current) => zoomAbout(current, target, cx, cy, rect.width, rect.height));
      state.moved = true;
      return;
    }

    const dx = event.clientX - state.startX;
    const dy = event.clientY - state.startY;
    if (Math.hypot(dx, dy) > 5) state.moved = true;
    if (state.moved && view.scale > MIN_SCALE) {
      setDragging(true);
      setView((current) =>
        constrain({ scale: current.scale, x: state.originX + dx, y: state.originY + dy }, rect.width, rect.height)
      );
    }
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const state = gesture.current;
    pointers.current.delete(event.pointerId);
    setDragging(false);
    if (!state) return;

    if (pointers.current.size === 0) {
      const dx = event.clientX - state.startX;
      const dy = event.clientY - state.startY;
      const swiped = event.type === "pointerup" && !state.pinched && view.scale <= MIN_SCALE && Math.abs(dx) > SWIPE_DISTANCE && Math.abs(dx) > Math.abs(dy) * 1.5;
      if (swiped) onSwipe?.(dx < 0 ? "next" : "prev");
      // A tap (no drag, no pinch) toggles zoom at the tapped point.
      if (!swiped && !state.moved && !state.pinched && event.type === "pointerup") {
        const rect = measure();
        const cx = event.clientX - rect.left - rect.width / 2;
        const cy = event.clientY - rect.top - rect.height / 2;
        setView((current) =>
          current.scale > MIN_SCALE ? FIT : zoomAbout(current, TAP_ZOOM, cx, cy, rect.width, rect.height)
        );
      }
      gesture.current = null;
    } else if (gesture.current) {
      // One finger left after a pinch: continue as a pan from the current position.
      const [remaining] = [...pointers.current.values()];
      gesture.current = { ...state, startX: remaining.x, startY: remaining.y, originX: view.x, originY: view.y, moved: true };
    }
  };

  const zoomed = view.scale > MIN_SCALE;

  return (
    <>
      <div
        ref={stageRef}
        className="dcv-lb-stage"
        style={{ cursor: zoomed ? (dragging ? "grabbing" : "grab") : "zoom-in" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className="dcv-lb-pan"
          style={{
            transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
            transition: dragging ? "none" : "transform 0.16s ease-out",
          }}
        >
          {/* Original file (not the resized variant) so zooming stays sharp. */}
          <Image src={image} alt={label} fill sizes="100vw" priority unoptimized draggable={false} />
        </div>
      </div>
      <div className="dcv-lb-tools" role="group" aria-label="Zoom">
        <button type="button" aria-label="Zoom out" disabled={!zoomed} onClick={() => zoomBy(1 / BUTTON_STEP)}>
          −
        </button>
        <button
          type="button"
          className="dcv-lb-level"
          style={{ width: "auto", borderRadius: 999, padding: "0 10px", background: "none", color: "#fff", fontSize: 12 }}
          aria-label="Reset zoom"
          disabled={!zoomed}
          onClick={() => setView(FIT)}
        >
          {Math.round(view.scale * 100)}%
        </button>
        <button type="button" aria-label="Zoom in" disabled={view.scale >= MAX_SCALE} onClick={() => zoomBy(BUTTON_STEP)}>
          +
        </button>
      </div>
    </>
  );
}

interface LightboxProps {
  images: DesignImage[];
  index: number;
  alt: string;
  onClose: () => void;
  onChange: (index: number) => void;
}

function Lightbox({ images, index, alt, onClose, onChange }: LightboxProps) {
  const count = images.length;
  const prev = useCallback(() => onChange((index - 1 + count) % count), [index, count, onChange]);
  const next = useCallback(() => onChange((index + 1) % count), [index, count, onChange]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="dcv-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} photo viewer`}
      data-lenis-prevent
      onClick={onClose}
    >
      <figure onClick={(event) => event.stopPropagation()}>
        <ZoomStage
          key={index}
          image={images[index]}
          label={`${alt} ${index + 1}`}
          onSwipe={count > 1 ? (direction) => (direction === "next" ? next() : prev()) : undefined}
        />
      </figure>
      <button type="button" className="dcv-lb-close" aria-label="Close" onClick={onClose}>
        ×
      </button>
      {count > 1 && (
        <>
          <button type="button" className="dcv-lb-prev" aria-label="Previous photo" onClick={(event) => { event.stopPropagation(); prev(); }}>
            ‹
          </button>
          <button type="button" className="dcv-lb-next" aria-label="Next photo" onClick={(event) => { event.stopPropagation(); next(); }}>
            ›
          </button>
          <div className="dcv-lb-count">
            {index + 1} / {count}
          </div>
        </>
      )}
    </div>
  );
}

interface PhotoGalleryProps {
  images: DesignImage[];
  /** Describes the photos for screen readers, e.g. "St. Regis dining". */
  alt: string;
}

/** Asymmetric photo mosaic with a click-to-enlarge, zoomable viewer (client design: `.gallery`). */
export function PhotoGallery({ images, alt }: PhotoGalleryProps) {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);

  if (images.length === 0) return null;

  return (
    <>
      <div className="dcv-gallery">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            aria-label={`Enlarge ${alt} photo ${index + 1}`}
            onClick={() => setActive(index)}
          >
            <Image
              src={image}
              alt={`${alt} ${index + 1}`}
              sizes={index === 0 ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 50vw, 25vw"}
            />
          </button>
        ))}
      </div>
      {active !== null && <Lightbox images={images} index={active} alt={alt} onClose={close} onChange={setActive} />}
    </>
  );
}

interface PhotoStackProps {
  images: DesignImage[];
  alt: string;
  /** How many thumbnails to show. */
  limit?: number;
}

/** Vertical thumbnail stack for a detail page's side panel; every thumbnail opens the full viewer. */
export function PhotoStack({ images, alt, limit = 4 }: PhotoStackProps) {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);

  if (images.length === 0) return null;

  return (
    <>
      {images.slice(0, limit).map((image, index) => (
        <button
          key={`${image.src}-${index}`}
          type="button"
          aria-label={`Enlarge ${alt} photo ${index + 1}`}
          onClick={() => setActive(index)}
          style={{ display: "block", width: "100%", padding: 0, border: 0, background: "none", cursor: "zoom-in" }}
        >
          <Image className="dcv-aside-photo" src={image} alt={`${alt} ${index + 1}`} sizes="(max-width: 900px) 100vw, 30vw" />
        </button>
      ))}
      {active !== null && <Lightbox images={images} index={active} alt={alt} onClose={close} onChange={setActive} />}
    </>
  );
}
