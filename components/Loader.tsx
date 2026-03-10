import { useState, useEffect } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .ld-root {
    background: #04080f;
    width: 100vw; height: 100vh;
    display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
    font-family: 'Syne', sans-serif;
  }

  /* ── Grid ── */
  .ld-grid {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      linear-gradient(rgba(100,180,255,.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(100,180,255,.03) 1px, transparent 1px);
    background-size: 48px 48px;
    animation: ldGridFade 3s ease-in-out infinite alternate;
  }
  @keyframes ldGridFade { 0%{opacity:.4} 100%{opacity:1} }

  /* ── Orbs ── */
  .ld-orb {
    position: absolute; border-radius: 50%; pointer-events: none;
    filter: blur(80px);
  }
  .ld-orb-a {
    width: 500px; height: 500px; top: -180px; left: -120px;
    background: radial-gradient(circle, rgba(0,120,255,.18) 0%, transparent 70%);
    animation: ldOrbA 6s ease-in-out infinite;
  }
  .ld-orb-b {
    width: 420px; height: 420px; bottom: -140px; right: -100px;
    background: radial-gradient(circle, rgba(78,201,176,.15) 0%, transparent 70%);
    animation: ldOrbB 7s ease-in-out infinite;
  }
  .ld-orb-c {
    width: 280px; height: 280px; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(167,139,250,.1) 0%, transparent 70%);
    animation: ldOrbC 5s ease-in-out infinite;
  }
  @keyframes ldOrbA { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,20px) scale(1.08)} }
  @keyframes ldOrbB { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-25px,-20px) scale(1.1)} }
  @keyframes ldOrbC { 0%,100%{transform:translate(-50%,-50%) scale(1)} 50%{transform:translate(-50%,-55%) scale(1.2)} }

  /* ── Center content ── */
  .ld-center {
    position: relative; z-index: 10;
    display: flex; flex-direction: column; align-items: center; gap: 0;
  }

  /* ── Logo mark ── */
  .ld-mark {
    position: relative; margin-bottom: 32px;
  }
  .ld-mark-ring {
    position: absolute; inset: -10px; border-radius: 50%;
    border: 1px solid rgba(78,201,176,.2);
    animation: ldRingPulse 2.5s ease-in-out infinite;
  }
  .ld-mark-ring-2 {
    position: absolute; inset: -22px; border-radius: 50%;
    border: 1px solid rgba(78,201,176,.08);
    animation: ldRingPulse 2.5s .4s ease-in-out infinite;
  }
  .ld-mark-ring-3 {
    position: absolute; inset: -36px; border-radius: 50%;
    border: 1px solid rgba(78,201,176,.04);
    animation: ldRingPulse 2.5s .8s ease-in-out infinite;
  }
  @keyframes ldRingPulse {
    0%,100%{transform:scale(1);opacity:.6}
    50%{transform:scale(1.06);opacity:1}
  }
  .ld-mark-bg {
    width: 72px; height: 72px; border-radius: 20px;
    background: linear-gradient(135deg,#0f2c6e 0%,#1a4fc4 60%,#0e9b8a 100%);
    display: flex; align-items: center; justify-content: center;
    box-shadow:
      0 0 0 1px rgba(78,201,176,.2),
      0 8px 32px rgba(0,120,255,.4),
      0 0 60px rgba(78,201,176,.15);
    animation: ldMarkGlow 3s ease-in-out infinite;
  }
  @keyframes ldMarkGlow {
    0%,100%{box-shadow:0 0 0 1px rgba(78,201,176,.2),0 8px 32px rgba(0,120,255,.4),0 0 60px rgba(78,201,176,.15)}
    50%{box-shadow:0 0 0 1px rgba(78,201,176,.35),0 12px 40px rgba(0,120,255,.55),0 0 80px rgba(78,201,176,.25)}
  }

  /* ── Logo text ── */
  .ld-name {
    font-size: 32px; font-weight: 800; letter-spacing: -.04em;
    color: #f0f4ff; margin-bottom: 4px; line-height: 1;
    animation: ldFadeUp .8s .2s both;
  }
  .ld-name span { color: #4ec9b0; }
  .ld-corp {
    font-family: 'DM Mono', monospace;
    font-size: 11px; font-weight: 500; letter-spacing: .22em;
    color: rgba(120,160,215,.5); text-transform: uppercase;
    margin-bottom: 48px;
    animation: ldFadeUp .7s .35s both;
  }
  @keyframes ldFadeUp {
    from{opacity:0;transform:translateY(8px)}
    to{opacity:1;transform:none}
  }

  /* ── Progress track ── */
  .ld-progress-wrap {
    width: 220px; display: flex; flex-direction: column; gap: 10px; align-items: center;
    animation: ldFadeUp .7s .5s both;
  }
  .ld-track {
    width: 100%; height: 3px;
    background: rgba(255,255,255,.06); border-radius: 99px; overflow: hidden;
    position: relative;
  }
  .ld-fill {
    height: 100%; border-radius: 99px;
    background: linear-gradient(90deg, #0078ff, #4ec9b0);
    box-shadow: 0 0 8px rgba(78,201,176,.5);
    transition: width .12s ease-out;
    position: relative;
  }
  /* Shimmer on fill */
  .ld-fill::after {
    content: '';
    position: absolute; top: 0; right: 0; bottom: 0; width: 40px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.4), transparent);
    animation: ldShimmer 1.2s ease-in-out infinite;
  }
  @keyframes ldShimmer { 0%{transform:translateX(-40px)} 100%{transform:translateX(40px)} }

  .ld-pct {
    font-family: 'DM Mono', monospace;
    font-size: 11px; font-weight: 500; color: rgba(120,165,220,.55);
    letter-spacing: .06em;
    min-width: 36px; text-align: center;
  }

  /* ── Status text ── */
  .ld-status {
    font-family: 'DM Mono', monospace;
    font-size: 10.5px; font-weight: 400; letter-spacing: .12em;
    color: rgba(100,145,210,.45);
    height: 16px; overflow: hidden; text-align: center;
    animation: ldFadeUp .7s .6s both;
  }
  .ld-status-inner {
    transition: transform .35s cubic-bezier(.4,0,.2,1), opacity .3s;
  }

  /* ── Corner decorations ── */
  .ld-corner {
    position: absolute; width: 20px; height: 20px;
    border-color: rgba(78,201,176,.2); border-style: solid;
  }
  .ld-corner-tl { top: 28px; left: 28px; border-width: 1.5px 0 0 1.5px; }
  .ld-corner-tr { top: 28px; right: 28px; border-width: 1.5px 1.5px 0 0; }
  .ld-corner-bl { bottom: 28px; left: 28px; border-width: 0 0 1.5px 1.5px; }
  .ld-corner-br { bottom: 28px; right: 28px; border-width: 0 1.5px 1.5px 0; }

  /* ── Scanline ── */
  .ld-scan {
    position: absolute; inset: 0; pointer-events: none;
    background: repeating-linear-gradient(
      0deg, transparent, transparent 3px,
      rgba(0,0,0,.06) 3px, rgba(0,0,0,.06) 4px
    );
    opacity: .5;
  }

  /* ── Done state ── */
  .ld-done .ld-center {
    animation: ldDone .5s ease both;
  }
  @keyframes ldDone {
    0%{opacity:1;transform:scale(1)}
    100%{opacity:0;transform:scale(.95)}
  }
`;

const steps = [
  "Initialisation…",
  "Chargement des modules…",
  "Connexion aux services…",
  "Préparation de l'interface…",
  "Presque prêt…",
  "Bienvenue.",
];

export default function Loader() {
  const [pct,    setPct]    = useState(0);
  const [stepI,  setStepI]  = useState(0);
  const [done,   setDone]   = useState(false);
  const [show,   setShow]   = useState(true);

  useEffect(() => {
    // Smooth progress with variable speed
    const speeds = [
      { target: 15, delay: 60 },
      { target: 40, delay: 40 },
      { target: 65, delay: 55 },
      { target: 82, delay: 35 },
      { target: 95, delay: 60 },
      { target: 100, delay: 25 },
    ];

    let current = 0;
    let timeouts = [];

    const runSegment = (segIdx) => {
      if (segIdx >= speeds.length) return;
      const { target, delay } = speeds[segIdx];
      const tick = () => {
        current += 1;
        setPct(current);
        setStepI(Math.floor((current / 100) * (steps.length - 1)));
        if (current < target) {
          timeouts.push(setTimeout(tick, delay));
        } else {
          timeouts.push(setTimeout(() => runSegment(segIdx + 1), 180));
        }
      };
      tick();
    };

    timeouts.push(setTimeout(() => runSegment(0), 400));

    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (pct < 100) return;
    const t1 = setTimeout(() => setDone(true), 500);
    const t2 = setTimeout(() => setShow(false), 1100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [pct]);

  if (!show) return (
    <div style={{
      background:"#04080f", width:"100vw", height:"100vh",
      display:"flex", alignItems:"center", justifyContent:"center",
      fontFamily:"'Syne',sans-serif", color:"#4ec9b0", fontSize:14
    }}>
      ✓ Chargement terminé
    </div>
  );

  return (
    <>
      <style>{css}</style>
      <div className={`ld-root ${done ? "ld-done" : ""}`}>
        <div className="ld-grid"/>
        <div className="ld-orb ld-orb-a"/>
        <div className="ld-orb ld-orb-b"/>
        <div className="ld-orb ld-orb-c"/>
        <div className="ld-scan"/>

        {/* Corners */}
        <div className="ld-corner ld-corner-tl"/>
        <div className="ld-corner ld-corner-tr"/>
        <div className="ld-corner ld-corner-bl"/>
        <div className="ld-corner ld-corner-br"/>

        <div className="ld-center">

          {/* Logo mark */}
          <div className="ld-mark">
            <div className="ld-mark-ring-3"/>
            <div className="ld-mark-ring-2"/>
            <div className="ld-mark-ring"/>
            <div className="ld-mark-bg">
              <svg width="32" height="32" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="4" fill="white" opacity=".95"/>
                <path d="M11 2L11 6M11 16L11 20M2 11L6 11M16 11L20 11"
                  stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4.9 4.9L7.8 7.8M14.2 14.2L17.1 17.1M17.1 4.9L14.2 7.8M7.8 14.2L4.9 17.1"
                  stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity=".65"/>
              </svg>
            </div>
          </div>

          {/* Name */}
          <div className="ld-name">Manou<span>Tech</span></div>
          <div className="ld-corp">Corp.</div>

          {/* Progress */}
          <div className="ld-progress-wrap">
            <div className="ld-track">
              <div className="ld-fill" style={{ width: `${pct}%` }}/>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
              <div className="ld-status">
                <div className="ld-status-inner">{steps[stepI]}</div>
              </div>
              <div className="ld-pct">{pct}%</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}