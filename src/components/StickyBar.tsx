"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { contact, sticky } from "@/content/copy";

// Mobile-only bar so contacting Nina is always one tap. Hidden at the top and while the form is on screen.
export default function StickyBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const form = document.getElementById("contact");
    let formVisible = false;
    const io = new IntersectionObserver(([e]) => {
      formVisible = e.isIntersecting;
      update();
    });
    if (form) io.observe(form);
    const update = () => setShow(window.scrollY > window.innerHeight * 0.6 && !formVisible);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, []);
  return (
    <div className={`sticky ${show ? "is-on" : ""}`} aria-hidden={!show}>
      <a className="sticky-sm" href={`tel:${contact.phoneHref}`} tabIndex={show ? 0 : -1}>
        <Icon name="phone" size={20} /> {sticky.call}
      </a>
      <a className="sticky-sm" href={`sms:${contact.phoneHref}`} tabIndex={show ? 0 : -1}>
        <Icon name="text" size={20} /> {sticky.text}
      </a>
      <a className="sticky-main" href="#contact" tabIndex={show ? 0 : -1}>
        {sticky.label}
      </a>
    </div>
  );
}
