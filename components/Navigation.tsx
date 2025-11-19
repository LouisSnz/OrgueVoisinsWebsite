'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '/', label: 'Accueil' },
    { href: '/association', label: 'L\'Association' },
    { href: '/actualites', label: 'Actualités' },
    { href: '/projet', label: 'Le Projet' },
    { href: '/concerts', label: 'Concerts & Événements' },
    { href: '/soutenir', label: 'Nous Soutenir' },
    { href: '/parrainage', label: 'Parrainage' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-strong py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/images/LOGO_AMIS_ORGUE_NOIR.png"
                alt="Les Amis de l'Orgue"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-xl md:text-2xl font-serif font-bold text-accent-blue hidden sm:block">
              Les Amis de l&apos;Orgue
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-charcoal hover:text-accent-blue transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/soutenir"
              className="btn-primary ml-4"
            >
              Faire un don
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-charcoal p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 glass-strong rounded-lg">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-charcoal hover:text-accent-blue hover:bg-white/10 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="/soutenir"
                className="btn-primary block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Faire un don
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
