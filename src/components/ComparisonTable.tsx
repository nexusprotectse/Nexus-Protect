import React from 'react';

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0E17]" data-purpose="comparison-table" id="comparativa">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase text-[#81B838] tracking-widest font-montserrat">
            Tome una Decisión Informada
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-montserrat mt-2">
            Proveedores Informales vs. Solución Nexus Protect
          </h3>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl bg-[#1B204A]/30">
          <table className="w-full text-left border-collapse text-sm min-w-[620px]">
            <thead>
              <tr className="border-b border-white/10 bg-[#1B204A]/80">
                <th className="py-4 px-6 text-slate-300 font-montserrat font-bold text-sm">
                  Factor Crítico
                </th>
                <th className="py-4 px-6 text-red-400 font-montserrat font-bold text-sm">
                  Proveedores Informales Dispersos
                </th>
                <th className="py-4 px-6 text-[#81B838] font-montserrat font-extrabold text-sm bg-[#242B63]/50">
                  Nexus Protect | Seguridad Electrónica
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr>
                <td className="py-4 px-6 font-semibold text-white">Responsabilidad del Proyecto</td>
                <td className="py-4 px-6 text-slate-400">
                  <i className="fa-solid fa-xmark text-red-400 mr-2"></i> Fragmentada entre 3 y 5 contratistas
                </td>
                <td className="py-4 px-6 font-bold text-white bg-[#242B63]/30">
                  <i className="fa-solid fa-check text-[#81B838] mr-2"></i> 100% Centralizada en un solo PM
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-white">Certificación de Cableado / Fibra</td>
                <td className="py-4 px-6 text-slate-400">
                  <i className="fa-solid fa-xmark text-red-400 mr-2"></i> Pruebas básicas con probador de continuidad
                </td>
                <td className="py-4 px-6 font-bold text-white bg-[#242B63]/30">
                  <i className="fa-solid fa-check text-[#81B838] mr-2"></i> Reporte de certificación con Fluke Networks
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-white">Garantía de Hardware</td>
                <td className="py-4 px-6 text-slate-400">
                  <i className="fa-solid fa-xmark text-red-400 mr-2"></i> Trámite tardado con distribuidores terceros
                </td>
                <td className="py-4 px-6 font-bold text-white bg-[#242B63]/30">
                  <i className="fa-solid fa-check text-[#81B838] mr-2"></i> Respaldo directo de fábrica y reemplazo express
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-white">Documentación As-Built</td>
                <td className="py-4 px-6 text-slate-400">
                  <i className="fa-solid fa-xmark text-red-400 mr-2"></i> Inexistente o bocetos a mano alzada
                </td>
                <td className="py-4 px-6 font-bold text-white bg-[#242B63]/30">
                  <i className="fa-solid fa-check text-[#81B838] mr-2"></i> Dossier de ingeniería completo en AutoCAD / PDF
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-white">Integración Multimarca</td>
                <td className="py-4 px-6 text-slate-400">
                  <i className="fa-solid fa-xmark text-red-400 mr-2"></i> Sistemas aislados sin comunicación entre sí
                </td>
                <td className="py-4 px-6 font-bold text-white bg-[#242B63]/30">
                  <i className="fa-solid fa-check text-[#81B838] mr-2"></i> Plataforma convergente CCTV, Acceso e Incendio
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-semibold text-white">Tiempos de Implementación</td>
                <td className="py-4 px-6 text-slate-400">
                  <i className="fa-solid fa-xmark text-red-400 mr-2"></i> Frecuentes retrasos por falta de coordinación
                </td>
                <td className="py-4 px-6 font-bold text-white bg-[#242B63]/30">
                  <i className="fa-solid fa-check text-[#81B838] mr-2"></i> Cronograma estricto bajo contrato
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
