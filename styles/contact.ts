export const contactCss = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; }

  .ct-root {
    font-family: 'DM Sans', sans-serif;
    background: transparent; min-height: 100vh;
    color: inherit; padding: 0;
    position: relative;
  }
  .ct-bg-grid {
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background-image:
      linear-gradient(rgba(var(--brand-dark-blue-rgb),.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(var(--brand-dark-blue-rgb),.025) 1px, transparent 1px);
    background-size: 48px 48px;
  }
  .ct-orb {
    position: fixed; border-radius: 50%; filter: blur(100px);
    pointer-events: none; z-index: 0;
  }
  .ct-orb-a { width:480px; height:480px; top:-120px; right:-60px;
    background:radial-gradient(circle,rgba(var(--brand-dark-blue-rgb),.1) 0%,transparent 70%); }
  .ct-orb-b { width:400px; height:400px; bottom:5%; left:-90px;
    background:radial-gradient(circle,rgba(var(--brand-dark-blue-rgb),.09) 0%,transparent 70%); }
  .ct-inner { position:relative; z-index:1; max-width:1060px; margin:0 auto; padding-top: 40px; }

  /* ── HERO ── */
  .ct-hero { margin-bottom:64px; }
  .ct-eyebrow {
    display:inline-flex; align-items:center; gap:7px;
    font-size:10.5px; font-weight:500; letter-spacing:.2em; text-transform:uppercase;
    color:var(--brand-dark-blue); margin-bottom:16px;
    padding:4px 12px 4px 9px; border-radius:99px;
    border:1px solid rgba(var(--brand-dark-blue-rgb),.22); background:rgba(var(--brand-dark-blue-rgb),.06);
  }
  .ct-dot { width:5px; height:5px; border-radius:50%; background:var(--brand-dark-blue);
    animation:ctPulse 2s infinite; }
  @keyframes ctPulse { 0%,100%{opacity:1} 50%{opacity:.3} }
  .ct-h1 {
    font-family:'Syne',sans-serif;
    font-size:clamp(34px,5vw,56px); font-weight:800;
    letter-spacing:-.035em; color:var(--foreground); margin:0 0 18px; line-height:1.06;
  }
  .ct-h1 em { font-style:normal; color:transparent;
    background:linear-gradient(90deg,var(--brand-dark-blue),var(--brand-dark-blue));
    -webkit-background-clip:text; background-clip:text; }
  .ct-sub {
    font-size:17px; font-weight:300; line-height:1.75;
    color:var(--brand-dark-gray); max-width:560px;
  }

  /* ── MAIN GRID ── */
  .ct-grid {
    display:grid; grid-template-columns:1.1fr 0.9fr; gap:20px; margin-bottom:64px;
  }
  @media(max-width:860px){ .ct-grid{grid-template-columns:1fr;} }

  /* ── FORM ── */
  .ct-form-wrap {
    background:rgba(255,255,255,.025); border:1px solid rgba(255,255,255,.07);
    border-radius:24px; padding:38px 36px 34px;
    position:relative; overflow:hidden;
  }
  .ct-form-wrap::before {
    content:''; position:absolute; top:0; left:0; right:0; height:1.5px;
    background:linear-gradient(90deg,transparent,var(--brand-dark-blue),transparent);
  }
  .ct-form { display:flex; flex-direction:column; gap:20px; }
  .ct-form-title {
    font-family:'Syne',sans-serif; font-size:20px; font-weight:800;
    color:var(--foreground); letter-spacing:-.025em; margin-bottom:4px;
  }
  .ct-form-sub { font-size:13px; font-weight:300; color:var(--brand-dark-gray); line-height:1.6; }

  .ct-row-2 { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
  @media(max-width:520px){ .ct-row-2{grid-template-columns:1fr;} }

  .ct-field { display:flex; flex-direction:column; gap:7px; }
  .ct-label {
    font-size:12px; font-weight:500; color:var(--foreground);
    display:flex; align-items:center; gap:6px;
  }
  .ct-opt {
    font-size:10px; font-weight:400; color:var(--brand-light-gray);
    background:rgba(var(--brand-dark-blue-rgb),.04); border:1px solid rgba(var(--brand-dark-blue-rgb),.05);
    padding:1px 7px; border-radius:99px;
  }
  .ct-input {
    background:var(--primary); border:1px solid rgba(var(--brand-dark-blue-rgb),.15);
    border-radius:12px; padding:11px 14px;
    font-family:'DM Sans',sans-serif; font-size:14px;
    color:var(--foreground); outline:none; width:100%;
    transition:border-color .2s, background .2s, box-shadow .2s;
  }
  .ct-input::placeholder { color:var(--brand-light-gray); }
  .ct-input:focus {
    border-color:var(--brand-dark-blue); background:var(--primary);
    box-shadow:0 0 0 3px rgba(var(--brand-dark-blue-rgb),.07);
  }
  .ct-textarea { resize:vertical; min-height:110px; line-height:1.65; }

  /* Services chips */
  .ct-chips { display:flex; flex-wrap:wrap; gap:7px; }
  .ct-chip {
    font-size:12px; font-weight:500; padding:6px 14px; border-radius:99px;
    cursor:pointer; border:none; transition:all .18s;
    background:#f0f0f0; border:1px solid rgba(var(--brand-dark-blue-rgb),.15);
    color:var(--foreground);
  }
  .ct-chip:hover { color:var(--brand-dark-blue); border-color:var(--brand-dark-blue); }
  .ct-chip.on {
    background:#d4f5eb; border-color:var(--brand-dark-blue); color:var(--brand-dark-blue);
  }

  /* Budget cards */
  .ct-budgets { display:grid; grid-template-columns:repeat(3,1fr); gap:9px; }
  @media(max-width:460px){ .ct-budgets{grid-template-columns:1fr;} }
  .ct-budget {
    position:relative; border:none; cursor:pointer;
    background:#f9f9f9; border:1px solid rgba(var(--brand-dark-blue-rgb),.15);
    border-radius:12px; padding:13px 12px; text-align:left;
    display:flex; flex-direction:column; gap:3px;
    transition:background .2s, border-color .2s, transform .18s;
  }
  .ct-budget:hover { background:#f0f0f0; transform:translateY(-2px); }
  .ct-budget.on {
    background:#e8f9f4; border-color:var(--brand-dark-blue); transform:translateY(-2px);
  }
  .ct-budget-v {
    font-family:'Syne',sans-serif; font-size:13.5px; font-weight:700;
    color:var(--foreground); letter-spacing:-.02em;
  }
  .ct-budget.on .ct-budget-v { color:var(--brand-dark-blue); }
  .ct-budget-d { font-size:10.5px; font-weight:300; color:var(--brand-light-gray); }
  .ct-budget-ck {
    position:absolute; top:9px; right:11px; font-size:9.5px; color:var(--brand-dark-blue);
  }

  /* Submit */
  .ct-submit {
    width:100%; border:none; cursor:pointer;
    background:linear-gradient(135deg,var(--brand-dark-blue),var(--brand-dark-blue));
    color:white; font-family:'DM Sans',sans-serif;
    font-size:15px; font-weight:600; letter-spacing:-.01em;
    padding:15px; border-radius:14px; min-height:52px;
    display:flex; align-items:center; justify-content:center; gap:8px;
    box-shadow:0 4px 24px rgba(0,120,255,.3),inset 0 1px 0 rgba(255,255,255,.1);
    transition:transform .18s, box-shadow .18s, opacity .18s;
  }
  .ct-submit:hover:not(:disabled) {
    transform:translateY(-2px); box-shadow:0 8px 32px rgba(0,120,255,.4);
  }
  .ct-submit:disabled { opacity:.6; cursor:not-allowed; }
  .ct-submit-arrow { transition:transform .2s; font-size:16px; }
  .ct-submit:hover .ct-submit-arrow { transform:translateX(4px); }
  .ct-spinner {
    width:18px; height:18px; border-radius:50%;
    border:2px solid rgba(255,255,255,.25); border-top-color:white;
    animation:ctSpin .7s linear infinite;
  }
  @keyframes ctSpin { to{transform:rotate(360deg)} }
  .ct-error {
    display:flex; align-items:center; gap:8px;
    font-size:12.5px; color:#f87171;
    background:rgba(248,113,113,.07); border:1px solid rgba(248,113,113,.15);
    padding:10px 14px; border-radius:10px;
  }
  .ct-privacy { font-size:11px; color:var(--brand-light-gray); text-align:center; }

  /* ── SIDE ── */
  .ct-side { display:flex; flex-direction:column; gap:16px; }

  /* Info card */
  .ct-info-card {
    background:#f9f9f9; border:1px solid rgba(var(--brand-dark-blue-rgb),.15);
    border-radius:20px; padding:26px 24px;
    position:relative; overflow:hidden;
  }
  .ct-info-card::before {
    content:''; position:absolute; top:0; left:0; right:0; height:1.5px;
    background:linear-gradient(90deg,transparent,var(--brand-dark-blue),transparent);
  }
  .ct-info-title {
    font-family:'Syne',sans-serif; font-size:15px; font-weight:700;
    color:var(--foreground); letter-spacing:-.02em; margin-bottom:18px;
  }
  .ct-perks { display:flex; flex-direction:column; gap:14px; }
  .ct-perk { display:flex; align-items:flex-start; gap:12px; }
  .ct-perk-icon {
    font-size:18px; width:36px; height:36px; border-radius:10px; flex-shrink:0;
    display:flex; align-items:center; justify-content:center;
    background:#e8f9f4; border:1px solid #cceae3;
  }
  .ct-perk-name {
    font-size:13px; font-weight:600; color:var(--foreground); margin-bottom:3px; letter-spacing:-.01em;
  }
  .ct-perk-desc { font-size:12px; font-weight:300; color:var(--brand-dark-gray); line-height:1.55; }

  /* Direct contact */
  .ct-direct {
    background:#f9f9f9; border:1px solid rgba(var(--brand-dark-blue-rgb),.15);
    border-radius:20px; padding:24px;
  }
  .ct-direct-title {
    font-size:11px; font-weight:600; letter-spacing:.14em; text-transform:uppercase;
    color:var(--brand-light-gray); margin-bottom:16px;
  }
  .ct-direct-links { display:flex; flex-direction:column; gap:10px; }
  .ct-direct-link {
    text-decoration:none; display:flex; align-items:center; gap:11px;
    padding:10px 14px; border-radius:12px; border:1px solid rgba(var(--brand-dark-blue-rgb),.15);
    background:#fff;
    transition:background .18s, border-color .18s, transform .18s;
  }
  .ct-direct-link:hover {
    background:#e8f9f4; border-color:var(--brand-dark-blue); transform:translateX(3px);
  }
  .ct-dl-icon {
    width:32px; height:32px; border-radius:9px; flex-shrink:0;
    display:flex; align-items:center; justify-content:center;
    background:#e8f9f4; border:1px solid #cceae3;
  }
  .ct-dl-label { font-size:13px; font-weight:500; color:var(--foreground); }
  .ct-dl-sub { font-size:11px; font-weight:300; color:var(--brand-light-gray); margin-top:1px; }
  .ct-dl-arrow { margin-left:auto; font-size:12px; color:var(--brand-light-gray); transition:transform .18s; }
  .ct-direct-link:hover .ct-dl-arrow { transform:translateX(3px); color:var(--brand-dark-blue); }

  /* Response time badge */
  .ct-response-badge {
    display:flex; align-items:center; gap:10px;
    background:#e8f9f4; border:1px solid #cceae3;
    border-radius:14px; padding:14px 18px; margin-top:4px;
  }
  .ct-rb-dot {
    width:8px; height:8px; border-radius:50%; background:var(--brand-dark-blue); flex-shrink:0;
    box-shadow:0 0 8px rgba(0,201,176,.5);
    animation:ctPulse 2s infinite;
  }
  .ct-rb-text { font-size:13px; font-weight:400; color:var(--brand-dark-gray); }
  .ct-rb-text strong { color:var(--brand-dark-blue); font-weight:600; }

  /* ── PERKS ROW ── */
  .ct-perks-row { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:64px; }
  @media(max-width:720px){ .ct-perks-row{grid-template-columns:1fr;} }
  .ct-perk-card {
    background:#f9f9f9; border:1px solid rgba(var(--brand-dark-blue-rgb),.15);
    border-radius:18px; padding:22px 20px;
    transition:background .2s, border-color .2s, transform .2s;
  }
  .ct-perk-card:hover { background:#f0f0f0; border-color:var(--brand-dark-blue); transform:translateY(-3px); }
  .ct-pk-icon {
    font-size:22px; margin-bottom:14px; display:block;
    width:44px; height:44px; border-radius:12px;
    display:flex; align-items:center; justify-content:center;
    background:#e8f9f4; border:1px solid #cceae3;
  }
  .ct-pk-title {
    font-family:'Syne',sans-serif; font-size:15px; font-weight:700;
    color:var(--foreground); letter-spacing:-.02em; margin-bottom:7px;
  }
  .ct-pk-desc { font-size:13px; font-weight:300; line-height:1.65; color:var(--brand-dark-gray); }

  /* ── FAQ ── */
  .ct-faq { margin-bottom:64px; }
  .ct-faq-divider {
    display:flex; align-items:center; gap:14px; margin-bottom:24px;
    font-size:10.5px; font-weight:600; letter-spacing:.18em; text-transform:uppercase;
    color:var(--brand-light-gray);
  }
  .ct-faq-divider::after {
    content:''; flex:1; height:1px;
    background:linear-gradient(90deg,rgba(var(--brand-dark-blue-rgb),.15),transparent);
  }
  .ct-faq-list { display:flex; flex-direction:column; gap:8px; }
  .ct-faq-item {
    background:#f9f9f9; border:1px solid rgba(var(--brand-dark-blue-rgb),.15);
    border-radius:16px; overflow:hidden;
    transition:border-color .2s;
  }
  .ct-faq-item.open { border-color:var(--brand-dark-blue); }
  .ct-faq-q {
    width:100%; background:none; border:none; cursor:pointer; text-align:left;
    padding:18px 22px; display:flex; align-items:center; justify-content:space-between; gap:16px;
    font-family:'DM Sans',sans-serif; font-size:14px; font-weight:500; color:var(--brand-dark-gray);
    transition:color .18s;
  }
  .ct-faq-q:hover { color:var(--foreground); }
  .ct-faq-item.open .ct-faq-q { color:var(--foreground); }
  .ct-faq-chevron {
    width:20px; height:20px; border-radius:6px; flex-shrink:0;
    background:#f0f0f0; border:1px solid rgba(var(--brand-dark-blue-rgb),.15);
    display:flex; align-items:center; justify-content:center;
    font-size:10px; color:var(--brand-light-gray);
    transition:transform .28s, background .2s, color .2s;
  }
  .ct-faq-item.open .ct-faq-chevron {
    transform:rotate(180deg);
    background:#e8f9f4; border-color:var(--brand-dark-blue); color:var(--brand-dark-blue);
  }
  .ct-faq-a {
    overflow:hidden; max-height:0;
    transition:max-height .32s cubic-bezier(.4,0,.2,1), opacity .28s;
    opacity:0;
  }
  .ct-faq-a.open { max-height:200px; opacity:1; }
  .ct-faq-a-inner {
    padding:0 22px 18px;
    font-size:13.5px; font-weight:300; line-height:1.75; color:var(--brand-dark-gray);
  }

  /* ── SENT STATE ── */
  .ct-sent {
    background:#e8f9f4; border:1px solid var(--brand-dark-blue);
    border-radius:24px; padding:60px 40px;
    display:flex; flex-direction:column; align-items:center; gap:16px; text-align:center;
    animation:ctFadeUp .5s ease both;
  }
  @keyframes ctFadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:none} }
  .ct-sent-icon {
    width:68px; height:68px; border-radius:50%;
    background:#cceae3; border:1px solid var(--brand-dark-blue);
    display:flex; align-items:center; justify-content:center;
    box-shadow:0 0 32px rgba(0,201,176,.15);
  }
  .ct-sent-h {
    font-family:'Syne',sans-serif; font-size:26px; font-weight:800;
    color:var(--foreground); letter-spacing:-.03em;
  }
  .ct-sent-p { font-size:14px; font-weight:300; color:var(--brand-dark-gray); max-width:360px; line-height:1.65; }
  .ct-sent-btn {
    text-decoration:none; margin-top:8px;
    background:linear-gradient(135deg,var(--brand-dark-blue),var(--brand-dark-blue)); color:white;
    font-size:14px; font-weight:600; padding:13px 28px; border-radius:99px;
    box-shadow:0 4px 20px rgba(0,120,255,.3); transition:transform .18s;
  }
  .ct-sent-btn:hover { transform:translateY(-2px); }
`;
