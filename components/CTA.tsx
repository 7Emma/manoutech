import Link from "next/link";
import "../styles/cta.css";

export default function CTA() {
  return (
    <>

      <section className="cta-wrap">
        <div className="cta-deco">→</div>
        <div className="cta-left">
          <div className="cta-tag">
            <span className="cta-tag-dot" />
            Nouvelle mission
          </div>
          <h3 className="cta-h">
            Prêt à lancer
            <br />
            <em>votre prochain produit ?</em>
          </h3>
          <p className="cta-sub">
            Roadmap, budget, time-to-market — parlons-en concrètement. On
            revient sous 24h avec une estimation.
          </p>
        </div>
        <div className="cta-actions">
          <Link href="/contact" className="cta-btn-primary">
            Planifier un call →
          </Link>
          <a href="mailto:hello@manoutech.com" className="cta-btn-ghost">
            <svg
              width="13"
              height="13"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x=".7"
                y="2.7"
                width="12.6"
                height="8.6"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M1 3.5l6 4.5 6-4.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            hello@manoutech.com
          </a>
          <span className="cta-meta">Réponse garantie sous 24h</span>
        </div>
      </section>
    </>
  );
}
