'use client';
import { useState } from 'react';

function SVGMap() {
  return (
    <svg viewBox="0 0 600 450" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ display: 'block' }}>
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        </pattern>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="600" height="450" fill="#0a0c10" />
      <rect width="600" height="450" fill="url(#grid)" />
      <path d="M50 80 Q160 60 240 120 T420 180 Q500 200 560 280 L570 400 L40 400 Z" fill="#11151b" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <path d="M50 80 Q160 60 240 120 T420 180 Q500 200 560 280" fill="none" stroke="var(--accent)" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="3 4" />
      <circle cx="345" cy="220" r="60" fill="url(#glow)" />
      <circle cx="345" cy="220" r="4" fill="var(--accent)" />
      <circle cx="345" cy="220" r="10" fill="none" stroke="var(--accent)" strokeWidth="1">
        <animate attributeName="r" from="6" to="40" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="1" to="0" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <g fill="rgba(255,255,255,0.5)">
        <circle cx="200" cy="150" r="2" /><circle cx="430" cy="240" r="2" /><circle cx="290" cy="310" r="2" />
      </g>
      <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(232,236,239,0.55)" letterSpacing="2">
        <text x="350" y="210">ABU DHABI · HQ</text>
        <text x="205" y="143">QATAR</text>
        <text x="295" y="305">EMPTY QUARTER</text>
        <text x="435" y="233">OMAN COAST</text>
        <text x="40" y="430">LAT 24.4539° N  ·  LON 54.3773° E</text>
        <text x="460" y="430">SCALE 1 : 1,250,000</text>
      </g>
      <rect x="8" y="8" width="584" height="434" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <g stroke="var(--accent)" strokeWidth="1.2">
        <path d="M16 16 L36 16 M16 16 L16 36" /><path d="M584 16 L564 16 M584 16 L584 36" />
        <path d="M16 434 L36 434 M16 434 L16 414" /><path d="M584 434 L564 434 M584 434 L584 414" />
      </g>
    </svg>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', category: 'Tactical Equipment', msg: '' });
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="theme-light" style={{ color: 'rgb(255,255,255)', backgroundColor: 'rgb(255,255,255)' }}>
      <div className="wrap">
        <div className="sec-header">
          <div>
            <div className="sec-tag">09 · Contact</div>
            <h2 className="sec-h">Open A Secure<br />Procurement Channel.</h2>
          </div>
          <div>
            <p className="lede">
              For procurement inquiries, technical specifications, or capability
              briefings, submit a request below. A named account officer will
              respond within one business day.
            </p>
          </div>
        </div>
        <div className="contact-grid">
          <div>
            <div className="map"><SVGMap /></div>
            <div style={{ marginTop: 24, border: '1px solid var(--line)', display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }} className="contact-info-strip">
              {[['LOCATION', 'Abu Dhabi, UAE'], ['EMAIL', 'info@wolfsbane.ae'], ['DESK', '+971 2 677 9991']].map(([k, v], i) => (
                <div key={k} style={{ padding: '20px 22px', borderRight: i < 2 ? '1px solid var(--line)' : '0', minWidth: 0 }}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.24em' }}>{k}</div>
                  <div style={{ marginTop: 6, fontSize: 15, color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={submit} style={{ border: '1px solid var(--line)', padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: 22, background: 'var(--bg-2)', backgroundColor: 'rgb(0,0,0)' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.24em', textTransform: 'uppercase' }}>Request Form · INT-Q24</div>
            <div className="form-row">
              <label>Name</label>
              <input value={form.name} onChange={update('name')} required placeholder="Full name" />
            </div>
            <div className="form-row">
              <label>Organization / Unit</label>
              <input value={form.org} onChange={update('org')} required placeholder="e.g. Defense Procurement Office" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
              <div className="form-row">
                <label>Email</label>
                <input type="email" value={form.email} onChange={update('email')} required placeholder="you@unit.gov" />
              </div>
              <div className="form-row">
                <label>Phone</label>
                <input value={form.phone} onChange={update('phone')} placeholder="+971 ..." />
              </div>
            </div>
            <div className="form-row">
              <label>Capability Category</label>
              <select value={form.category} onChange={update('category')}>
                <option>Chemical Defense (CBRN)</option>
                <option>Tactical Equipment</option>
                <option>Communication Systems</option>
                <option>Field Engineering</option>
                <option>Defense Security Solutions</option>
                <option>Tents & Shelters</option>
                <option>Other / Multi-category</option>
              </select>
            </div>
            <div className="form-row">
              <label>Operational Brief</label>
              <textarea value={form.msg} onChange={update('msg')} placeholder="Quantities, timelines, deployment context..." />
            </div>
            <button className="btn primary" style={{ alignSelf: 'flex-start' }} type="submit">
              {submitted ? 'Channel Opened ✓' : 'Submit Request'} <span className="arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
