export default function About() {
  return (
    <section id="about" style={{ background: '#0B0B0D' }}>
      <div className="wrap">
        <div className="sec-tag">06 · Doctrine</div>
        <div className="split">
          <div className="split-img ph brackets">
            <div className="ph-mark">W</div>
            <div className="ph-tag">REF · DOCTRINE FOOTAGE</div>
            <div className="ph-label">
              <span>OPERATOR · FIELD DEPLOYMENT</span>
              <span>16:9 · 4K</span>
            </div>
            <div style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 68, height: 68, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'white', letterSpacing: '0.2em', background: 'rgba(0,0,0,0.4)' }}>▶ PLAY</div>
            </div>
          </div>
          <div className="split-content">
            <h2 className="sec-h" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}>
              Built Around<br />Operational Excellence.
            </h2>
            <p className="lede">
              WolfSbane collaborates with internationally recognized manufacturers
              and defense technology providers to supply high-performance tactical
              and defense equipment across the UAE.
            </p>
            <p className="lede">
              Our expertise spans chemical defense, field operations, communication
              systems, engineering support, and mission-critical logistics solutions.
            </p>
            <div className="row" style={{ marginTop: 16 }}>
              <span className="pill"><span className="dot"></span>ISO 9001:2015</span>
              <span className="pill"><span className="dot"></span>NATO STANAG</span>
              <span className="pill"><span className="dot"></span>UAE MOD APPROVED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
