export const blogListCss = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; }

  .bl-root {
    font-family: 'DM Sans', sans-serif;
    background: #04080f; min-height: 100vh;
    color: #e0eaff; padding: 72px 32px 100px;
    position: relative;
  }
  .bl-bg-grid {
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background-image:
      linear-gradient(rgba(100,180,255,.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(100,180,255,.025) 1px, transparent 1px);
    background-size: 48px 48px;
  }
  .bl-orb {
    position: fixed; border-radius: 50%; filter: blur(100px);
    pointer-events: none; z-index: 0;
  }
  .bl-orb-a { width:460px; height:460px; top:-120px; left:-80px;
    background:radial-gradient(circle,rgba(0,120,255,.1) 0%,transparent 70%); }
  .bl-orb-b { width:360px; height:360px; bottom:8%; right:-70px;
    background:radial-gradient(circle,rgba(78,201,176,.09) 0%,transparent 70%); }
  .bl-inner { position:relative; z-index:1; max-width:1060px; margin:0 auto; }

  /* ── HERO ── */
  .bl-hero { margin-bottom:56px; }
  .bl-eyebrow {
    display:inline-flex; align-items:center; gap:7px;
    font-size:10.5px; font-weight:500; letter-spacing:.2em; text-transform:uppercase;
    color:var(--brand-dark-blue); margin-bottom:16px;
    padding:4px 12px 4px 9px; border-radius:99px;
    border:1px solid rgba(78,201,176,.22); background:rgba(78,201,176,.06);
  }
  .bl-dot { width:5px; height:5px; border-radius:50%; background:var(--brand-dark-blue);
    animation:blPulse 2s infinite; }
  @keyframes blPulse { 0%,100%{opacity:1} 50%{opacity:.3} }
  .bl-h1 {
    font-family:'Syne',sans-serif;
    font-size:clamp(32px,5vw,54px); font-weight:800;
    letter-spacing:-.035em; color:#f0f4ff; margin:0 0 18px; line-height:1.06;
  }
  .bl-h1 em { font-style:normal; color:transparent;
    background:linear-gradient(90deg,#4da6ff,var(--brand-dark-blue));
    -webkit-background-clip:text; background-clip:text; }
  .bl-sub {
    font-size:16px; font-weight:300; line-height:1.75;
    color:rgba(175,205,245,.8); max-width:540px;
  }

  /* ── FILTERS ── */
  .bl-filters-row {
    display:flex; align-items:center; justify-content:space-between;
    gap:16px; flex-wrap:wrap; margin-bottom:32px;
  }
  .bl-filters { display:flex; gap:6px; flex-wrap:wrap; }
  .bl-filter {
    font-size:12.5px; font-weight:500; padding:7px 15px;
    border-radius:99px; cursor:pointer; border:none;
    background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.07);
    color:rgba(150,180,225,.7); transition:all .18s;
  }
  .bl-filter:hover { color:#e0eaff; border-color:rgba(255,255,255,.14); }
  .bl-filter.active {
    background:rgba(78,201,176,.1); border-color:rgba(78,201,176,.28); color:var(--brand-dark-blue);
  }
  .bl-count { font-size:11.5px; color:rgba(110,150,200,.5); white-space:nowrap; }

  /* ── FEATURED ── */
  .bl-featured {
    display:grid; grid-template-columns:1.55fr 1fr; gap:14px; margin-bottom:14px;
  }
  @media(max-width:800px){ .bl-featured{grid-template-columns:1fr;} }

  .bl-card-featured {
    background:rgba(255,255,255,.025); border:1px solid rgba(255,255,255,.07);
    border-radius:22px; padding:36px 34px;
    position:relative; overflow:hidden;
    transition:border-color .25s, background .25s, transform .22s;
    cursor:pointer; text-decoration:none; display:flex; flex-direction:column; gap:14px;
  }
  .bl-card-featured::before {
    content:''; position:absolute; top:0; left:0; right:0; height:1.5px;
    background:linear-gradient(90deg,transparent,var(--cat-c),transparent);
    opacity:0; transition:opacity .3s;
  }
  .bl-card-featured:hover {
    transform:translateY(-4px); background:rgba(255,255,255,.04);
    border-color:var(--cat-dim);
  }
  .bl-card-featured:hover::before { opacity:1; }

  .bl-card-top { display:flex; align-items:center; justify-content:space-between; gap:10px; }
  .bl-cat-pill {
    font-size:10px; font-weight:600; letter-spacing:.12em; text-transform:uppercase;
    color:var(--cat-c); background:var(--cat-bg); border:1px solid var(--cat-dim);
    padding:3px 10px; border-radius:6px;
  }
  .bl-meta { display:flex; align-items:center; gap:8px; }
  .bl-date { font-size:11px; color:rgba(110,150,200,.55); }
  .bl-read {
    font-size:10.5px; color:rgba(110,150,200,.45);
    background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.06);
    padding:2px 8px; border-radius:99px;
  }

  .bl-feat-title {
    font-family:'Syne',sans-serif; font-size:21px; font-weight:800;
    color:#f0f4ff; letter-spacing:-.025em; line-height:1.2; margin:0;
  }
  .bl-feat-excerpt {
    font-size:13.5px; font-weight:300; line-height:1.75;
    color:rgba(160,195,240,.75); margin:0;
    display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;
  }
  .bl-read-link {
    display:inline-flex; align-items:center; gap:6px; margin-top:auto;
    font-size:13px; font-weight:500; color:var(--cat-c);
    text-decoration:none; transition:gap .18s;
  }
  .bl-card-featured:hover .bl-read-link { gap:10px; }

  /* ── SECONDARY CARD ── */
  .bl-card {
    background:rgba(255,255,255,.025); border:1px solid rgba(255,255,255,.07);
    border-radius:18px; padding:22px 20px;
    position:relative; overflow:hidden;
    transition:border-color .25s, background .25s, transform .22s;
    cursor:pointer; text-decoration:none;
    display:flex; flex-direction:column; gap:10px;
  }
  .bl-card::before {
    content:''; position:absolute; top:0; left:0; right:0; height:1.5px;
    background:linear-gradient(90deg,transparent,var(--cat-c),transparent);
    opacity:0; transition:opacity .3s;
  }
  .bl-card:hover { transform:translateY(-3px); background:rgba(255,255,255,.04); border-color:var(--cat-dim); }
  .bl-card:hover::before { opacity:1; }
  .bl-card-title {
    font-family:'Syne',sans-serif; font-size:15px; font-weight:700;
    color:#f0f4ff; letter-spacing:-.02em; line-height:1.25; margin:0;
  }
  .bl-card-excerpt {
    font-size:12.5px; font-weight:300; line-height:1.65;
    color:rgba(150,185,235,.7); margin:0;
    display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;
  }
  .bl-card-read {
    display:inline-flex; align-items:center; gap:5px; margin-top:auto;
    font-size:12px; font-weight:500; color:rgba(130,170,230,.6);
    text-decoration:none; transition:color .18s, gap .18s;
  }
  .bl-card:hover .bl-card-read { color:var(--cat-c); gap:8px; }

  /* ── REST GRID ── */
  .bl-grid {
    display:grid; grid-template-columns:repeat(3,1fr); gap:14px;
    margin-bottom:56px;
  }
  @media(max-width:860px){ .bl-grid{grid-template-columns:repeat(2,1fr);} }
  @media(max-width:520px){ .bl-grid{grid-template-columns:1fr;} }

  /* ── SECTION DIVIDER ── */
  .bl-divider {
    display:flex; align-items:center; gap:14px; margin-bottom:24px; margin-top:40px;
    font-size:10.5px; font-weight:600; letter-spacing:.18em; text-transform:uppercase;
    color:rgba(120,160,210,.5);
  }
  .bl-divider::after {
    content:''; flex:1; height:1px;
    background:linear-gradient(90deg,rgba(255,255,255,.06),transparent);
  }

  /* ── NEWSLETTER ── */
  .bl-newsletter {
    position:relative; overflow:hidden;
    background:rgba(255,255,255,.025); border:1px solid rgba(255,255,255,.07);
    border-radius:24px; padding:44px 48px;
    display:flex; align-items:center; justify-content:space-between;
    gap:32px; flex-wrap:wrap;
  }
  .bl-newsletter::before {
    content:''; position:absolute; inset:0; pointer-events:none;
    background:
      radial-gradient(ellipse 50% 130% at 0% 50%,rgba(0,120,255,.07) 0%,transparent 65%),
      radial-gradient(ellipse 40% 100% at 100% 80%,rgba(78,201,176,.05) 0%,transparent 65%);
  }
  .bl-nl-left { position:relative; z-index:1; }
  .bl-nl-tag {
    display:inline-flex; align-items:center; gap:7px;
    font-size:10.5px; font-weight:500; letter-spacing:.18em; text-transform:uppercase;
    color:var(--brand-dark-blue); margin-bottom:12px;
    padding:4px 12px 4px 9px; border-radius:99px;
    border:1px solid rgba(78,201,176,.2); background:rgba(78,201,176,.06);
  }
  .bl-nl-dot { width:5px; height:5px; border-radius:50%; background:var(--brand-dark-blue); animation:blPulse 2s infinite; }
  .bl-nl-h {
    font-family:'Syne',sans-serif; font-size:22px; font-weight:800;
    color:#f0f4ff; letter-spacing:-.03em; margin-bottom:6px;
  }
  .bl-nl-sub { font-size:13px; font-weight:300; color:rgba(155,190,240,.7); }

  .bl-nl-right { position:relative; z-index:1; display:flex; flex-direction:column; gap:10px; min-width:280px; }
  .bl-nl-form {
    display:flex; background:rgba(255,255,255,.04);
    border:1px solid rgba(255,255,255,.09); border-radius:12px; overflow:hidden;
    transition:border-color .2s;
  }
  .bl-nl-form:focus-within { border-color:rgba(78,201,176,.35); }
  .bl-nl-input {
    flex:1; background:none; border:none; outline:none;
    font-family:'DM Sans',sans-serif; font-size:13.5px;
    color:#e0eaff; padding:11px 15px;
  }
  .bl-nl-input::placeholder { color:rgba(110,150,200,.45); }
  .bl-nl-btn {
    background:linear-gradient(135deg,var(--brand-dark-blue),var(--brand-dark-blue));
    border:none; cursor:pointer; padding:10px 18px;
    font-family:'DM Sans',sans-serif; font-size:13px; font-weight:600; color:white;
    transition:opacity .2s;
  }
  .bl-nl-btn:hover { opacity:.88; }
  .bl-nl-confirm { font-size:12px; color:var(--brand-dark-blue); text-align:center; padding:4px 0; }
  .bl-nl-hint { font-size:11px; color:rgba(110,150,195,.45); }
  @media(max-width:640px){ .bl-newsletter{padding:32px 24px;} }

  /* ── Light theme overrides for cohérence site ── */
  .bl-root { background: #ffffff; color: #0f172a; }
  .bl-bg-grid, .bl-orb { display: none; }
  .bl-h1, .bl-feat-title, .bl-card-title { color: #0f172a; }
  .bl-sub, .bl-feat-excerpt, .bl-card-excerpt { color: #475569; }
  .bl-card, .bl-card-featured, .bl-newsletter {
    background: #ffffff;
    border: 1px solid #e2e8f0;
  }
  .bl-card:hover, .bl-card-featured:hover, .bl-newsletter:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }
  .bl-cat-pill { border-color: var(--cat-dim); background: var(--cat-bg); color: var(--cat-c); }
  .bl-date, .bl-read, .bl-count, .bl-meta span, .bl-nl-hint { color: #64748b; }
  .bl-read, .bl-read-link, .bl-card-read { color: var(--cat-c); }
  .bl-newsletter { box-shadow: 0 10px 30px rgba(15,23,42,0.04); }
  .bl-filter { background: #f8fafc; border-color: #e2e8f0; color: #475569; }
  .bl-filter.active { background: rgba(78,201,176,0.12); border-color: rgba(78,201,176,0.35); color: #0f172a; }
`;
