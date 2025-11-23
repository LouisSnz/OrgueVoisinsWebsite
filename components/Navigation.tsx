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
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/images/LOGO_AMIS_ORGUE_NOIR.png"
                alt="Les Amis de l'Orgue"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className={`text-xl font-serif font-semibold ${isScrolled ? 'text-accent-blue' : 'text-white'}`}>
              Les Amis de l&apos;Orgue
            </div>
          </Link>

          {/* Right side - Enquire + Menu button */}
          <div className="flex items-center space-x-6">
            {/* Enquire today link - hidden on mobile */}
            <Link
              href="/contact"
              className={`hidden md:block transition-colors duration-200 font-medium ${
                isScrolled ? 'text-charcoal hover:text-accent-blue' : 'text-white hover:text-white/80'
              }`}
            >
              Nous contacter
            </Link>

            {/* Menu Button */}
            <button
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                isScrolled
                  ? 'bg-charcoal/10 hover:bg-charcoal/20 text-charcoal'
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="font-medium">Menu</span>
              <svg
                className="w-5 h-5"
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
        </div>

        {/* Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mt-4 pb-4 glass-strong rounded-lg">
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
