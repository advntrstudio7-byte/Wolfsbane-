'use client';
import Link from 'next/link';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function RelatedProducts({ related, categoryShort }) {
  return (
    <section style={{ maxWidth: 1400, margin: '0 auto', padding: '56px 56px 100px', borderTop: '1px solid var(--line)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div className="sec-tag">More from · {categoryShort}</div>
          <h2 className="sec-h" style={{ marginTop: 12, marginBottom: 0, fontSize: 'clamp(28px, 3.4vw, 44px)' }}>Related Equipment.</h2>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }} className="related-grid">
        {related.map((it) => (
          <Link key={it.code} href={`/products/${it.code}`} style={{ position: 'relative', aspectRatio: '4/5', background: '#15181d', border: '1px solid var(--line)', overflow: 'hidden', display: 'block', textDecoration: 'none', transition: 'border-color .2s ease, transform .2s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            <img src={`${BASE}${it.img}`} alt={it.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,11,13,0) 50%, rgba(11,11,13,0.9) 100%)' }}></div>
            <div style={{ position: 'absolute', top: 12, left: 12, fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--accent)', background: 'rgba(11,11,13,0.6)', padding: '3px 7px', letterSpacing: '0.22em' }}>{it.code}</div>
            <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14, color: 'white', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 13, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
              <span>{it.name}</span>
              <span style={{ color: 'var(--accent)' }}>→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
