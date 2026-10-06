import React, { useState } from 'react';

const faqs = [
  {
    question: '¿Cuánto tiempo toma la instalación completa de un proyecto corporativo?',
    answer: 'El tiempo depende del alcance en metros cuadrados y número de nodos. Un proyecto promedio de 50 a 150 nodos de red con CCTV y control de acceso toma entre 2 y 4 semanas hábiles. Presentamos un cronograma formal Gantt previo al inicio y garantizamos la fecha de entrega bajo contrato.'
  },
  {
    question: '¿Pueden integrarse con equipos o cableado que ya tenemos instalado?',
    answer: 'Sí. Durante la auditoría inicial diagnosticamos el estado de su infraestructura previa. Si sus switches, cableado o cámaras cumplen los estándares de rendimiento y seguridad, los incorporamos al nuevo sistema centralizado para proteger su inversión previa.'
  },
  {
    question: '¿Qué certificaciones técnicas poseen sus ingenieros e instaladores?',
    answer: 'Nuestro equipo cuenta con certificaciones directas de fabricantes líderes en telecomunicaciones y videovigilancia IP, certificación en Normativa NFPA 72 para incendios, y técnicos avalados en pruebas Fluke Networks para cobre y fibra óptica.'
  },
  {
    question: '¿Cómo funciona el soporte posventa en caso de una falla crítica fuera de horario?',
    answer: 'Contamos con una mesa de ayuda 24/7. Dependiendo del nivel de servicio SLA convenido, disponemos de tiempos de respuesta presencial en sitio en menos de 2 a 4 horas para contingencias graves que afecten la seguridad perimetral o la continuidad del enlace de datos.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200" data-purpose="faq-accordion" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase text-[#3A9D5D] tracking-widest font-montserrat">
            Claridad Total
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-montserrat mt-2">
            Preguntas Frecuentes de Directores y Líderes de TI
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left font-montserrat font-bold text-slate-900 flex justify-between items-center hover:text-[#3A9D5D] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <i
                    className={`fa-solid fa-chevron-down text-[#3A9D5D] transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  ></i>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
