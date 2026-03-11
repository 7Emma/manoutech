"use client";

import { plans } from "@/mockdata/pricing";
import { pricingCss } from "@/styles/pricing";

export default function PricingPage() {
  return (
    <>
      <style>{pricingCss}</style>
      <div className="pr-root">
        <div className="pr-grid" />
        <div className="pr-orb pr-orb-a" />
        <div className="pr-orb pr-orb-b" />

        <div className="pr-inner">
          <div className="pr-eyebrow"><span className="pr-dot" />Tarifs & offres</div>
          <h1 className="pr-h1">Des formules claires, adaptées à votre rythme.</h1>
          <p className="pr-sub">On calibre le scope, le budget et le planning dès le cadrage. Chaque plan inclut un lead produit, un lead technique et QA.</p>

          <div className="pr-grid-cards">
            {plans.map((p) => (
              <div key={p.name} className="pr-card">
                <div className="pr-badge">{p.badge}</div>
                <div className="pr-price">
                  {p.price} <span>{p.cycle}</span>
                </div>
                <div className="pr-desc">{p.desc}</div>
                <ul className="pr-ul">
                  {p.items.map((it) => (
                    <li key={it} className="pr-li">
                      {it}
                    </li>
                  ))}
                </ul>
                <a className="pr-cta" href="/contact">
                  Discuter d'un devis →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
