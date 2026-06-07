'use client';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function SupplierGrid({ suppliers }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }} className="supplier-grid">
      {suppliers.map((s, i) => (
        <article key={s.name}
          style={{
            position: 'relative', padding: '26px 26px 22px',
            background: 'var(--bg-2)', border: '1px solid var(--line)',
            minHeight: 220, display: 'flex', flexDirection: 'column',
            cursor: 'default', transition: 'border-color .2s ease, background .2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = '#1a1d23'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.background = 'var(--bg-2)'; }}>

          {/* Header row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.24em' }}>
              SUP · {String(i + 1).padStart(2, '0')}
            </span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--fg-dim)', letterSpacing: '0.18em' }}>
              EST. {s.est}
            </span>
          </div>

          {/* Logo area — transparent when logo present so card bg shows through; dashed border when placeholder */}
          <div style={{
            width: '100%', height: 88,
            background: s.logo ? 'transparent' : 'var(--bg)',
            border: s.logo ? 'none' : '1px dashed var(--line-2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 18, overflow: 'hidden',
          }}>
            {s.logo ? (
              <img
                src={`${BASE}${s.logo}`}
                alt={`${s.name} logo`}
                style={{ maxWidth: '85%', maxHeight: '80%', objectFit: 'contain', display: 'block' }}
              />
            ) : (
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--fg-dim)', letterSpacing: '0.24em', textTransform: 'uppercase' }}>
                Logo
              </span>
            )}
          </div>

          {/* Name + country */}
          <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 26, color: 'white', margin: 0, letterSpacing: '0.02em', lineHeight: 1.05 }}>
            {s.name}
          </h3>
          <div style={{ marginTop: 6, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--fg-mute)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            {s.country}
          </div>

          {/* Role description */}
          <p style={{ marginTop: 14, marginBottom: 18, color: 'var(--fg-mute)', fontSize: 13.5, lineHeight: 1.55, flex: 1 }}>
            {s.role}
          </p>

          {/* Footer row */}
          <div style={{ paddingTop: 14, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="pill" style={{ fontSize: 9 }}>
              <span className="dot"></span>{s.cat}
            </span>
            {s.productUrl ? (
              <a
                href={s.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.22em', textDecoration: 'none', cursor: 'pointer' }}
                onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
                onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}>
                PRODUCTS →
              </a>
            ) : (
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.22em' }}>
                VERIFIED →
              </span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
