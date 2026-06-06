'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

export default function Nav({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 8, behavior: 'smooth' });
      }, 120);
    } else {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 8, behavior: 'smooth' });
    }
  };

  const links = [
    { href: '/', label: 'Home', id: 'hero' },
    { href: '/suppliers', label: 'Suppliers' },
    { href: '/#capabilities', label: 'Our Trading', id: 'capabilities' },
    { href: '/#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`top${scrolled ? ' scrolled' : ''}`}>
      <Link href="/" className="brand" style={{ textDecoration: 'none' }}>
        <Image src="/assets/wolfsbane-logo.png" alt="WolfSbane — Military Equipment"
          width={120} height={48} style={{ height: 48, width: 'auto', objectFit: 'contain' }} priority />
      </Link>
      <div className="links">
        {links.map(({ href, label, id }) =>
          id ? (
            <a key={label} href={`#${id}`} className={activeSection === id ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollTo(id); }}>{label}</a>
          ) : (
            <Link key={label} href={href} className={pathname === href ? 'active' : ''}>{label}</Link>
          )
        )}
      </div>
      <button className="btn primary" style={{ padding: '10px 16px' }} onClick={() => scrollTo('contact')}>
        Request Quote <span className="arrow">→</span>
      </button>
    </nav>
  );
}
