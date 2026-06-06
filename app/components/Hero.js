'use client';

export default function Hero({ onScrollTo }) {
  return (
    <section className="hero corners" id="hero" data-screen-label="01 Hero">
      <div className="c-tr"></div>
      <div className="c-bl"></div>
      <div className="hero-bg">
        <div className="hero-bg-image"></div>
      </div>
      <div className="hud"></div>
      <div className="hero-content">
        <div className="hero-tag">
          <span className="pill"><span className="dot"></span>OPERATIONAL · UAE 24°N 54°E</span>
          <span style={{ marginLeft: 12 }}>SECURE PROCUREMENT</span>
        </div>
        <h1 className="hero-h">
          DELIVERING ADVANCED<br />
          DEFENSE SOLUTIONS<br />
          <span style={{ color: 'var(--accent)' }}>FOR MODERN OPERATIONS.</span>
        </h1>
        <p className="lede" style={{ marginTop: 28, maxWidth: '60ch' }}>
          Trusted supplier of tactical, CBRN, communication, and military support
          equipment for defense forces, emergency response units, and security
          operations across the UAE.
        </p>
        <div className="hero-actions">
          <button className="btn primary" onClick={() => onScrollTo('capabilities')}>
            Explore Capabilities <span className="arrow">→</span>
          </button>
          <button className="btn" onClick={() => onScrollTo('contact')}>
            Request Consultation
          </button>
        </div>
      </div>
      <div className="hero-meta">
        <span className="seg first">WB · DEF–SUP / 0024</span>
        <span className="seg">CHAN 04 · SECURE</span>
        <span className="seg">{'STATUS • LIVE'} <span className="blink" style={{ color: 'var(--accent)' }}>●</span></span>
        <span className="seg last">SCROLL ↓ TO ENGAGE</span>
      </div>
    </section>
  );
}
