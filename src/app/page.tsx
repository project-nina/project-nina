import Header from "@/components/Header";
import StickyBar from "@/components/StickyBar";
import BeforeAfter from "@/components/BeforeAfter";
import Villa from "@/components/Villa";
import HeroFilm from "@/components/HeroFilm";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import {
  hero,
  takesOn,
  owners,
  agents,
  work,
  about,
  testimonials,
  instagram,
  faq,
  contactSection,
  contact,
  finalCta,
  footer,
  site,
} from "@/content/copy";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    areaServed: contact.area,
    telephone: contact.phoneHref,
    email: contact.email,
    address: { "@type": "PostalAddress", addressLocality: "Christchurch", addressCountry: "NZ" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1>
                {hero.headlineStart} <span className="accent">{hero.headlineAccent}</span>
              </h1>
              <p className="lead">{hero.sub}</p>
              <p className="pathway-prompt">{hero.pathwayPrompt}</p>
              <div className="pathways">
                {hero.pathways.map((p) => (
                  <a key={p.key} href={p.href} className={`pathway pathway-${p.key}`}>
                    <span className="pathway-label">{p.label}</span>
                    <span className="pathway-sub">{p.sub}</span>
                    <span className="pathway-arrow">
                      <Icon name="arrow" />
                    </span>
                  </a>
                ))}
              </div>
              <ul className="ticks">
                {hero.ticks.map((t) => (
                  <li key={t}>
                    <Icon name="check" size={18} /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hero-banner">
              <HeroFilm src={hero.film} poster={hero.filmPoster} endPoster={hero.filmEnd} label={hero.bannerHint} />
              <p className="banner-hint">👆 {hero.bannerHint}</p>
            </div>
          </div>
        </section>

        {/* WHAT NINA TAKES ON */}
        <section className="section">
          <div className="wrap">
            <p className="eyebrow center">{takesOn.eyebrow}</p>
            <h2 className="center">{takesOn.title}</h2>
            <div className="tiles">
              {takesOn.items.map((t) => (
                <div key={t.title} className="tile">
                  <span className="tile-icon">
                    <Icon name={t.icon} size={26} />
                  </span>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OWNERS PATHWAY */}
        <section className="section section-wash" id="owners">
          <div className="wrap">
            <p className="eyebrow">{owners.eyebrow}</p>
            <h2>{owners.title}</h2>
            <p className="lead narrow">{owners.intro}</p>
            <div className="options">
              {owners.options.map((o) => (
                <div key={o.title} className="option">
                  <span className="pill-tag">{o.tag}</span>
                  <h3>{o.title}</h3>
                  <p>{o.text}</p>
                  <ul className="ticks ticks-dark">
                    {o.points.map((pt) => (
                      <li key={pt}>
                        <Icon name="check" size={18} /> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <h3 className="steps-title">{owners.stepsTitle}</h3>
            <ol className="steps">
              {owners.steps.map((s, i) => (
                <li key={s.title}>
                  <span className="step-num">{i + 1}</span>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="cta-row">
              <a className="btn btn-gold" href="#talk-privately">
                {owners.cta}
              </a>
              <a className="btn btn-ghost-dark" href={`tel:${contact.phoneHref}`}>
                <Icon name="phone" size={18} /> {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* AGENTS PATHWAY */}
        <section className="section section-dark" id="agents">
          <div className="wrap">
            <p className="eyebrow eyebrow-gold">{agents.eyebrow}</p>
            <h2>{agents.title}</h2>
            <p className="lead narrow">{agents.intro}</p>
            <div className="benefits">
              {agents.benefits.map((b, i) => (
                <div key={b.title} className="benefit">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>
            <div className="cta-row">
              <a className="btn btn-gold" href="#send-property">
                {agents.cta}
              </a>
              <a className="btn btn-ghost-light" href="#work">
                {agents.secondaryCta}
              </a>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="section" id="work">
          <div className="wrap">
            <p className="eyebrow center">{work.eyebrow}</p>
            <h2 className="center">{work.title}</h2>
            <p className="lead center narrow">{work.intro}</p>
            <div className="projects">
              {work.projects.map((p) => (
                <article key={p.suburb} className="project">
                  <BeforeAfter
                    before={<Villa state="tired" scheme={p.scheme as "villa"} />}
                    after={<Villa state="fresh" scheme={p.scheme as "villa"} />}
                    label={`Before and after: ${p.suburb}`}
                    start={50}
                    className="ba-card"
                  />
                  <div className="project-body">
                    <p className="project-type">{p.type}</p>
                    <h3>{p.suburb}</h3>
                    <p>{p.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INSTAGRAM */}
        <section className="section section-ig" id="instagram">
          <div className="wrap">
            <div className="ig-head">
              <div>
                <p className="eyebrow">{instagram.eyebrow}</p>
                <h2>{instagram.title}</h2>
                <p className="lead">{instagram.intro}</p>
              </div>
              <a className="btn btn-ig" href={instagram.url} target="_blank" rel="noopener">
                <Icon name="insta" size={20} /> {instagram.follow}
              </a>
            </div>
          </div>
          <div className="ig-track" role="list">
            {instagram.reels.map((r, i) => (
              <a key={i} role="listitem" className="ig-reel" href={r.href} target="_blank" rel="noopener">
                <img src={r.cover} alt="" loading="lazy" />
                <span className="ig-play" aria-hidden="true">▶</span>
                <span className="ig-cap">
                  <strong>{instagram.handle}</strong>
                  {r.caption}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="section section-wash" id="about">
          <div className="wrap about-grid">
            <div className="about-photos">
              <img className="about-photo" src={about.photo} alt={about.photoAlt} loading="lazy" />
              <img className="about-photo-2" src={about.photo2} alt={about.photo2Alt} loading="lazy" />
            </div>
            <div>
              <p className="eyebrow">{about.eyebrow}</p>
              <h2>{about.title}</h2>
              {about.paragraphs.map((t) => (
                <p key={t} className="body-p">
                  {t}
                </p>
              ))}
              <div className="stats">
                {about.stats.map((s) => (
                  <div key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section">
          <div className="wrap">
            <p className="eyebrow center">{testimonials.eyebrow}</p>
            <h2 className="center">{testimonials.title}</h2>
            <div className="quotes">
              {testimonials.items.map((q) => (
                <figure key={q.name} className="quote">
                  <blockquote>“{q.quote}”</blockquote>
                  <figcaption>
                    <strong>{q.name}</strong> · {q.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section section-dark" id="contact">
          <span id="send-property" className="anchor" />
          <span id="talk-privately" className="anchor" />
          <div className="wrap contact-grid">
            <div>
              <p className="eyebrow eyebrow-gold">{contactSection.eyebrow}</p>
              <h2>{contactSection.title}</h2>
              <p className="lead">{contactSection.intro}</p>
              <div className="direct">
                <a className="direct-btn" href={`tel:${contact.phoneHref}`}>
                  <Icon name="phone" /> <span>{contactSection.callLabel}</span>
                  <small>{contact.phoneDisplay}</small>
                </a>
                <a className="direct-btn" href={`sms:${contact.phoneHref}`}>
                  <Icon name="text" /> <span>{contactSection.textLabel}</span>
                  <small>{contact.phoneDisplay}</small>
                </a>
                <a className="direct-btn" href={`mailto:${contact.email}`}>
                  <Icon name="mail" /> <span>{contactSection.emailLabel}</span>
                  <small>{contact.email}</small>
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="wrap narrow-wrap">
            <p className="eyebrow center">{faq.eyebrow}</p>
            <h2 className="center">{faq.title}</h2>
            <div className="faq">
              {faq.items.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final">
          <div className="wrap final-inner">
            <img className="final-mascot" src="/media/nina-mascot.webp" alt="Cartoon Nina with her paintbrush and paint tin" loading="lazy" />
            <div className="final-text">
            <h2>{finalCta.title}</h2>
            <p>{finalCta.sub}</p>
            <div className="cta-row">
              <a className="btn btn-gold" href="#contact">
                {finalCta.primary}
              </a>
              <a className="btn btn-ghost-dark" href={`tel:${contact.phoneHref}`}>
                <Icon name="phone" size={18} /> {contact.phoneDisplay}
              </a>
            </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="wrap footer-row">
          <Logo light />
          <p>{footer.line}</p>
          <p className="small">
            {footer.small} · <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </div>
      </footer>
      <StickyBar />
    </>
  );
}
