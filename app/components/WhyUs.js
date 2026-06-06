const features = [
  { n: '01', title: 'Reliable Procurement', desc: 'Verified supplier network, traceable provenance, on-time delivery commitments.' },
  { n: '02', title: 'Mission-Ready Equipment', desc: 'Pre-qualified gear that meets operational standards before it reaches your team.' },
  { n: '03', title: 'International Supplier Network', desc: 'Direct partnerships with leading European, US and Asian defense manufacturers.' },
  { n: '04', title: 'Fast Operational Support', desc: 'Dedicated account officer per unit; 24/7 escalation channel for active deployments.' },
  { n: '05', title: 'Technical Expertise', desc: 'In-house specialists for CBRN, comms and engineering procurement workflows.' },
  { n: '06', title: 'Long-Term Service Commitment', desc: 'Multi-year service contracts, spares, and depot-level maintenance support.' },
];

export default function WhyUs() {
  return (
    <section id="why" className="theme-light">
      <div className="wrap">
        <div className="sec-header">
          <div>
            <div className="sec-tag">07 · Differentiators</div>
            <h2 className="sec-h">Why Defense Teams<br />Choose Wolfsbane.</h2>
          </div>
          <div>
            <p className="lede">
              We operate as an extension of your procurement cell — not a generic
              supplier. Every order is owned by a named officer through delivery
              and post-service support.
            </p>
          </div>
        </div>
        <div className="why">
          {features.map((f) => (
            <div className="why-cell" key={f.n}>
              <div className="n">{f.n}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
