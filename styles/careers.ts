export const careersCss = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
  *,*::before,*::after{box-sizing:border-box;}
  body{margin:0;}
  .cr-root{font-family:'DM Sans',sans-serif;background:#ffffff;min-height:100vh;color:var(--foreground);padding:72px 32px 100px;position:relative;}
  .cr-grid{position:fixed;inset:0;pointer-events:none;z-index:0;
    background-image:linear-gradient(rgba(100,180,255,.02) 1px,transparent 1px),
                     linear-gradient(90deg,rgba(100,180,255,.02) 1px,transparent 1px);
    background-size:48px 48px;}
  .cr-orb{position:fixed;border-radius:50%;filter:blur(100px);pointer-events:none;z-index:0;}
  .cr-orb-a{width:420px;height:420px;top:-110px;left:-70px;background:radial-gradient(circle,rgba(0,120,255,.1) 0%,transparent 70%);}
  .cr-orb-b{width:340px;height:340px;bottom:6%;right:-70px;background:radial-gradient(circle,rgba(78,201,176,.08) 0%,transparent 70%);}
  .cr-inner{position:relative;z-index:1;max-width:1060px;margin:0 auto;}
  .cr-eyebrow{display:inline-flex;align-items:center;gap:7px;font-size:10.5px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--brand-dark-blue);margin-bottom:14px;
    padding:4px 12px 4px 9px;border-radius:99px;border:1px solid rgba(var(--brand-dark-blue-rgb),.25);background:rgba(var(--brand-dark-blue-rgb),.07);}
  .cr-dot{width:5px;height:5px;border-radius:50%;background:var(--brand-dark-blue);animation:crPulse 2s infinite;}
  @keyframes crPulse{0%,100%{opacity:1}50%{opacity:.3}}
  .cr-h1{font-family:'Syne',sans-serif;font-size:clamp(32px,5vw,52px);font-weight:800;letter-spacing:-.035em;color:var(--foreground);margin:0 0 12px;}
  .cr-sub{font-size:16px;font-weight:300;line-height:1.7;color:var(--brand-dark-gray);max-width:640px;margin-bottom:32px;}
  .cr-grid-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;margin-bottom:42px;}
  .cr-card{background:#f9f9f9;border:1px solid rgba(var(--brand-dark-blue-rgb),.1);border-radius:16px;padding:18px 18px 16px;transition:transform .18s,border-color .18s;position:relative;overflow:hidden;}
  .cr-card:hover{transform:translateY(-3px);border-color:var(--brand-dark-blue);}
  .cr-role{font-family:'Syne',sans-serif;font-size:17px;font-weight:700;color:var(--foreground);margin-bottom:6px;letter-spacing:-.02em;}
  .cr-loc{font-size:12px;font-weight:600;color:var(--brand-dark-blue);letter-spacing:.08em;text-transform:uppercase;margin-bottom:10px;}
  .cr-desc{font-size:13.5px;line-height:1.6;color:var(--brand-dark-gray);margin-bottom:10px;}
  .cr-tags{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:12px;}
  .cr-tag{font-size:11px;font-weight:500;color:var(--brand-dark-gray);background:rgba(var(--brand-dark-blue-rgb),.05);border:1px solid rgba(var(--brand-dark-blue-rgb),.1);padding:4px 10px;border-radius:7px;}
  .cr-cta{display:inline-flex;align-items:center;gap:7px;text-decoration:none;color:var(--brand-dark-blue);font-weight:600;font-size:13px;transition:gap .18s;}
  .cr-card:hover .cr-cta{gap:11px;}
  .cr-note{font-size:13px;color:var(--brand-dark-gray);margin-top:8px;}
`;
