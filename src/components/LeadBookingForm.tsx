import React, { useState } from 'react';
import { LogoNexus } from './LogoNexus';

export const LeadBookingForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [projectType, setProjectType] = useState('integral');

  const [submitted, setSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedTicket = `NX-AUDIT-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketNumber(generatedTicket);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Nexus Protect, he agendado la auditoría técnica #${ticketNumber}. Mi nombre es ${fullName} de la empresa ${companyName}. Requerimiento: ${projectType}, Ciudad: ${location}.`
  );

  return (
    <section
      id="formulario-contacto"
      data-purpose="lead-capture-form"
      className="py-24 relative tech-grid-bg bg-[#0B0E17]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#1B204A] border-2 border-[#81B838]/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="mx-auto mb-4 inline-block">
              <LogoNexus imgClassName="h-12 w-auto object-contain" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-montserrat">
              Agende su Auditoría Técnica Inicial
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Complete el formulario a continuación. Un ingeniero especialista se pondrá en contacto dentro de las próximas 24 horas hábiles.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Input: Nombre */}
              <div>
                <label
                  className="block text-xs font-montserrat font-bold text-slate-300 uppercase tracking-wider mb-2"
                  htmlFor="full-name"
                >
                  Nombre Completo *
                </label>
                <input
                  id="full-name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ej. Ing. Roberto Mendoza"
                  className="w-full bg-[#242B63]/70 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-[#81B838] focus:ring-1 focus:ring-[#81B838] outline-none text-sm transition-all"
                />
              </div>

              {/* Input: Empresa / Propiedad */}
              <div>
                <label
                  className="block text-xs font-montserrat font-bold text-slate-300 uppercase tracking-wider mb-2"
                  htmlFor="company-name"
                >
                  Empresa o Complejo Residencial *
                </label>
                <input
                  id="company-name"
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Ej. Logística Global S.A."
                  className="w-full bg-[#242B63]/70 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-[#81B838] focus:ring-1 focus:ring-[#81B838] outline-none text-sm transition-all"
                />
              </div>

              {/* Input: Teléfono / WhatsApp */}
              <div>
                <label
                  className="block text-xs font-montserrat font-bold text-slate-300 uppercase tracking-wider mb-2"
                  htmlFor="phone-number"
                >
                  Teléfono / WhatsApp de Contacto *
                </label>
                <input
                  id="phone-number"
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+57 300 000 0000"
                  className="w-full bg-[#242B63]/70 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-[#81B838] focus:ring-1 focus:ring-[#81B838] outline-none text-sm transition-all"
                />
              </div>

              {/* Input: Ubicación */}
              <div>
                <label
                  className="block text-xs font-montserrat font-bold text-slate-300 uppercase tracking-wider mb-2"
                  htmlFor="location"
                >
                  Ciudad / Ubicación del Proyecto *
                </label>
                <input
                  id="location"
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ej. Bogotá D.C. / Parque Industrial"
                  className="w-full bg-[#242B63]/70 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-[#81B838] focus:ring-1 focus:ring-[#81B838] outline-none text-sm transition-all"
                />
              </div>

            </div>

            {/* Interés del proyecto */}
            <div>
              <label
                className="block text-xs font-montserrat font-bold text-slate-300 uppercase tracking-wider mb-2"
                htmlFor="project-type"
              >
                Requerimiento Principal
              </label>
              <select
                id="project-type"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full bg-[#242B63]/70 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-[#81B838] focus:ring-1 focus:ring-[#81B838] outline-none text-sm transition-all"
              >
                <option value="integral">
                  Proyecto Integral | Seguridad Electrónica (LVS + Redes + CCTV)
                </option>
                <option value="cctv">Videovigilancia IP y Control de Acceso</option>
                <option value="redes">Cableado Estructurado y Fibra Óptica</option>
                <option value="incendio">Detección y Alarma de Incendios</option>
                <option value="monitoreo">Automatización de Centro de Monitoreo</option>
              </select>
            </div>

            {/* Botón de Envío */}
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl font-montserrat font-extrabold text-base uppercase tracking-wider text-white hover:bg-white hover:text-[#1B204A] hover:shadow-glow-orange transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, rgb(255, 140, 66) 0%, rgb(255, 85, 0) 45%, rgb(255, 119, 34) 80%, rgb(255, 59, 0) 100%)',
                boxShadow: 'rgba(255, 106, 0, 0.8) 0px 0px 25px, rgba(255, 70, 0, 0.45) 0px 0px 45px, rgba(255, 255, 255, 0.5) 0px 1px 2px inset',
                textShadow: 'rgba(0, 0, 0, 0.5) 0px 1px 3px'
              }}
            >
              <i className="fa-solid fa-paper-plane"></i>
              Solicitar Relevamiento y Auditoría Prioritaria
            </button>

            {/* Privacidad y Confidencialidad */}
            <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-2">
              <i className="fa-solid fa-lock text-[#81B838]"></i>
              Sus datos están 100% protegidos bajo acuerdo estricto de confidencialidad NDA. Cero spam comercial.
            </p>
          </form>

        </div>
      </div>

      {/* Confirmation Modal */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#1B204A] border-2 border-[#81B838] rounded-2xl max-w-lg w-full p-6 sm:p-8 text-center shadow-2xl relative">
            <div className="w-16 h-16 rounded-full bg-[#81B838]/20 border-2 border-[#81B838] flex items-center justify-center text-[#81B838] mx-auto mb-4 text-3xl">
              <i className="fa-solid fa-circle-check"></i>
            </div>

            <span className="text-[11px] font-bold font-mono tracking-wider text-[#81B838] uppercase">
              TICKET PRIORITARIO #{ticketNumber}
            </span>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1 mb-2 font-montserrat">
              ¡Auditoría Técnica Agendada!
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Solicitud recibida para <strong>{companyName}</strong>. Un Project Manager especialista de Nexus Protect se pondrá en contacto dentro de las próximas 24 horas hábiles.
            </p>

            <div className="space-y-3">
              <a
                href={`https://wa.me/+573195992929?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-montserrat font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <i className="fa-brands fa-whatsapp text-base"></i>
                <span>Confirmar Inmediatamente vía WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Cerrar Confirmación
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
