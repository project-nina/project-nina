"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  before: ReactNode;
  after: ReactNode;
  label: string;
  start?: number;
  autoSweep?: boolean;
  className?: string;
};

// Drag (or use arrow keys) to paint the "after" over the "before", left to right.
export default function BeforeAfter({ before, after, label, start = 50, autoSweep = false, className = "" }: Props) {
  const [pos, setPos] = useState(autoSweep ? 0 : start);
  const [touched, setTouched] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    if (!autoSweep || touched) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPos(start);
      return;
    }
    let raf = 0;
    let t0 = 0;
    const run = (t: number) => {
      if (!t0) t0 = t;
      const k = Math.min((t - t0) / 2600, 1);
      const ease = 1 - Math.pow(1 - k, 3);
      setPos(ease * start);
      if (k < 1) raf = requestAnimationFrame(run);
    };
    const id = setTimeout(() => (raf = requestAnimationFrame(run)), 600);
    return () => {
      clearTimeout(id);
      cancelAnimationFrame(raf);
    };
  }, [autoSweep, start, touched]);

  const moveTo = (clientX: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={box}
      className={`ba ${className}`}
      onPointerDown={(e) => {
        dragging.current = true;
        setTouched(true);
        e.currentTarget.setPointerCapture?.(e.pointerId);
        moveTo(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && moveTo(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <div className="ba-layer">{before}</div>
      <div className="ba-layer ba-after" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {after}
      </div>
      <span className="ba-tag ba-tag-before">Before</span>
      <span className="ba-tag ba-tag-after" style={{ opacity: pos > 12 ? 1 : 0 }}>
        After
      </span>
      <div
        className="ba-handle"
        style={{ left: `${pos}%` }}
        role="slider"
        tabIndex={0}
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
            e.preventDefault();
            setTouched(true);
            setPos((v) => Math.max(0, Math.min(100, v + (e.key === "ArrowRight" ? 5 : -5))));
          }
        }}
      >
        <span className="ba-line" />
        <span className="ba-brush" aria-hidden="true">
          <svg viewBox="0 0 48 48" width="40" height="40">
            <rect x="21" y="2" width="6" height="22" rx="3" fill="#8a5a3a" />
            <rect x="18" y="22" width="12" height="8" fill="#c0c6cc" />
            <path d="M17 30 h14 l2 12 q-9 6 -18 0 z" fill="#ffffff" stroke="#9aa3ad" strokeWidth="1.5" />
            
          </svg>
        </span>
      </div>
    </div>
  );
}
