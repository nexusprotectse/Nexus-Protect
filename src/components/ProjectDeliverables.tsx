import React from 'react';

export const ProjectDeliverables: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200" data-purpose="project-deliverables">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase text-[#3A9D5D] tracking-widest font-montserrat">
            Metodología de Cero Sorpresas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-montserrat mt-2">
            ¿Qué Recibe Exactamente con Cada Proyecto?
          </h2>
          <p className="text-slate-600 mt-4 text-base">
            Entregamos soluciones listas para operar, completamente auditables y documentadas según las mejores prácticas de la industria.
          </p>
        </div>

        {/* 3 Main Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Deliverable 1 */}
          <div className="p-8 rounded-2xl bg-[#1B204A] text-white border-2 border-[#3A9D5D]/40 shadow-xl hover:border-[#3A9D5D] transition-all flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#3A9D5D]/10 border border-[#3A9D5D]/40 flex items-center justify-center text-[#3A9D5D] text-2xl mb-6">
                <i className="fa-solid fa-server"></i>
              </div>
              <h3 className="font-montserrat font-bold text-white text-xl mb-3">
                1. Sistema Integral Operativo
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Infraestructura física y digital 100% montada: racks ordenados, conmutación configurada con VLANs de seguridad, cámaras focalizadas y sensores calibrados.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 border-t border-white/10 pt-4">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-[#81B838] font-bold"></i> Pruebas de penetración y carga
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-[#81B838] font-bold"></i> Etiquetado TIA/EIA normativo
              </li>
            </ul>
          </div>

          {/* Deliverable 2 */}
          <div className="p-8 rounded-2xl bg-[#1B204A] text-white border-2 border-[#81B838]/40 shadow-xl hover:border-[#81B838] transition-all flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#81B838]/10 border border-[#81B838]/40 flex items-center justify-center text-[#81B838] text-2xl mb-6">
                <i className="fa-solid fa-chalkboard-user"></i>
              </div>
              <h3 className="font-montserrat font-bold text-white text-xl mb-3">
                2. Capacitación In-House
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Entrenamiento presencial y manuales prácticos para el personal de TI, vigilancia y administración patrimonial sobre el uso correcto de las consolas y consolas VMS.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 border-t border-white/10 pt-4">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-[#81B838] font-bold"></i> Certificado de capacitación interna
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-[#81B838] font-bold"></i> Guías rápidas de resolución de dudas
              </li>
            </ul>
          </div>

          {/* Deliverable 3 */}
          <div className="p-8 rounded-2xl bg-[#1B204A] text-white border-2 border-[#C36428]/50 shadow-xl hover:border-[#C36428] transition-all flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#C36428]/10 border border-[#C36428]/40 flex items-center justify-center text-[#C36428] text-2xl mb-6">
                <i className="fa-solid fa-folder-open"></i>
              </div>
              <h3 className="font-montserrat font-bold text-white text-xl mb-3">
                3. Dossier de Ingeniería As-Built
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Planos definitivos en DWG/PDF con trayectorias de fibra y cableado, tablas de asignación de puertos IP, diagramas unifilares y certificación de enlaces Fluke.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 border-t border-white/10 pt-4">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-[#C36428] font-bold"></i> Reporte digital de reflectometría OTDR
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-[#C36428] font-bold"></i> Catálogo de claves y accesos cifrados
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-section: Bonos Exclusivos */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase text-[#C36428] tracking-widest font-montserrat">
            Valor Agregado Exclusivo
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat mt-2">
            Bonos Incluidos al Contratar su Proyecto
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Bono 1 */}
          <div className="relative bg-[#1B204A] border-2 border-[#3A9D5D]/50 rounded-2xl p-6 sm:p-8 overflow-hidden shadow-2xl text-white">
            <div className="absolute top-4 right-4 bg-[#3A9D5D] text-[#0B0E17] font-montserrat font-extrabold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full shadow">
              INCLUIDO SIN COSTO
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#3A9D5D]/10 border border-[#3A9D5D]/30 flex items-center justify-center text-[#3A9D5D] text-2xl mb-4">
              <i className="fa-solid fa-clipboard-check"></i>
            </div>
            <h3 className="text-xl font-bold font-montserrat text-white mb-2">
              Auditoría Inicial &amp; Relevamiento In Situ
            </h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Inspección técnica detallada en sus instalaciones por un ingeniero senior. Identificamos puntos ciegos perimetrales, cuellos de botella en redes de datos y posibles fallas en sistemas existentes.
            </p>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-[#81B838] font-bold uppercase tracking-wide">
                Valor regular: $850 USD
              </span>
              <span className="text-sm font-extrabold text-white bg-[#3A9D5D]/20 px-3 py-1 rounded-lg border border-[#3A9D5D]/30">
                Hoy: $0 USD
              </span>
            </div>
          </div>

          {/* Bono 2 */}
          <div className="relative bg-[#1B204A] border-2 border-[#C36428]/60 rounded-2xl p-6 sm:p-8 overflow-hidden shadow-2xl text-white">
            <div className="absolute top-4 right-4 bg-[#C36428] text-white font-montserrat font-extrabold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full shadow">
              INCLUIDO SIN COSTO
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#C36428]/20 border border-[#C36428]/40 flex items-center justify-center text-[#C36428] text-2xl mb-4">
              <i className="fa-solid fa-headset"></i>
            </div>
            <h3 className="text-xl font-bold font-montserrat text-white mb-2">
              Póliza de Soporte Preventivo Preferencial (12 Meses)
            </h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Mantenimiento preventivo programado cada 4 meses: limpieza de lentes, verificación de fuentes redundantes, actualización de firmwares críticos y calibración general del ecosistema.
            </p>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-amber-300 font-bold uppercase tracking-wide">
                Valor regular: $1,400 USD
              </span>
              <span className="text-sm font-extrabold text-white bg-[#C36428]/20 px-3 py-1 rounded-lg border border-[#C36428]/40">
                Hoy: $0 USD
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
