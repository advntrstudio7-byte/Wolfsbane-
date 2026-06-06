import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-grid">
        <div>
          <div className="brand" style={{ marginBottom: 18 }}>
            <Image src="/assets/wolfsbane-logo.png" alt="WolfSbane — Military Equipment" width={160} height={60} style={{ height: 60, width: 'auto', objectFit: 'contain' }} />
          </div>
          <p style={{ color: 'var(--fg-mute)', fontSize: 14, lineHeight: 1.6, maxWidth: '44ch' }}>
            UAE-based defense equipment supplier. Tactical, CBRN, communication,
            and military support equipment for those who operate at the edge.
          </p>
          <div className="row" style={{ marginTop: 20 }}>
            <span className="pill"><span className="dot"></span>SECURE PROCUREMENT</span>
          </div>
        </div>
        <div>
          <h4>Capabilities</h4>
          <ul>
            <li><a href="/#capabilities">Chemical Defense</a></li>
            <li><a href="/#capabilities">Tactical Equipment</a></li>
            <li><a href="/#capabilities">Communication Systems</a></li>
            <li><a href="/#capabilities">Field Engineering</a></li>
            <li><a href="/#capabilities">Tents & Shelters</a></li>
          </ul>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/#products">Products</a></li>
            <li><Link href="/suppliers">Suppliers</Link></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>Abu Dhabi, UAE</li>
            <li><a href="mailto:info@wolfsbane.ae">info@wolfsbane.ae</a></li>
            <li>+971 2 677 9991</li>
          </ul>
        </div>
      </div>
      <div className="copy">
        <span>© 2026 WOLFSBANE DEF–SUP · ALL RIGHTS RESERVED</span>
        <span>BUILD 24.05 · UAE</span>
      </div>
    </footer>
  );
}
