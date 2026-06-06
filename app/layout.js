import { Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], display: "swap" });
const inter = Inter({ weight: ["300","400","500","600","700"], subsets: ["latin"], display: "swap" });
const jetbrainsMono = JetBrains_Mono({ weight: ["400","500","600"], subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "WOLFSBANE — Advanced Defense Solutions",
  description: "UAE-based defense equipment supplier. Tactical, CBRN, communication, and military support equipment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --font-bebas: ${bebasNeue.style.fontFamily};
            --font-inter: ${inter.style.fontFamily};
            --font-mono: ${jetbrainsMono.style.fontFamily};
          }
          body { font-family: var(--font-inter), system-ui, sans-serif; }
          .display { font-family: var(--font-bebas), 'Impact', sans-serif !important; }
          h1.hero-h, h2.sec-h, .cap-title, .ind-name, .counter .n, .why-cell h3, .vm h3, .product-name { font-family: var(--font-bebas), 'Impact', sans-serif !important; }
          .sec-tag, .mono, nav .links a, .btn, .hero-tag, .counter .l, .cap-num, .cap-arrow, .ind-id, .vm-label, .form-row label, footer.foot h4, footer.foot .copy { font-family: var(--font-mono), ui-monospace, monospace !important; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
