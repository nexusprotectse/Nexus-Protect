import React, { useState } from 'react';
import { LogoNexus } from './LogoNexus';

interface NavbarProps {
  onOpenAudit?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Social Sidebar (Left Centered) */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        <a
          aria-label="Facebook Nexus Protect"
          className="w-[36px] h-[36px] rounded-lg bg-[#1877F2] text-white hover:bg-[#166fe5] flex items-center justify-center transition-transform hover:scale-110 shadow-lg"
          href="https://facebook.com/nexus-protect"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a
          aria-label="Instagram Nexus Protect"
          className="w-[36px] h-[36px] rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-90 flex items-center justify-center transition-transform hover:scale-110 shadow-lg"
          href="https://instagram.com/nexus-protect"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>

      {/* Top level fixed navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#121625]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo and Corporate Name */}
            <a className="flex items-center gap-3 group" href="#hero">
              <LogoNexus />
              <span className="font-montserrat font-bold text-xl text-white tracking-tight">
                NEXUS <span className="text-[#81B838]">PROTECT</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-300">
              <a className="hover:text-[#81B838] transition-colors duration-200" href="#problema">
                El Reto
              </a>
              <a className="hover:text-[#81B838] transition-colors duration-200" href="#metodologia">
                Metodología LVS
              </a>
              <a className="hover:text-[#81B838] transition-colors duration-200" href="#soluciones">
                Soluciones
              </a>
              <a className="hover:text-[#81B838] transition-colors duration-200" href="#garantia">
                Garantía Directa
              </a>
              <a className="hover:text-[#81B838] transition-colors duration-200" href="#comparativa">
                Comparativa
              </a>
              <a className="hover:text-[#81B838] transition-colors duration-200" href="#faq">
                Preguntas Frecuentes
              </a>
            </nav>

            {/* Right Side Quick Actions */}
            <div className="flex items-center gap-4">
              <a
                className="hidden sm:flex items-center gap-2 text-xs text-slate-300 font-semibold hover:text-white bg-white/5 py-2 px-3 rounded-lg border border-white/10"
                href="tel:+1800555900"
              >
                <i className="fa-solid fa-phone-volume text-[#81B838]"></i>
                <span>Soporte 24/7</span>
              </a>

              <a
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-montserrat font-bold text-white hover:bg-white hover:text-[#1B204A] transition-all duration-300 transform active:scale-95 cursor-pointer"
                href="#formulario-contacto"
                onClick={onOpenAudit}
                style={{
                  background: 'linear-gradient(135deg, rgb(255, 122, 24) 0%, rgb(255, 82, 0) 50%, rgb(255, 140, 66) 100%)',
                  boxShadow: 'rgba(255, 106, 0, 0.7) 0px 0px 18px, rgba(255, 75, 0, 0.4) 0px 0px 35px, rgba(255, 255, 255, 0.4) 0px 1px 1px inset',
                  textShadow: 'rgba(0, 0, 0, 0.5) 0px 1px 2px'
                }}
              >
                <i className="fa-solid fa-calendar-check mr-2"></i> Agendar Auditoría
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
                aria-label="Abrir menú"
              >
                <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121625] border-b border-white/10 px-4 py-6 space-y-3">
            <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#81B838] transition-colors py-1"
                href="#problema"
              >
                El Reto
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#81B838] transition-colors py-1"
                href="#metodologia"
              >
                Metodología LVS
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#81B838] transition-colors py-1"
                href="#soluciones"
              >
                Soluciones
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#81B838] transition-colors py-1"
                href="#garantia"
              >
                Garantía Directa
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#81B838] transition-colors py-1"
                href="#comparativa"
              >
                Comparativa
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#81B838] transition-colors py-1"
                href="#faq"
              >
                Preguntas Frecuentes
              </a>
            </nav>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <a
                className="flex items-center justify-center gap-2 text-xs text-slate-300 font-semibold bg-white/5 py-2.5 px-3 rounded-lg border border-white/10"
                href="tel:+1800555900"
              >
                <i className="fa-solid fa-phone-volume text-[#81B838]"></i>
                <span>Soporte 24/7: (800) 555-NEXUS</span>
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-lg text-sm font-montserrat font-bold text-white text-center"
                href="#formulario-contacto"
                style={{
                  background: 'linear-gradient(135deg, rgb(255, 122, 24) 0%, rgb(255, 82, 0) 50%, rgb(255, 140, 66) 100%)',
                  boxShadow: 'rgba(255, 106, 0, 0.7) 0px 0px 18px'
                }}
              >
                <i className="fa-solid fa-calendar-check mr-2"></i> Agendar Auditoría
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
