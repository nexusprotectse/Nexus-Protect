import React from 'react';

interface MidCtaBannerProps {
  onOpenAudit?: () => void;
}

export const MidCtaBanner: React.FC<MidCtaBannerProps> = ({ onOpenAudit }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#1B204A] to-[#121625] border-y border-[#81B838]/30 text-center relative overflow-hidden" data-purpose="primary-conversion-call">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#81B838]/20 text-[#81B838] text-xs font-bold rounded-full mb-4">
          <i className="fa-solid fa-bolt"></i> RESPUESTA TÉCNICA EN MENOS DE 24 HORAS
        </div>

        <h2 className="text-3xl sm:text-4xl font-black font-montserrat text-white mb-4">
          ¿Tiene un proyecto de seguridad o telecomunicaciones en puerta?
        </h2>

        <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8">
          Nuestros ingenieros analizan los planos de sus instalaciones y le entregan una propuesta técnica y económica optimizada sin compromiso.
        </p>

        <a
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-montserrat font-extrabold text-white hover:bg-white hover:text-[#1B204A] hover:shadow-glow-orange transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          href="#formulario-contacto"
          onClick={onOpenAudit}
          style={{
            background: 'linear-gradient(135deg, rgb(255, 140, 66) 0%, rgb(255, 85, 0) 45%, rgb(255, 119, 34) 80%, rgb(255, 59, 0) 100%)',
            boxShadow: 'rgba(255, 106, 0, 0.8) 0px 0px 25px, rgba(255, 70, 0, 0.45) 0px 0px 45px, rgba(255, 255, 255, 0.5) 0px 1px 2px inset',
            textShadow: 'rgba(0, 0, 0, 0.5) 0px 1px 3px'
          }}
        >
          <i className="fa-solid fa-calendar-check"></i> Solicitar Relevamiento Técnico Ahora
        </a>

      </div>
    </section>
  );
};
