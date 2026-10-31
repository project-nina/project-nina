"use client";

import { useEffect, useRef, useState } from "react";

type Props = { src: string; poster: string; endPoster: string; label: string };

// Nina's banner film. Autoplays on a loop; dragging the paintbrush scrubs through it,
// and it carries on playing a moment after the visitor lets go.
export default function HeroFilm({ src, poster, endPoster, label }: Props) {
  const video = useRef<HTMLVideoElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const resume = useRef<ReturnType<typeof setTimeout>>(undefined);
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
    // Hold on the finished house for a beat before starting again.
    const ended = () => {
      resume.current = setTimeout(() => {
        v.currentTime = 0;
        v.play().catch(() => {});
      }, 2500);
    };
    v.addEventListener("timeupdate", tick);
    v.addEventListener("ended", ended);
    v.play().catch(() => {});
    return () => {
      v.removeEventListener("timeupdate", tick);
      v.removeEventListener("ended", ended);
      clearTimeout(resume.current);
    };
  }, []);

  const seek = (pct: number) => {
    const v = video.current;
    const p = Math.max(0, Math.min(100, pct));
    setPos(p);
    if (v && v.duration) {
      clearTimeout(resume.current);
      v.pause();
      v.currentTime = (p / 100) * (v.duration - 0.05);
    }
  };
  const release = () => {
    dragging.current = false;
    clearTimeout(resume.current);
    resume.current = setTimeout(() => {
      const v = video.current;
      if (!v) return;
      if (v.currentTime >= v.duration - 0.1) v.currentTime = 0;
      v.play().catch(() => {});
    }, 2500);
  };
  const fromPointer = (clientX: number) => {
    const r = track.current?.getBoundingClientRect();
    if (r) seek(((clientX - r.left) / r.width) * 100);
  };

  if (reduced) {
    return (
      <div className="film">
        <img src={endPoster} alt="Nina in her check fleece facing the camera, presenting a freshly renovated villa" />
      </div>
    );
  }

  return (
    <div className="film">
      <video ref={video} src={src} poster={poster} muted playsInline preload="auto" aria-label="Nina walks past a tired villa, it gets renovated behind her, then she turns to the camera and presents the finished house" />
      <div
        ref={track}
        className="film-track"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture?.(e.pointerId);
          fromPointer(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && fromPointer(e.clientX)}
        onPointerUp={release}
        onPointerCancel={release}
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
              release();
            }
          }}
        >
          <svg viewBox="0 0 48 48" width="34" height="34" aria-hidden="true">
            <rect x="21" y="2" width="6" height="22" rx="3" fill="#8a5a3a" />
            <rect x="18" y="22" width="12" height="8" fill="#c0c6cc" />
            <path d="M17 30 h14 l2 12 q-9 6 -18 0 z" fill="#ffffff" stroke="#9aa3ad" strokeWidth="1.5" />
          </svg>
        </span>
      </div>
    </div>
  );
}
