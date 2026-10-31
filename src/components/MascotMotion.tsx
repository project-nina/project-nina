"use client";

import { useEffect } from "react";

// Wakes up each cartoon Nina as her section scrolls into view: a quick pop-in, then a small
// looping move (wave, nudge, jingle...) set by the image's data-anim attribute. CSS does the rest.
export default function MascotMotion() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-anim]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-awake"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          e.target.classList.toggle("is-awake", e.isIntersecting);
        }
      },
      { threshold: 0.35 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
