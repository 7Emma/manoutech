export const notFoundCss = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; }

  .nf-root {
    font-family: 'DM Sans', sans-serif;
    background: #04080f;
    min-height: 100vh;
    display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
    padding: 40px 24px;
  }

  .nf-grid {
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background-image:
      linear-gradient(rgba(100,180,255,.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(100,180,255,.025) 1px, transparent 1px);
    background-size: 48px 48px;
  }
  .nf-orb {
    position: fixed; border-radius: 50%; filter: blur(100px); pointer-events: none; z-index: 0;
  }
  .nf-orb-a { width:500px; height:500px; top:-150px; left:-100px;
    background:radial-gradient(circle,rgba(0,120,255,.12) 0%,transparent 70%); }
  .nf-orb-b { width:400px; height:400px; bottom:-100px; right:-80px;
    background:radial-gradient(circle,rgba(78,201,176,.1) 0%,transparent 70%); }
  .nf-orb-c {
    width:300px; height:300px;
    top:50%; left:50%; transform:translate(-50%,-50%);
    background:radial-gradient(circle,rgba(167,139,250,.07) 0%,transparent 70%);
    animation:nfFloat 9s ease-in-out infinite;
  }
  @keyframes nfFloat { 0%,100%{transform:translate(-50%,-55%) scale(1)} 50%{transform:translate(-50%,-45%) scale(1.15)} }

  .nf-scan {
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background: repeating-linear-gradient(
      0deg, transparent, transparent 3px,
      rgba(0,0,0,.06) 3px, rgba(0,0,0,.06) 4px
    );
  }

  .nf-inner {
    position: relative; z-index: 1;
    display: flex; flex-direction: column; align-items: center;
    text-align: center; gap: 0; max-width: 560px;
  }

  .nf-big {
    font-family: 'Syne', sans-serif;
    font-size: clamp(120px, 22vw, 200px); font-weight: 800;
    line-height: .88; letter-spacing: -.06em;
    color: transparent;
    background: linear-gradient(
      180deg,
      rgba(240,244,255,.08) 0%,
      rgba(240,244,255,.03) 100%
    );
    -webkit-background-clip: text; background-clip: text;
    position: relative; margin-bottom: -12px;
    user-select: none;
  }
  .nf-big::before, .nf-big::after {
    content: '404';
    position: absolute; left: 0; right: 0; top: 0;
    font-family: 'Syne', sans-serif;
    font-size: inherit; font-weight: 800; line-height: inherit; letter-spacing: inherit;
    -webkit-background-clip: text; background-clip: text;
    color: transparent;
  }
  .nf-big::before {
    background: linear-gradient(180deg,rgba(77,166,255,.18) 0%,transparent 100%);
    -webkit-background-clip: text; background-clip: text;
    animation: nfGlitch1 4s infinite;
    clip-path: polygon(0 20%,100% 20%,100% 38%,0 38%);
  }
  .nf-big::after {
    background: linear-gradient(180deg,rgba(78,201,176,.14) 0%,transparent 100%);
    -webkit-background-clip: text; background-clip: text;
    animation: nfGlitch2 4s infinite;
    clip-path: polygon(0 60%,100% 60%,100% 72%,0 72%);
  }
  @keyframes nfGlitch1 {
    0%,90%,100%{transform:none;opacity:1}
    91%{transform:translateX(-4px);opacity:.8}
    93%{transform:translateX(4px);opacity:.6}
    95%{transform:translateX(-2px);opacity:.9}
    97%{transform:none;opacity:1}
  }
  @keyframes nfGlitch2 {
    0%,88%,100%{transform:none;opacity:1}
    89%{transform:translateX(5px);opacity:.7}
    91%{transform:translateX(-3px);opacity:.8}
    93%{transform:translateX(2px);opacity:.9}
    95%{transform:none;opacity:1}
  }

  .nf-code {
    display:inline-flex; align-items:center; gap:8px;
    font-family:'DM Mono',monospace;
    font-size:11px; font-weight:500; letter-spacing:.1em;
    color:#4da6ff; margin-bottom:20px;
    padding:5px 14px 5px 10px; border-radius:99px;
    border:1px solid rgba(77,166,255,.22); background:rgba(77,166,255,.06);
  }
  .nf-code-dot {
    width:6px; height:6px; border-radius:50%; background:#4da6ff;
    animation:nfPulse 2s infinite;
  }
  @keyframes nfPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.7)} }

  .nf-h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(22px,4vw,34px); font-weight: 800;
    letter-spacing: -.03em; color: #f0f4ff;
    margin: 0 0 14px; line-height: 1.1;
  }
  .nf-h1 em { font-style:normal; color:transparent;
    background:linear-gradient(90deg,#4da6ff,var(--brand-dark-blue));
    -webkit-background-clip:text; background-clip:text; }

  .nf-sub {
    font-size: 15px; font-weight: 300; line-height: 1.7;
    color: rgba(165,200,245,.7); margin-bottom: 36px; max-width: 400px;
  }

  .nf-path {
    display:inline-flex; align-items:center; gap:8px; margin-bottom:36px;
    font-family:'DM Mono',monospace; font-size:12px;
    color:rgba(120,160,215,.55);
    background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.07);
    padding:8px 16px; border-radius:10px;
  }
  .nf-path-err { color:#f87171; font-weight:500; }

  .nf-btns {
    display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-bottom:48px;
  }
  .nf-btn-primary {
    text-decoration:none; display:inline-flex; align-items:center; gap:8px;
    background:linear-gradient(135deg,var(--brand-dark-blue),var(--brand-dark-blue));
    color:white; font-size:14px; font-weight:600;
    padding:13px 26px; border-radius:99px;
    box-shadow:0 4px 20px rgba(0,120,255,.32),inset 0 1px 0 rgba(255,255,255,.1);
    transition:transform .18s, box-shadow .18s;
  }
  .nf-btn-primary:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(0,120,255,.42); }
  .nf-btn-ghost {
    text-decoration:none; display:inline-flex; align-items:center; gap:7px;
    color:rgba(160,195,240,.75); font-size:14px; font-weight:500;
    padding:13px 22px; border-radius:99px;
    border:1px solid rgba(255,255,255,.1); background:rgba(255,255,255,.04);
    transition:border-color .2s, color .2s, transform .18s;
  }
  .nf-btn-ghost:hover { border-color:rgba(78,201,176,.3); color:#e8f0ff; transform:translateY(-2px); }
  .nf-btn-arrow { transition:transform .2s; }
  .nf-btn-primary:hover .nf-btn-arrow,
  .nf-btn-ghost:hover .nf-btn-arrow { transform:translateX(3px); }

  .nf-links-label {
    font-size:10.5px; font-weight:600; letter-spacing:.18em; text-transform:uppercase;
    color:rgba(110,150,200,.4); margin-bottom:14px;
  }
  .nf-links { display:flex; flex-wrap:wrap; gap:8px; justify-content:center; }
  .nf-link {
    text-decoration:none; font-size:12.5px; font-weight:500;
    color:rgba(140,175,230,.6);
    background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.07);
    padding:6px 14px; border-radius:99px;
    transition:color .18s, border-color .18s, background .18s;
  }
  .nf-link:hover { color:var(--brand-dark-blue); border-color:rgba(78,201,176,.28); background:rgba(78,201,176,.06); }

  .nf-redirect {
    display:flex; align-items:center; gap:8px; margin-top:32px;
    font-size:11.5px; color:rgba(110,150,200,.5);
  }
  .nf-rdr-bar {
    width:80px; height:2px; border-radius:99px;
    background:rgba(255,255,255,.06); overflow:hidden;
  }
  .nf-rdr-fill {
    height:100%; background:linear-gradient(90deg,var(--brand-dark-blue),var(--brand-dark-blue));
    border-radius:99px;
    transition:width 1s linear;
  }
`;
