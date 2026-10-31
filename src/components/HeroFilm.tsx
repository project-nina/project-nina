"use client";

import { useEffect, useRef, useState } from "react";

type Props = { src: string; poster: string; endPoster: string; label: string };

// Nina's banner film. Plays once on load, then the paintbrush slider scrubs through it,
// so visitors can walk Nina across and watch the house get better behind her.
export default function HeroFilm({ src, poster, endPoster, label }: Props) {
  const video = useRef<HTMLVideoElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }
    const tick = () => v.duration && !dragging.current && setPos((v.currentTime / v.duration) * 100);
    v.addEventListener("timeupdate", tick);
    v.play().catch(() => {});
    return () => v.removeEventListener("timeupdate", tick);
  }, []);

  const seek = (pct: number) => {
    const v = video.current;
    const p = Math.max(0, Math.min(100, pct));
    setPos(p);
    if (v && v.duration) {
      v.pause();
      v.currentTime = (p / 100) * (v.duration - 0.05);
    }
  };
  const fromPointer = (clientX: number) => {
    const r = track.current?.getBoundingClientRect();
    if (r) seek(((clientX - r.left) / r.width) * 100);
  };

  if (reduced) {
    return (
      <div className="film">
        <img src={endPoster} alt="Nina in her check fleece in front of a freshly renovated villa" />
      </div>
    );
  }

  return (
    <div className="film">
      <video ref={video} src={src} poster={poster} muted playsInline preload="auto" aria-label="Nina walks past a tired villa and it gets renovated behind her" />
      <div
        ref={track}
        className="film-track"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture?.(e.pointerId);
          fromPointer(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && fromPointer(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <span className="film-fill" style={{ width: `${pos}%` }} />
        <span
          className="film-knob"
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
              seek(pos + (e.key === "ArrowRight" ? 5 : -5));
            }
          }}
        >
          <svg viewBox="0 0 48 48" width="34" height="34" aria-hidden="true">
            <rect x="21" y="2" width="6" height="22" rx="3" fill="#8a5a3a" />
            <rect x="18" y="22" width="12" height="8" fill="#c0c6cc" />
            <path d="M17 30 h14 l2 12 q-9 6 -18 0 z" fill="#f4b43a" />
          </svg>
        </span>
      </div>
    </div>
  );
}
