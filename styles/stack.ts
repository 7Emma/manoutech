export const stackCss = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
  *,*::before,*::after{box-sizing:border-box;}
  body{margin:0;}
  .stk-root{font-family:'DM Sans',sans-serif;background:#ffffff;min-height:100vh;color:var(--foreground);padding:72px 32px 100px;position:relative;}
  .stk-grid{position:fixed;inset:0;pointer-events:none;z-index:0;
    background-image:linear-gradient(rgba(36,38,117,.025) 1px,transparent 1px),
                     linear-gradient(90deg,rgba(36,38,117,.025) 1px,transparent 1px);
    background-size:48px 48px;}
  .stk-orb{position:fixed;border-radius:50%;filter:blur(100px);pointer-events:none;z-index:0;}
  .stk-orb-a{width:420px;height:420px;top:-120px;left:-80px;background:radial-gradient(circle,rgba(36,38,117,.08) 0%,transparent 70%);}
  .stk-orb-b{width:340px;height:340px;bottom:4%;right:-60px;background:radial-gradient(circle,rgba(36,38,117,.07) 0%,transparent 70%);}
  .stk-inner{position:relative;z-index:1;max-width:1060px;margin:0 auto;}
  .stk-eyebrow{display:inline-flex;align-items:center;gap:7px;font-size:10.5px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--brand-dark-blue);margin-bottom:14px;
    padding:4px 12px 4px 9px;border-radius:99px;border:1px solid rgba(36,38,117,.25);background:rgba(36,38,117,.07);}
  .stk-dot{width:5px;height:5px;border-radius:50%;background:var(--brand-dark-blue);animation:stkPulse 2s infinite;}
  @keyframes stkPulse{0%,100%{opacity:1}50%{opacity:.3}}
  .stk-h1{font-family:'Syne',sans-serif;font-size:clamp(32px,5vw,54px);font-weight:800;letter-spacing:-.035em;color:var(--foreground);margin:0 0 12px;}
  .stk-sub{font-size:16px;font-weight:300;line-height:1.7;color:var(--brand-dark-gray);max-width:620px;margin-bottom:32px;}
  .stk-grid-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;margin-bottom:42px;}
  .stk-card{background:#f9f9f9;border:1px solid rgba(36,38,117,.1);border-radius:16px;padding:18px 18px 16px;transition:transform .18s,border-color .18s;}
  .stk-card:hover{transform:translateY(-3px);border-color:var(--brand-dark-blue);}
  .stk-label{font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--brand-dark-blue);margin-bottom:6px;}
  .stk-title{font-family:'Syne',sans-serif;font-size:16px;font-weight:700;color:var(--foreground);letter-spacing:-.02em;margin-bottom:6px;}
  .stk-tags{display:flex;flex-wrap:wrap;gap:6px;}
  .stk-tag{font-size:11px;font-weight:500;color:var(--brand-dark-gray);background:rgba(36,38,117,.05);border:1px solid rgba(36,38,117,.1);padding:4px 10px;border-radius:7px;}
  .stk-note{font-size:12px;color:var(--brand-dark-gray);margin-top:10px;}
`;
