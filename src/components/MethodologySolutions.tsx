import React from 'react';

export const MethodologySolutions: React.FC = () => {
  return (
    <section className="py-24 relative" data-purpose="core-methodology-pillars" id="metodologia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase text-[#81B838] tracking-widest font-montserrat">
            Ecosistema | Seguridad Electrónica
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-montserrat mt-2">
            Metodología de Integración LVS &amp; Telecomunicaciones
          </h2>
          <p className="text-slate-400 mt-4">
            Nuestra plataforma unifica la infraestructura pasiva y activa en un solo centro neurálgico de gestión inteligente y continuo.
          </p>
        </div>

        {/* 4 Main Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1: Detección Temprana de Incendios */}
          <div className="p-6 bg-[#1B204A]/60 border border-white/10 rounded-xl hover:border-[#C36428]/50 transition-all group duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#1B204A] flex items-center justify-center text-[#C36428] text-xl mb-4 group-hover:scale-110 transition-transform border border-[#C36428]/30">
                <i className="fa-solid fa-fire-extinguisher"></i>
              </div>
              <h3 className="text-lg font-bold text-white font-montserrat mb-2">
                1. Detección Temprana de Incendios
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Sensores ópticos y térmicos inteligentes, estaciones manuales y sistemas de voceo de evacuación bajo normativas NFPA internacionales.
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center font-montserrat font-bold text-xs px-4 py-2.5 rounded-lg bg-[#81B838] text-slate-950 hover:bg-white hover:text-[#1B204A] shadow-sm hover:shadow-lg transition-all duration-200 mt-4 w-full text-center"
              href="https://nexus-incendios.vercel.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="flex flex-col items-center justify-center leading-tight py-0.5">
                <span className="text-[11px] font-medium tracking-wide opacity-90">Ver Solución</span>
                <span className="text-xs font-extrabold">Detección de Incendios →</span>
              </span>
            </a>
          </div>

          {/* Pillar 2: Control de Acceso Biométrico */}
          <div className="p-6 bg-[#1B204A]/60 border border-white/10 rounded-xl hover:border-[#3A9D5D]/50 transition-all group duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#1B204A] flex items-center justify-center text-[#3A9D5D] text-xl mb-4 group-hover:scale-110 transition-transform border border-[#3A9D5D]/30">
                <i className="fa-solid fa-fingerprint"></i>
              </div>
              <h3 className="text-lg font-bold text-white font-montserrat mb-2">
                2. Control de Acceso Biométrico
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Torniquetes, cerraduras electromagnéticas y validación biométrica/RFID sin contacto conectadas al registro de personal y visitas.
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center font-montserrat font-bold text-xs px-4 py-2.5 rounded-lg bg-[#81B838] text-slate-950 hover:bg-white hover:text-[#1B204A] shadow-sm hover:shadow-lg transition-all duration-200 mt-4 w-full text-center"
              href="https://nexus-accesos.vercel.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="flex flex-col items-center justify-center leading-tight py-0.5">
                <span className="text-[11px] font-medium tracking-wide opacity-90">Ver Solución</span>
                <span className="text-xs font-extrabold">Control de Accesos →</span>
              </span>
            </a>
          </div>

          {/* Pillar 3: CCTV & Videovigilancia IP */}
          <div className="p-6 bg-[#1B204A]/60 border border-white/10 rounded-xl hover:border-[#81B838]/50 transition-all group duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#1B204A] flex items-center justify-center text-[#81B838] text-xl mb-4 group-hover:scale-110 transition-transform border border-[#81B838]/30">
                <i className="fa-solid fa-video"></i>
              </div>
              <h3 className="text-lg font-bold text-white font-montserrat mb-2">
                3. CCTV &amp; Videovigilancia IP
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Cámaras 4K con IA para análisis perimetral, reconocimiento facial, lectura de placas (LPR) y almacenamiento redundante en la nube / local.
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center font-montserrat font-bold text-xs px-4 py-2.5 rounded-lg bg-[#81B838] text-slate-950 hover:bg-white hover:text-[#1B204A] shadow-sm hover:shadow-lg transition-all duration-200 mt-4 w-full text-center"
              href="https://nexus-cctv.vercel.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="flex flex-col items-center justify-center leading-tight py-0.5">
                <span className="text-[11px] font-medium tracking-wide opacity-90">Ver Solución</span>
                <span className="text-xs font-extrabold">CCTV IP →</span>
              </span>
            </a>
          </div>

          {/* Pillar 4: Control de Intrusión */}
          <div className="p-6 bg-[#1B204A]/60 border border-white/10 rounded-xl hover:border-[#4D2C5E]/50 transition-all group duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#1B204A] flex items-center justify-center text-[#4D2C5E] text-xl mb-4 group-hover:scale-110 transition-transform border border-[#4D2C5E]/30">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="text-lg font-bold text-white font-montserrat mb-2">
                4. Control de Intrusión
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Sistemas perimetrales e interiores anti-intrusión, sensores volumétricos de movimiento, barreras infrarrojas y detección perimetral 24/7 conectada a central.
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center font-montserrat font-bold text-xs px-4 py-2.5 rounded-lg bg-[#81B838] text-slate-950 hover:bg-white hover:text-[#1B204A] shadow-sm hover:shadow-lg transition-all duration-200 mt-4 w-full text-center"
              href="https://nexus-intrusion.vercel.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="flex flex-col items-center justify-center leading-tight py-0.5">
                <span className="text-[11px] font-medium tracking-wide opacity-90">Ver Solución</span>
                <span className="text-xs font-extrabold">Control de Intrusión →</span>
              </span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
