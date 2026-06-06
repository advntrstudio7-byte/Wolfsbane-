'use client';
import { useEffect, useRef, useState } from 'react';

function Counters() {
  const items = [
    { n: '10', unit: '+', label: 'Defense Categories Supplied' },
    { n: 'UAE', label: 'Based Operations & Logistics' },
    { n: '24/7', label: 'Tactical & CBRN Specialist Support' },
    { n: 'G·STD', label: 'Trusted Government Supply Network' },
  ];

  const [vals, setVals] = useState(items.map((it) => {
    const target = parseInt(it.n, 10);
    return Number.isFinite(target) && String(target) === it.n ? 0 : it.n;
  }));
  const ref = useRef(null);
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    const animate = () => {
      if (fired.current) return;
      fired.current = true;
      let frame = 0;
      const totalFrames = 36;
      const tick = () => {
        frame++;
        const progress = Math.min(1, frame / totalFrames);
        setVals(items.map((it) => {
          const target = parseInt(it.n, 10);
          if (Number.isFinite(target) && String(target) === it.n) return Math.round(progress * target);
          return it.n;
        }));
        if (frame < totalFrames) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { animate(); obs.disconnect(); } });
    }, { threshold: 0.2 });
    if (ref.current) {
      obs.observe(ref.current);
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) animate();
    }
    const t = setTimeout(() => { if (!fired.current) { setVals(items.map((it) => it.n)); fired.current = true; } }, 2000);
    return () => { obs.disconnect(); clearTimeout(t); };
  }, []);

  return (
    <div className="counter-row" ref={ref} style={{ marginTop: 80 }}>
      {items.map((it, i) => (
        <div key={i} className="counter">
          <div className="n">{vals[i]}{it.unit && <span className="unit">{it.unit}</span>}</div>
          <div className="l">{it.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function Trust() {
  return (
    <section id="trust" className="theme-light">
      <div className="wrap">
        <div className="sec-header">
          <div>
            <div className="sec-tag">02 · Mission Intent</div>
            <h2 className="sec-h">About us<br />Who Protect.</h2>
          </div>
          <div>
            <p className="lede">
              Wolf Sbane Wholesale of Military Equipment Trading – Sole Proprietorship L.L.C is located in Abu Dhabi,
              United Arab Emirates, a well reputed company that represents and collaborates with world renowned companies
              all over the world. Wolf Sbane Laboratory Wholesale of Military Equipment Trading – Sole Proprietorship L.L.C,
              is focusing mainly in supplying the requirements of Chemical Defense of the UAE Army.
              The company has grown since then and has been dealing with other departments of UAE army like Land Forces,
              Field Engineering Corps, Signal Corps and Maintenance Corps as well as CBRN and Civil Defense Police
              Department supplying the highest quality equipment and services.
            </p>
          </div>
        </div>
        <Counters />
      </div>
    </section>
  );
}
