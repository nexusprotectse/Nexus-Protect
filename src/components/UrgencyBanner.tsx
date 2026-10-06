import React from 'react';

export const UrgencyBanner: React.FC = () => {
  return (
    <section className="bg-[#C36428] py-6 text-white text-center font-montserrat" data-purpose="urgency-banner">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-2 text-xl font-extrabold uppercase">
          <i className="fa-solid fa-triangle-exclamation animate-bounce"></i>
          <span>Cupos Limitados para el Mes en Curso:</span>
        </div>
        <p className="text-sm font-medium text-amber-100">
          Solo realizamos <strong>5 Auditorías Técnicas y Relevamientos Gratuitos</strong> al mes para garantizar la máxima rigurosidad técnica. (Quedan 2 disponibles).
        </p>
      </div>
    </section>
  );
};
