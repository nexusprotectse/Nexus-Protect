import React from 'react';

export const CriticalContinuity: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" data-purpose="key-benefits" id="soluciones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-montserrat">
            Diseñado para la Continuidad Crítica de su Negocio
          </h2>
          <p className="text-slate-600 mt-4 text-base">
            Elimine los cuellos de botella con ingeniería precisa pensada para plantas industriales, corporativos y complejos de alto valor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Beneficio 1 */}
          <div className="p-6 rounded-2xl bg-[#1B204A] text-white border-2 border-[#3A9D5D]/30 shadow-lg flex flex-col items-start hover:border-[#3A9D5D] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-[#3A9D5D]/10 border border-[#3A9D5D]/30 flex items-center justify-center text-2xl text-[#3A9D5D] mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-users-slash"></i>
            </div>
            <h3 className="font-montserrat font-bold text-white text-lg mb-2">
              Cero Conflictos de Contratistas
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Un solo equipo de ingeniería realiza el diseño, canalización, cableado y configuración. Cero fricciones entre especialidades.
            </p>
          </div>

          {/* Beneficio 2 */}
          <div className="p-6 rounded-2xl bg-[#1B204A] text-white border-2 border-[#81B838]/30 shadow-lg flex flex-col items-start hover:border-[#81B838] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-[#81B838]/10 border border-[#81B838]/30 flex items-center justify-center text-2xl text-[#81B838] mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-puzzle-piece"></i>
            </div>
            <h3 className="font-montserrat font-bold text-white text-lg mb-2">
              100% Compatibilidad Garantizada
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Todos los protocolos de comunicación están homologados para dialogar en un único dashboard de seguridad y gestión.
            </p>
          </div>

          {/* Beneficio 3 */}
          <div className="p-6 rounded-2xl bg-[#1B204A] text-white border-2 border-[#C36428]/40 shadow-lg flex flex-col items-start hover:border-[#C36428] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-[#C36428]/10 border border-[#C36428]/30 flex items-center justify-center text-2xl text-[#C36428] mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-shield-virus"></i>
            </div>
            <h3 className="font-montserrat font-bold text-white text-lg mb-2">
              Operación Continua 24/7/365
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Arquitecturas tolerantes a fallos con fuentes redundantes (UPS), fibra en anillo y servidores en espejo de respaldo inmediato.
            </p>
          </div>

          {/* Beneficio 4 */}
          <div className="p-6 rounded-2xl bg-[#1B204A] text-white border-2 border-[#4D2C5E]/40 shadow-lg flex flex-col items-start hover:border-[#4D2C5E] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-[#4D2C5E]/20 border border-[#4D2C5E]/40 flex items-center justify-center text-2xl text-[#4D2C5E] mb-4 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-file-contract"></i>
            </div>
            <h3 className="font-montserrat font-bold text-lg mb-2 text-white">
              Soporte Técnico Centralizado
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Un único número de emergencia y un sistema de tickets exclusivo con tiempos de respuesta SLA garantizados por escrito.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
