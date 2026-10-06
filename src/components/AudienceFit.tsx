import React from 'react';

export const AudienceFit: React.FC = () => {
  return (
    <section className="py-16 bg-[#0B0E17] border-b border-white/5" data-purpose="audience-filter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl font-montserrat font-bold uppercase tracking-wider text-slate-400 mb-8">
          ¿Para quién es (y para quién NO) Nexus Protect?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* NO ES PARA */}
          <div className="p-6 rounded-xl bg-red-950/20 border border-red-500/20">
            <h3 className="font-montserrat font-bold text-red-400 flex items-center gap-2 mb-3">
              <i className="fa-solid fa-ban"></i> NO es para usted si:
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>• Busca soluciones domésticas temporales tipo "hágalo usted mismo" (DIY).</li>
              <li>• Prefiere comprar equipo de segunda mano sin soporte técnico oficial ni repuestos.</li>
              <li>• Está dispuesto a tolerar caídas constantes de red y retrasos continuos en soporte.</li>
              <li>• Solo busca el precio más barato sin importar la seguridad y escalabilidad técnica.</li>
            </ul>
          </div>

          {/* SÍ ES PARA */}
          <div className="p-6 rounded-xl bg-[#3A9D5D]/10 border border-[#3A9D5D]/30">
            <h3 className="font-montserrat font-bold text-[#81B838] flex items-center gap-2 mb-3">
              <i className="fa-solid fa-circle-check"></i> SÍ es para usted si:
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-200">
              <li>• Administra una empresa, parque industrial, centro de datos o edificio corporativo.</li>
              <li>• Valora la entrega de planos As-Built, memoria técnica y cableado certificado.</li>
              <li>• Requiere un socio tecnológico con SLA estricto y capacidad operativa comprobable.</li>
              <li>• Exige cumplimiento cabal de normativas vigentes y garantías de fábrica.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
