'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PRODUCT_CATEGORIES } from '../data/products';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Products() {
const [activeIdx, setActiveIdx] = useState(0);
const router = useRouter();
const active = PRODUCT_CATEGORIES[activeIdx];
const featured = active.items.find((it) => it.featured) || active.items[0];
const supporting = active.items.filter((it) => it !== featured);

return (
<section id="products" style={{ background: '#0f1115', padding: '120px 56px', borderTop: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
<div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, background: 'radial-gradient(circle, rgba(179,146,85,0.10), transparent 60%)', pointerEvents: 'none' }}></div>
<div className="wrap" style={{ maxWidth: 1400, position: 'relative' }}>

{/* Header */}
<div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'end', marginBottom: 48, paddingBottom: 28, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
<div>
<div className="sec-tag">04 · Equipment Catalogue</div>
<h2 className="sec-h" style={{ marginTop: 12, marginBottom: 0 }}>Products & Systems.</h2>
</div>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--fg-dim)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
<span>Category</span>
<span style={{ color: 'var(--accent)', fontSize: 28, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}>
{String(activeIdx + 1).padStart(2, '0')} <span style={{ color: 'var(--fg-dim)', fontSize: 16 }}>/ {String(PRODUCT_CATEGORIES.length).padStart(2, '0')}</span>
</span>
</div>
</div>

{/* Category tabs */}
<div style={{ display: 'flex', gap: 4, marginBottom: 48, flexWrap: 'wrap', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 0 }}>
{PRODUCT_CATEGORIES.map((c, i) => (
<button key={c.name} onClick={() => setActiveIdx(i)} style={{ background: 'transparent', border: 'none', padding: '16px 22px', cursor: 'pointer', fontFamily: 'Bebas Neue, sans-serif', fontSize: 20, letterSpacing: '0.04em', color: activeIdx === i ? 'white' : 'var(--fg-mute)', position: 'relative', transition: 'color .2s ease', lineHeight: 1 }}
onMouseEnter={(e) => { if (activeIdx !== i) e.currentTarget.style.color = 'var(--fg)'; }}
onMouseLeave={(e) => { if (activeIdx !== i) e.currentTarget.style.color = 'var(--fg-mute)'; }}>
<span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: activeIdx === i ? 'var(--accent)' : 'var(--fg-dim)', letterSpacing: '0.2em', marginRight: 10 }}>
{String(i + 1).padStart(2, '0')}
</span>
{c.short}
{activeIdx === i && <span style={{ position: 'absolute', left: 0, right: 0, bottom: -1, height: 2, background: 'var(--accent)' }}></span>}
</button>
))}
</div>

{/* Mosaic */}
<div key={activeIdx} style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)', gap: 24, alignItems: 'stretch', animation: 'fadeUpProd .4s ease' }} className="products-mosaic">

{/* Featured */}
<article onClick={() => router.push(`/products/${featured.code}`)} style={{ position: 'relative', minHeight: 540, background: 'linear-gradient(180deg, #1a1d23 0%, #0f1115 100%)', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
<span style={{ position: 'absolute', top: 14, left: 14, width: 16, height: 16, borderTop: '1px solid var(--accent)', borderLeft: '1px solid var(--accent)', zIndex: 2 }}></span>
<span style={{ position: 'absolute', bottom: 14, right: 14, width: 16, height: 16, borderBottom: '1px solid var(--accent)', borderRight: '1px solid var(--accent)', zIndex: 2 }}></span>
<div style={{ position: 'absolute', inset: 0, background: '#0f1115' }}>
<Image src={`${BASE}${featured.img}`} alt={featured.name} fill style={{ objectFit: 'cover' }} />
</div>
<div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '65%', background: 'linear-gradient(180deg, rgba(15,17,21,0) 0%, rgba(15,17,21,0.85) 50%, rgba(15,17,21,0.98) 100%)', pointerEvents: 'none', zIndex: 1 }}></div>
<div style={{ position: 'relative', padding: '32px 36px', display: 'flex', justifyContent: 'space-between', zIndex: 2 }}>
<div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.26em', textTransform: 'uppercase' }}>Featured · {active.short}</div>
<div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--fg-dim)', letterSpacing: '0.22em' }}>{featured.code}</div>
</div>
<div style={{ position: 'relative', padding: '32px 36px 36px', zIndex: 2 }}>
<div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--fg-mute)', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 14 }}>Mk-IV · In Stock · Lead 2–4 wks</div>
<h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(36px, 4.2vw, 60px)', margin: 0, color: 'white', letterSpacing: '0.02em', lineHeight: 0.96 }}>{featured.name}</h3>
<p style={{ marginTop: 16, marginBottom: 24, color: 'var(--fg-mute)', fontSize: 14, lineHeight: 1.55, maxWidth: '44ch' }}>{active.blurb}</p>
<div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '12px 18px', background: 'var(--accent)', color: '#0B0B0D', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
Spec Sheet <span>→</span>
</div>
</div>
</article>

{/* Supporting grid */}
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="products-supporting">
{supporting.map((it, i) => (
<article key={it.code} onClick={() => router.push(`/products/${it.code}`)} style={{ position: 'relative', minHeight: 260, background: '#15181d', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', cursor: 'pointer', transition: 'border-color .2s ease, transform .2s ease', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
<div style={{ position: 'absolute', inset: 0 }}>
<Image src={`${BASE}${it.img}`} alt={it.name} fill style={{ objectFit: 'cover' }} />
</div>
<div style={{ position: 'relative', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, zIndex: 1 }}>
<span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, background: 'var(--accent)', color: '#0B0B0D', padding: '3px 7px', letterSpacing: '0.22em', fontWeight: 700 }}>{String(i + 2).padStart(2, '0')}</span>
<span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'rgba(11,11,13,0.55)', letterSpacing: '0.22em', background: 'rgba(255,255,255,0.7)', padding: '3px 7px' }}>{it.code}</span>
</div>
<div style={{ position: 'relative', padding: '14px 18px 16px', background: 'linear-gradient(180deg, rgba(11,11,13,0) 0%, rgba(11,11,13,0.85) 60%, rgba(11,11,13,0.95) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, zIndex: 1 }}>
<span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 13, color: 'white', lineHeight: 1.25 }}>{it.name}</span>
<span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--accent)' }}>→</span>
</div>
</article>
))}
</div>
</div>

{/* Footer row */}
<div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
<div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
<button onClick={() => setActiveIdx((activeIdx - 1 + PRODUCT_CATEGORIES.length) % PRODUCT_CATEGORIES.length)} style={{ width: 40, height: 40, background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: 'var(--fg)', cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace' }}>←</button>
<button onClick={() => setActiveIdx((activeIdx + 1) % PRODUCT_CATEGORIES.length)} style={{ width: 40, height: 40, background: 'var(--accent)', border: '1px solid var(--accent)', color: '#0B0B0D', cursor: 'pointer', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}>→</button>
<div style={{ marginLeft: 14, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--fg-mute)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{active.short}</div>
</div>
<span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.22em', textTransform: 'uppercase', borderBottom: '1px solid var(--accent)', paddingBottom: 4 }}>View Full Product Range →</span>
</div>
</div>
</section>
);
}
