import { IconBadge, IconFire, IconAlert, IconSecurity, IconBorder, IconCBRN, IconEngineering, IconGov } from './Icons';

const sectors = [
  { id: 'S-01', name: 'Defense Forces', Icon: IconBadge },
  { id: 'S-02', name: 'Civil Defense', Icon: IconFire },
  { id: 'S-03', name: 'Emergency Response', Icon: IconAlert },
  { id: 'S-04', name: 'Police Departments', Icon: IconSecurity },
  { id: 'S-05', name: 'Border Security', Icon: IconBorder },
  { id: 'S-06', name: 'CBRN Units', Icon: IconCBRN },
  { id: 'S-07', name: 'Engineering Corps', Icon: IconEngineering },
  { id: 'S-08', name: 'Government Agencies', Icon: IconGov },
];

export default function Industries() {
  return (
    <section id="industries" className="theme-light">
      <div className="wrap">
        <div className="sec-header">
          <div>
            <div className="sec-tag">05 · Who We Serve</div>
            <h2 className="sec-h"><br /></h2>
          </div>
          <div></div>
        </div>
        <div className="industries">
          {sectors.map((s) => (
            <div className="industry" key={s.id}>
              <div className="ind-icon"><s.Icon size={32} stroke={1.3} /></div>
              <div className="ind-name">{s.name}</div>
              <div className="ind-id">{s.id} · Active Account</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
