import React from 'react';

export const FactoryWarranty: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden" data-purpose="factory-warranty" id="garantia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#C36428]/20 via-[#1B204A] to-[#0B0E17] border-2 border-[#C36428]/60 rounded-3xl p-8 sm:p-12 relative shadow-glow-orange">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C36428]/30 text-amber-300 text-xs font-bold rounded uppercase">
                <i className="fa-solid fa-stamp"></i> Certificación y Respaldo Oficial
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-montserrat">
                Garantía Directa de Fábrica sin Intermediarios
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Todos nuestros componentes de seguridad electrónica, conmutación y telecomunicaciones son suministrados mediante canales directos autorizados. Usted recibe certificados de autenticidad, garantías extendidas de 2 a 5 años y reemplazo express in situ ante cualquier incidente de hardware.
              </p>
              
              {/* Check bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-shield-check text-[#C36428]"></i>
                  <span>Equipos 100% Originales Homologados</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-shield-check text-[#C36428]"></i>
                  <span>Protocolo de Pruebas FAT / SAT</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-shield-check text-[#C36428]"></i>
                  <span>Reemplazo express en caso de RMA</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-shield-check text-[#C36428]"></i>
                  <span>Técnicos certificados por el fabricante</span>
                </div>
              </div>
            </div>

            {/* Warranty Badge visual */}
            <div className="flex flex-col items-center justify-center p-6 bg-[#1B204A]/90 rounded-2xl border border-[#C36428]/40 text-center">
              <div className="w-20 h-20 rounded-full bg-[#C36428]/20 border-2 border-[#C36428] flex items-center justify-center text-[#C36428] text-3xl mb-3 shadow-lg">
                <i className="fa-solid fa-award"></i>
              </div>
              <h3 className="font-montserrat font-bold text-white text-xl">GARANTÍA TOTAL</h3>
              <p className="text-xs text-slate-300 mt-1">Cero riesgo para su inversión patrimonial</p>
              <div className="mt-4 px-4 py-2 bg-[#C36428] text-white font-montserrat font-bold text-xs uppercase rounded-lg">
                Respaldo Contractual
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
