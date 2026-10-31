"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { nav, contact } from "@/content/copy";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`header ${scrolled || open ? "is-solid" : ""}`}>
      <div className="wrap header-row">
        <a href="#top" aria-label="Project Nina home">
          <Logo />
        </a>
        <nav className="nav" aria-label="Main">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="header-cta">
          <a className="btn btn-ghost-dark btn-sm hide-sm" href={`tel:${contact.phoneHref}`}>
            <Icon name="phone" size={18} /> {contact.phoneDisplay}
          </a>
          <a className="btn btn-gold btn-sm btn-avatar" href="#contact">
            <img className="avatar" src="/media/nina-avatar.webp" alt="" width={30} height={30} />
            Talk to me
          </a>
          <a className="call-btn" href={`tel:${contact.phoneHref}`} aria-label={`Call Nina on ${contact.phoneDisplay}`}>
            <Icon name="phone" size={20} />
          </a>
          <button className="menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href={`tel:${contact.phoneHref}`} onClick={() => setOpen(false)}>
            Call {contact.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}
