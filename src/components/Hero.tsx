import React from 'react';

interface HeroProps {
  onOpenAudit?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  return (
    <section
      id="hero"
      data-purpose="hero-banner"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden tech-grid-bg radial-glow-hero"
    >
      {/* Background visual with scrim overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <img
          alt="Complejo Residencial y Corporativo Nexus Protect"
          className="w-full h-full object-cover pointer-events-none opacity-80"
          src="https://lh3.googleusercontent.com/aida/AEtjO1XWpQ-oMIJJ3hiOuPVgIOIsRY_13ehyBzMaRR4tmCeVfCjltx52p715T01NQSXs-UqwxWhz_0WiAYCFC6viDNWYgEYEfopA6OpnI3GMcU0FC0brybCZDkK1vo4ZKZLhQzBAXpH-X8mGZmCUsLHgzHPlGqc9H3zULU-vb-6tCbYQg4YkoBRUk-ApXpRsUuFxAg6yWFTiGSZjLLb_4eyomQN70YjYw53b98aePw_ekEBoJw"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // High fidelity fallback image if needed
            e.currentTarget.src = "/src/assets/images/hero_security_cctv_ai_1791324796041.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121625] via-[#0B0E17]/75 to-[#0B0E17]/60 pointer-events-none"></div>
      </div>

      {/* Glow ambient decorative orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#242B63]/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-10">
          
          {/* Badge Super Headline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B204A] border border-[#81B838]/40 text-[#81B838] text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#81B838] animate-ping"></span>
            Ingeniería Tecnológica | Seguridad Electrónica
          </div>

          {/* Main Headline */}
          <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight sm:leading-none mb-6">
            Proteja y automatice sus instalaciones con un proyecto tecnológico de&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81B838] to-[#3A9D5D]">
              Seguridad Electrónica
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-inter text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            <strong className="text-white">Conectamos Tecnología, Protegemos lo que importa.</strong> Centralizado, sin fallas de compatibilidad ni retrasos. Implemente una solución integral de seguridad electrónica, con respaldo directo de fábrica, operando al 100% desde el día uno.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-montserrat font-extrabold text-white shadow-glow-orange hover:bg-white hover:text-[#1B204A] hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer"
              href="#formulario-contacto"
              onClick={onOpenAudit}
              style={{
                background: 'linear-gradient(135deg, rgb(255, 140, 66) 0%, rgb(255, 85, 0) 45%, rgb(255, 119, 34) 80%, rgb(255, 59, 0) 100%)',
                boxShadow: 'rgba(255, 106, 0, 0.8) 0px 0px 25px, rgba(255, 70, 0, 0.45) 0px 0px 45px, rgba(255, 255, 255, 0.5) 0px 1px 2px inset',
                textShadow: 'rgba(0, 0, 0, 0.5) 0px 1px 3px'
              }}
            >
              <i className="fa-solid fa-shield-halved"></i> Solicitar Auditoría Gratuita
            </a>
            
            <a
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-montserrat font-bold bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-[#81B838]/50 transition-all duration-300 text-center flex items-center justify-center gap-2"
              href="#metodologia"
            >
              <i className="fa-solid fa-play text-[#81B838]"></i> Conocer Solución Integrada
            </a>
          </div>

          {/* Trust Badges Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-left">
            
            <div className="flex items-center gap-3 p-3 bg-[#1B204A]/40 rounded-lg border border-white/5">
              <i className="fa-solid fa-award text-2xl text-[#81B838]"></i>
              <div>
                <p className="text-xs text-slate-400 font-medium">Trayectoria</p>
                <p className="text-sm font-bold text-white font-montserrat">+15 Años</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[#1B204A]/40 rounded-lg border border-white/5">
              <i className="fa-solid fa-chart-line text-2xl text-[#3A9D5D]"></i>
              <div>
                <p className="text-xs text-slate-400 font-medium">Confiabilidad</p>
                <p className="text-sm font-bold text-white font-montserrat">97.9% Uptime</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[#1B204A]/40 rounded-lg border border-white/5">
              <i className="fa-solid fa-certificate text-2xl text-[#C36428]"></i>
              <div>
                <p className="text-xs text-slate-400 font-medium">Respaldo</p>
                <p className="text-sm font-bold text-white font-montserrat">Directo de Fábrica</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[#1B204A]/40 rounded-lg border border-white/5">
              <i className="fa-solid fa-headset text-2xl text-[#4D2C5E]"></i>
              <div>
                <p className="text-xs text-slate-400 font-medium">Asistencia</p>
                <p className="text-sm font-bold text-white font-montserrat">SLA 24/7 Crítico</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
