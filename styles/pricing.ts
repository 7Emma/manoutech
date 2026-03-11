export const pricingCss = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
  *,*::before,*::after{box-sizing:border-box;}
  body{margin:0;}
  .pr-root{font-family:'DM Sans',sans-serif;background:#ffffff;min-height:100vh;color:var(--foreground);padding:72px 32px 100px;position:relative;}
  .pr-grid{position:fixed;inset:0;pointer-events:none;z-index:0;
    background-image:linear-gradient(rgba(100,180,255,.02) 1px,transparent 1px),
                     linear-gradient(90deg,rgba(100,180,255,.02) 1px,transparent 1px);
    background-size:48px 48px;}
  .pr-orb{position:fixed;border-radius:50%;filter:blur(100px);pointer-events:none;z-index:0;}
  .pr-orb-a{width:420px;height:420px;top:-110px;right:-80px;background:radial-gradient(circle,rgba(167,139,250,.1) 0%,transparent 70%);}
  .pr-orb-b{width:340px;height:340px;bottom:6%;left:-70px;background:radial-gradient(circle,rgba(0,120,255,.08) 0%,transparent 70%);}
  .pr-inner{position:relative;z-index:1;max-width:1060px;margin:0 auto;}
  .pr-eyebrow{display:inline-flex;align-items:center;gap:7px;font-size:10.5px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--brand-dark-blue);margin-bottom:14px;
    padding:4px 12px 4px 9px;border-radius:99px;border:1px solid rgba(var(--brand-dark-blue-rgb),.25);background:rgba(var(--brand-dark-blue-rgb),.07);}
  .pr-dot{width:5px;height:5px;border-radius:50%;background:var(--brand-dark-blue);animation:prPulse 2s infinite;}
  @keyframes prPulse{0%,100%{opacity:1}50%{opacity:.3}}
  .pr-h1{font-family:'Syne',sans-serif;font-size:clamp(32px,5vw,52px);font-weight:800;letter-spacing:-.035em;color:var(--foreground);margin:0 0 12px;}
  .pr-sub{font-size:16px;font-weight:300;line-height:1.7;color:var(--brand-dark-gray);max-width:620px;margin-bottom:32px;}
  .pr-grid-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;}
  .pr-card{background:#f9f9f9;border:1px solid rgba(var(--brand-dark-blue-rgb),.1);border-radius:18px;padding:22px 22px 20px;position:relative;overflow:hidden;transition:transform .18s,border-color .18s;}
  .pr-card:hover{transform:translateY(-4px);border-color:var(--brand-dark-blue);}
  .pr-badge{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--brand-dark-blue);
    background:rgba(var(--brand-dark-blue-rgb),.07);border:1px solid rgba(var(--brand-dark-blue-rgb),.15);padding:4px 10px;border-radius:9px;display:inline-flex;gap:6px;align-items:center;}
  .pr-price{font-family:'Syne',sans-serif;font-size:28px;font-weight:800;color:var(--foreground);letter-spacing:-.03em;margin:12px 0 4px;}
  .pr-price span{font-size:13px;font-weight:600;color:var(--brand-dark-gray);margin-left:6px;}
  .pr-desc{font-size:13.5px;line-height:1.6;color:var(--brand-dark-gray);margin-bottom:14px;}
  .pr-ul{list-style:none;padding:0;margin:0 0 14px;display:flex;flex-direction:column;gap:9px;}
  .pr-li{display:flex;gap:8px;font-size:13px;color:var(--foreground);}
  .pr-li::before{content:'✓';color:var(--brand-dark-blue);font-weight:700;}
  .pr-cta{display:inline-flex;align-items:center;gap:8px;text-decoration:none;
    background:linear-gradient(90deg,var(--brand-dark-blue),var(--brand-dark-gray));color:white;font-size:13.5px;font-weight:600;padding:11px 20px;border-radius:99px;
    box-shadow:0 4px 18px rgba(var(--brand-dark-blue-rgb),.3);transition:transform .18s,box-shadow .18s;}
  .pr-cta:hover{transform:translateY(-2px);box-shadow:0 8px 26px rgba(var(--brand-dark-blue-rgb),.4);}
`;
