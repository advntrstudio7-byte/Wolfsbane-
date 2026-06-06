const Icon = ({ children, size = 24, stroke = 1.4, color = "currentColor", style }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none"
    stroke={color} strokeWidth={stroke} strokeLinecap="square" strokeLinejoin="miter" style={style}>
    {children}
  </svg>
);

export const IconCBRN = (p) => <Icon {...p}><path d="M12 2 L21 7 L21 17 L12 22 L3 17 L3 7 Z" /><circle cx="12" cy="12.5" r="1.6" /><path d="M12 10.9 V8.2" /><path d="M13.4 13.3 L15.7 14.6" /><path d="M10.6 13.3 L8.3 14.6" /></Icon>;
export const IconTactical = (p) => <Icon {...p}><path d="M3 6 H21 V18 H3 Z" /><path d="M3 10 H21" /><path d="M9 6 V18" /><path d="M15 6 V18" /><circle cx="12" cy="14" r="1.2" /></Icon>;
export const IconComms = (p) => <Icon {...p}><circle cx="12" cy="12" r="2.2" /><path d="M6.5 6.5 A8 8 0 0 0 6.5 17.5" /><path d="M17.5 6.5 A8 8 0 0 1 17.5 17.5" /><path d="M9.5 9.5 A4 4 0 0 0 9.5 14.5" /><path d="M14.5 9.5 A4 4 0 0 1 14.5 14.5" /></Icon>;
export const IconEngineering = (p) => <Icon {...p}><path d="M3 20 L9 14 L13 18 L21 10" /><path d="M15 10 H21 V16" /><path d="M3 4 H21" /></Icon>;
export const IconSecurity = (p) => <Icon {...p}><path d="M12 2 L20 5 V12 C20 17 12 22 12 22 C12 22 4 17 4 12 V5 Z" /><path d="M9 12 L11.5 14.5 L16 10" /></Icon>;
export const IconShelter = (p) => <Icon {...p}><path d="M3 19 L12 4 L21 19 Z" /><path d="M9 19 V13 H15 V19" /><path d="M12 13 V19" /></Icon>;
export const IconBadge = (p) => <Icon {...p}><circle cx="12" cy="9" r="5" /><path d="M8.5 13 L7 22 L12 19 L17 22 L15.5 13" /></Icon>;
export const IconFire = (p) => <Icon {...p}><path d="M12 3 C13 7 17 9 17 14 A5 5 0 0 1 7 14 C7 11 9 10 9 8 C10 9 11 9 12 3 Z" /></Icon>;
export const IconAlert = (p) => <Icon {...p}><path d="M12 3 L22 20 H2 Z" /><path d="M12 10 V14" /><path d="M12 17 V17.5" /></Icon>;
export const IconBorder = (p) => <Icon {...p}><path d="M3 20 L8 4 L13 20 L18 4 L21 13" /></Icon>;
export const IconGov = (p) => <Icon {...p}><path d="M2 20 H22" /><path d="M4 20 V10" /><path d="M8 20 V10" /><path d="M12 20 V10" /><path d="M16 20 V10" /><path d="M20 20 V10" /><path d="M2 10 H22" /><path d="M3 10 L12 4 L21 10" /></Icon>;

export const WBMark = ({ size = 28, color = "var(--accent)" }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none">
    <path d="M16 2 L29 9 L29 23 L16 30 L3 23 L3 9 Z" stroke={color} strokeWidth="1.4" />
    <path d="M8 11 L11.5 21 L14.5 14 L17.5 21 L21 11" stroke="white" strokeWidth="1.6" strokeLinejoin="miter" strokeLinecap="square" />
    <circle cx="24" cy="8" r="1.4" fill={color} />
  </svg>
);
