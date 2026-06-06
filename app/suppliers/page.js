import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SupplierGrid from '../components/SupplierGrid';
import { SUPPLIER_DIRECTORY } from '../data/suppliers';

export const metadata = {
  title: 'Suppliers — WOLFSBANE Defense Solutions',
  description: 'WolfSbane international supplier network — vetted defense manufacturers across Europe, North America, Asia-Pacific and the UAE.',
};

export default function SuppliersPage() {
  const allSuppliers = SUPPLIER_DIRECTORY.flatMap((r) => r.items);

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 90 }}>

        {/* Header */}
        <section style={{ position: 'relative', padding: '80px 56px 56px', borderBottom: '1px solid var(--line)', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -100, right: -120, width: 600, height: 600, background: 'radial-gradient(circle, rgba(179,146,85,0.12), transparent 60%)', pointerEvents: 'none' }}></div>
          <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
            <div className="sec-tag">Global Network · Vetted Partners</div>
            <h1 className="display" style={{ fontSize: 'clamp(48px, 7vw, 112px)', color: 'white', margin: '16px 0 18px', letterSpacing: '0.02em', lineHeight: 0.94 }}>
              Our International<br />Supplier Network.
            </h1>
            <p className="lede" style={{ maxWidth: '60ch' }}>
              WolfSbane maintains direct procurement relationships with internationally
              recognized defense manufacturers and technology providers across Europe,
              North America, Asia-Pacific and the UAE — ensuring authenticated provenance,
              consistent quality and fast turnaround on operational orders.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', border: '1px solid var(--line)', marginTop: 48 }} className="supplier-stats">
              {[['17+', 'Global Suppliers'], ['12', 'Countries Represented'], ['6', 'Equipment Categories'], ['ISO', '9001:2015 Compliant']].map(([n, l], i) => (
                <div key={l} style={{ padding: '28px 24px', borderRight: i < 3 ? '1px solid var(--line)' : '0' }}>
                  <div className="display" style={{ fontSize: 56, color: 'white', letterSpacing: '0.02em', lineHeight: 1 }}>{n}</div>
                  <div style={{ marginTop: 10, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--fg-mute)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supplier grid */}
        <section style={{ padding: '72px 56px', borderBottom: '1px solid var(--line)' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            <SupplierGrid suppliers={allSuppliers} />
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '100px 56px', background: 'var(--bg-2)', borderBottom: '1px solid var(--line)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
            <div className="sec-tag" style={{ justifyContent: 'center', display: 'inline-flex' }}>Procurement Inquiries</div>
            <h2 className="display" style={{ fontSize: 'clamp(36px, 5vw, 72px)', color: 'white', margin: '18px 0 16px', letterSpacing: '0.02em', lineHeight: 0.96 }}>
              Need a Supplier We Don&apos;t List?
            </h2>
            <p className="lede" style={{ maxWidth: '60ch', margin: '0 auto 28px' }}>
              Our procurement network extends beyond this public directory. If you have
              a specific manufacturer, equipment specification or sourcing requirement,
              our account officers can locate and qualify it.
            </p>
            <div style={{ display: 'inline-flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="/#contact" className="btn primary">Open Procurement Channel <span className="arrow">→</span></a>
              <a href="/" className="btn">← Back to Home</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
