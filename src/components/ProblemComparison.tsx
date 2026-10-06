import React from 'react';

export const ProblemComparison: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200" data-purpose="problem-agitation" id="problema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase text-[#C36428] tracking-widest mb-2 font-montserrat">
            El Talón de Aquiles de la Infraestructura
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-montserrat">
            El Caos de Contratar Múltiples Proveedores Desconectados
          </h3>
          <p className="text-slate-600 mt-4 text-base">
            Cuando un sistema falla, el instalador de cámaras culpa al de la red, y el de la red culpa al electricista. La fragmentación se traduce en costos desbordados y vulnerabilidades críticas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Column A: Traditional Messy Model */}
          <div className="bg-white border-2 border-red-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded mb-4">
                <i className="fa-solid fa-triangle-exclamation"></i> MODELO TRADICIONAL FRAGMENTADO
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-montserrat mb-4">
                La Pesadilla de la Falta de Responsabilidad
              </h4>
              <ul className="space-y-4 text-slate-700 text-sm">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-circle-xmark text-red-500 mt-1 shrink-0 text-base"></i>
                  <span>
                    <strong>Vacíos de Culpa:</strong> Nadie asume la garantía cuando ocurre un corte de señal o un fallo en el servidor de grabación.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-circle-xmark text-red-500 mt-1 shrink-0 text-base"></i>
                  <span>
                    <strong>Incompatibilidad de Protocolos:</strong> Dispositivos comprados en distintos distribuidores no se integran de manera nativa.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-circle-xmark text-red-500 mt-1 shrink-0 text-base"></i>
                  <span>
                    <strong>Retrasos en Obra:</strong> Cruce de agendas entre cableadores, instaladores de alarmas y técnicos de incendios.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-circle-xmark text-red-500 mt-1 shrink-0 text-base"></i>
                  <span>
                    <strong>Costos Ocultos y Múltiples Facturaciones:</strong> Pólizas de mantenimiento duplicadas y sobreprecios de intermediarios.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-red-100 text-xs text-red-600 font-medium italic">
              Resultado: Vulnerabilidad operativa constante y sobrecostos del 35% en correcciones post-entrega.
            </div>
          </div>

          {/* Column B: Nexus Protect Unified Solution */}
          <div className="bg-white border-2 border-[#3A9D5D]/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#3A9D5D]/10 rounded-full blur-2xl pointer-events-none"></div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3A9D5D]/20 text-[#3A9D5D] text-xs font-bold rounded mb-4">
                <i className="fa-solid fa-circle-check"></i> ENFOQUE NEXUS PROTECT
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-montserrat mb-4">
                Un Solo Proveedor. Control Absoluto.
              </h4>
              <ul className="space-y-4 text-slate-700 text-sm">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-[#3A9D5D] font-bold mt-1 shrink-0 text-base"></i>
                  <span>
                    <strong>Un Solo Interlocutor Técnico:</strong> Un único Project Manager asignado desde el diseño hasta la puesta en marcha final.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-[#3A9D5D] font-bold mt-1 shrink-0 text-base"></i>
                  <span>
                    <strong>Arquitectura 100% Homologada:</strong> Protocolos IP unificados, cableado estructurado certificado y servidores configurados de fábrica.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-[#3A9D5D] font-bold mt-1 shrink-0 text-base"></i>
                  <span>
                    <strong>Cronograma de Entrega Blindado:</strong> Cumplimiento de plazos con penalización contractual por retrasos imprevistos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-[#3A9D5D] font-bold mt-1 shrink-0 text-base"></i>
                  <span>
                    <strong>Garantía Integral Directa:</strong> Sin intermediarios, con repuestos originales y soporte Nivel 2 y 3 in situ.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-[#3A9D5D]/20 text-xs text-[#3A9D5D] font-bold">
              Resultado: Despliegue acelerado, 0 fricciones y una infraestructura lista para escalar por 10 años.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
