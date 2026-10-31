"use client";

import { useEffect, useState, type FormEvent } from "react";
import { contactSection as c } from "@/content/copy";

type Who = "owner" | "agent";

export default function ContactForm() {
  const [who, setWho] = useState<Who>("owner");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  // Pathway buttons link to #send-property (agents) or #talk-privately (owners) to preselect the tab.
  useEffect(() => {
    const pick = () => {
      if (location.hash === "#send-property") setWho("agent");
      if (location.hash === "#talk-privately") setWho("owner");
    };
    pick();
    window.addEventListener("hashchange", pick);
    return () => window.removeEventListener("hashchange", pick);
  }, []);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, who }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("Sorry, that didn't send. Please call or text Nina instead.");
    } finally {
      setBusy(false);
    }
  }

  if (sent) {
    return (
      <div className="form-card form-thanks" role="status">
        <div className="thanks-icon" aria-hidden="true">✓</div>
        <h3>{c.thanksTitle}</h3>
        <p>{c.thanksText}</p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={submit}>
      <div className="tabs" role="tablist" aria-label="Who are you?">
        {(["owner", "agent"] as Who[]).map((k) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={who === k}
            className={`tab ${who === k ? "is-on" : ""}`}
            onClick={() => setWho(k)}
          >
            {c.tabs[k]}
          </button>
        ))}
      </div>

      <div className="fields">
        <label>
          <span>{c.fields.name}</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          <span>{c.fields.phone}</span>
          <input name="phone" required type="tel" autoComplete="tel" inputMode="tel" />
        </label>
        {who === "agent" && (
          <label>
            <span>{c.fields.agency}</span>
            <input name="agency" autoComplete="organization" />
          </label>
        )}
        <label>
          <span>{c.fields.email}</span>
          <input name="email" type="email" autoComplete="email" />
        </label>
        <label className="full">
          <span>{who === "agent" ? c.fields.addressOptional : c.fields.address}</span>
          <input name="address" required={who === "owner"} autoComplete="street-address" />
        </label>
        <label className="full">
          <span>{c.fields.situation}</span>
          <select name="situation" defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            {c.fields.situations.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="full">
          <span>{c.fields.message}</span>
          <textarea name="message" rows={3} />
        </label>
      </div>

      <button className="btn btn-gold btn-block" disabled={busy}>
        {busy ? "Sending…" : who === "agent" ? c.submitAgent : c.submitOwner}
      </button>
      {error && <p className="form-error">{error}</p>}
      <p className="form-privacy">🔒 {c.privacy}</p>
    </form>
  );
}
