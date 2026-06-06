import { IconCBRN, IconTactical, IconComms, IconSecurity } from './Icons';

const caps = [
  { tag: 'C-01', Icon: IconCBRN, title: 'Field Engineering Corps', desc: 'Engineering services for defense and federal agencies supporting military and disaster relief operations.' },
  { tag: 'C-02', Icon: IconTactical, title: 'Intelligence Technologies', desc: 'Collection and analysis of foreign science, technology, and advanced weapon systems.' },
  { tag: 'C-03', Icon: IconComms, title: 'Defense and Security', desc: 'Advanced strategic expertise and technology masterfully designed from the ocean depths to outer space.' },
  { tag: 'C-04', Icon: IconSecurity, title: 'Chemical Defense', desc: 'Protective measures and specialized equipment against chemical, biological, radiological, and nuclear hazards.' },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="theme-light">
      <div className="wrap">
        <div className="sec-header">
          <div>
            <div className="sec-tag">03 · Capabilities</div>
            <h2 className="sec-h">Military Equipment Trading</h2>
          </div>
          <div></div>
        </div>
        <div className="caps">
          {caps.map((c) => (
            <div className="cap" key={c.tag}>
              <div className="cap-num">{c.tag}</div>
              <div className="cap-icon"><c.Icon size={48} stroke={1.2} /></div>
              <div className="cap-title">{c.title}</div>
              <div className="cap-desc">{c.desc}</div>
              <div className="cap-arrow">View Vertical <span>→</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
