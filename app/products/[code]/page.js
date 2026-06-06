import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import RelatedProducts from '../../components/RelatedProducts';
import { PRODUCT_BY_CODE, PRODUCT_CATEGORIES } from '../../data/products';

export async function generateStaticParams() {
  return PRODUCT_CATEGORIES.flatMap((cat) =>
    cat.items.map((it) => ({ code: it.code }))
  );
}

export async function generateMetadata({ params }) {
  const { code } = await params;
  const product = PRODUCT_BY_CODE[code];
  if (!product) return { title: 'Product Not Found — WOLFSBANE' };
  return {
    title: `${product.name} (${product.code}) — WOLFSBANE`,
    description: product.desc,
  };
}

export default async function ProductPage({ params }) {
  const { code } = await params;
  const product = PRODUCT_BY_CODE[code];
  if (!product) notFound();

  const related = product.category.items.filter((it) => it.code !== product.code);

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 90 }}>

        {/* Breadcrumb */}
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 56px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line)', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--fg-mute)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
            <Link href="/" style={{ color: 'var(--fg-mute)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 12px', color: 'var(--fg-dim)' }}>/</span>
            <Link href="/#products" style={{ color: 'var(--fg-mute)', textDecoration: 'none' }}>Products</Link>
            <span style={{ margin: '0 12px', color: 'var(--fg-dim)' }}>/</span>
            <span style={{ color: 'var(--accent)' }}>{product.category.short}</span>
            <span style={{ margin: '0 12px', color: 'var(--fg-dim)' }}>/</span>
            <span style={{ color: 'white' }}>{product.code}</span>
          </div>
          <Link href="/#products" className="btn" style={{ padding: '10px 16px' }}>← Back</Link>
        </div>

        {/* Main row */}
        <section style={{ maxWidth: 1400, margin: '0 auto', padding: '56px 56px 80px', display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: 56, alignItems: 'start' }} className="product-detail-row">

          {/* Image column */}
          <div>
            <div style={{ position: 'relative', aspectRatio: '4/3', background: '#15181d', border: '1px solid var(--line)', overflow: 'hidden' }}>
              <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <span style={{ position: 'absolute', top: 14, left: 14, width: 18, height: 18, borderTop: '1.5px solid var(--accent)', borderLeft: '1.5px solid var(--accent)' }}></span>
              <span style={{ position: 'absolute', top: 14, right: 14, width: 18, height: 18, borderTop: '1.5px solid var(--accent)', borderRight: '1.5px solid var(--accent)' }}></span>
              <span style={{ position: 'absolute', bottom: 14, left: 14, width: 18, height: 18, borderBottom: '1.5px solid var(--accent)', borderLeft: '1.5px solid var(--accent)' }}></span>
              <span style={{ position: 'absolute', bottom: 14, right: 14, width: 18, height: 18, borderBottom: '1.5px solid var(--accent)', borderRight: '1.5px solid var(--accent)' }}></span>
              <div style={{ position: 'absolute', top: 18, left: 50, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, background: 'rgba(11,11,13,0.7)', color: 'var(--accent)', padding: '5px 10px', letterSpacing: '0.22em' }}>{product.code}</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginTop: 14 }}>
              {[0,1,2,3].map((i) => (
                <div key={i} style={{ aspectRatio: '1/1', background: '#15181d', border: i === 0 ? '1px solid var(--accent)' : '1px solid var(--line)', overflow: 'hidden', opacity: i === 0 ? 1 : 0.45 }}>
                  <img src={product.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Info column */}
          <div>
            <div className="sec-tag" style={{ marginBottom: 14 }}>{product.category.short} · {product.code}</div>
            <h1 className="display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', color: 'white', margin: 0, lineHeight: 0.96, letterSpacing: '0.02em' }}>{product.name}</h1>
            <p style={{ marginTop: 18, color: 'var(--fg-mute)', fontSize: 15, lineHeight: 1.6 }}>{product.desc || product.category.blurb}</p>

            {product.specs && (
              <div style={{ marginTop: 32, border: '1px solid var(--line)' }}>
                <div style={{ padding: '12px 18px', background: 'var(--bg-2)', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.26em', textTransform: 'uppercase' }}>Specification</div>
                {product.specs.map(([k, v]) => (
                  <div key={k} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', padding: '14px 18px', borderTop: '1px solid var(--line)', fontSize: 14 }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--fg-mute)', letterSpacing: '0.2em', textTransform: 'uppercase', alignSelf: 'center' }}>{k}</span>
                    <span style={{ color: 'white' }}>{v}</span>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <Link href="/#contact" className="btn primary">Request Quote <span className="arrow">→</span></Link>
              <button className="btn">Download Spec Sheet</button>
            </div>

            <div style={{ marginTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap', fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--fg-mute)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              <span className="pill"><span className="dot"></span>In Stock</span>
              <span className="pill"><span className="dot"></span>Lead 2–4 wks</span>
              <span className="pill"><span className="dot"></span>UAE MOD Approved</span>
            </div>
          </div>
        </section>

        <RelatedProducts related={related} categoryShort={product.category.short} />
      </main>
      <Footer />
    </>
  );
}
