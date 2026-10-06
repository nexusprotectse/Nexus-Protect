import React from 'react';

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100 border-b border-slate-200" data-purpose="social-proof">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metrics Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16 pb-12 border-b border-slate-200">
          <div>
            <div className="font-montserrat font-extrabold text-4xl lg:text-5xl text-[#3A9D5D] mb-1">+240</div>
            <div className="text-xs uppercase tracking-wider text-slate-600 font-semibold">Proyectos Desplegados</div>
          </div>
          <div>
            <div className="font-montserrat font-extrabold text-4xl lg:text-5xl text-slate-900 mb-1">99.98%</div>
            <div className="text-xs uppercase tracking-wider text-slate-600 font-semibold">Disponibilidad de Red</div>
          </div>
          <div>
            <div className="font-montserrat font-extrabold text-4xl lg:text-5xl text-[#3A9D5D] mb-1">-40%</div>
            <div className="text-xs uppercase tracking-wider text-slate-600 font-semibold">Tiempos de Implementación</div>
          </div>
          <div>
            <div className="font-montserrat font-extrabold text-4xl lg:text-5xl text-[#C36428] mb-1">0 Fallas</div>
            <div className="text-xs uppercase tracking-wider text-slate-600 font-semibold">En Pruebas de Entrega</div>
          </div>
        </div>

        {/* Real Corporate Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase text-[#3A9D5D] tracking-widest font-montserrat">
            Resultados Comprobados En Terreno
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat mt-2">
            Casos de Éxito y Proyectos Desplegados
          </h3>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Conozca cómo transformamos la seguridad electrónica y telecomunicaciones en infraestructuras de alto impacto y misión crítica.
          </p>
        </div>

        {/* 3 Real Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Centro Comercial Ciudad del Puerto Mall */}
          <div className="rounded-2xl bg-[#1B204A] text-white border-2 border-[#C36428]/40 shadow-xl flex flex-col justify-between hover:border-[#C36428] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="w-full h-48 overflow-hidden bg-[#0B0E17]">
              <img
                alt="Centro Comercial Ciudad del Puerto Mall"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXyY50tgoeDg8uj4IcvmwkcEpn4DSEQvSkP-DB_UJx50ESDSc3mT3RzRkolVhYwYdWkR96rKg8ws0KTMSGWzZV9CivzKmeRlmXf9FpUXHrmoC7tIAKd9gpveVGTb9vC1kfZPeEV3pfVpnTVO4tlzIxL9aqc7wunVdpDOnFswioREmj3SumCbNBIUNTXgLbu5KHN4B8smkfxps0lUz8hLMSs4-eYubf-eKkJO4HzvelzVC7FuEn1y6jaA"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "/src/assets/images/project_mall_puerto_1791324767494.jpg";
                }}
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C36428]/20 text-[#C36428] text-xs font-bold uppercase tracking-wider border border-[#C36428]/30">
                    <i className="fa-solid fa-fire-extinguisher text-[10px]"></i> DETECCIÓN DE INCENDIOS
                  </span>
                  <span className="text-xs text-slate-300 font-medium flex items-center gap-1">
                    <i className="fa-solid fa-location-dot text-[#C36428]"></i> Soledad, Atlántico
                  </span>
                </div>
                <h4 className="font-montserrat font-bold text-white text-lg mb-2">
                  Centro Comercial Ciudad del Puerto Mall
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Despliegue de un sistema inteligente de detección temprana de humo, panel direccionable y sistema de evacuación para áreas comerciales de alto tráfico.
                </p>
              </div>
              <div className="p-3.5 bg-[#121625]/80 rounded-xl border border-[#C36428]/30">
                <div className="flex items-center gap-2 mb-1">
                  <i className="fa-solid fa-circle-check text-[#C36428] text-sm"></i>
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider font-montserrat">
                    Resultado Clave
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-200 leading-snug">
                  100% Cumplimiento de Normativa NFPA, NSR10 y tiempo de respuesta ante alertas de 3 segundos.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Agrupación Supermanzana Bochica 3 */}
          <div className="rounded-2xl bg-[#1B204A] text-white border-2 border-[#3A9D5D]/40 shadow-xl flex flex-col justify-between hover:border-[#3A9D5D] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="w-full h-48 overflow-hidden bg-[#0B0E17]">
              <img
                alt="Agrupación Supermanzana Bochica 3"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWFLXEEHWsvTNn2jOJcCJPMRyMVnVTN4h9nVRv6f9bUSieQS8aRs4bPK9PDlnAbBuJFhLJwBqQ7YJaNlXn9Tg0rCWzDwZB_aSpGxqSBSxKbiLPuPOsE6K5WjJD50oVbboINXHedGjbZmZ2mzLKm6BUKq4IfJWeeuY4pTwoDolDdQR0sAt6DGKpF9Lm4yfRwH9jnrGufC6fVEMgtqX_1jptC0pnNtWdRmp7I405vcv-RX9L3Vu8j5751w"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "/src/assets/images/project_residential_access_1791324777741.jpg";
                }}
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3A9D5D]/20 text-[#3A9D5D] text-xs font-bold uppercase tracking-wider border border-[#3A9D5D]/30">
                    <i className="fa-solid fa-fingerprint text-[10px]"></i> CONTROL DE ACCESOS
                  </span>
                  <span className="text-xs text-slate-300 font-medium flex items-center gap-1">
                    <i className="fa-solid fa-location-dot text-[#3A9D5D]"></i> Bogotá D.C.
                  </span>
                </div>
                <h4 className="font-montserrat font-bold text-white text-lg mb-2">
                  Agrupación Supermanzana Bochica 3
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Integración de control de acceso peatonal (Reconocimiento Facial) y vehicular automatizado con tecnología de Lectura de Placas Vehiculares y acceso de visitantes via Placa-Celular, para un complejo residencial de alta densidad.
                </p>
              </div>
              <div className="p-3.5 bg-[#121625]/80 rounded-xl border border-[#3A9D5D]/30">
                <div className="flex items-center gap-2 mb-1">
                  <i className="fa-solid fa-circle-check text-[#3A9D5D] text-sm"></i>
                  <span className="text-[11px] font-bold text-[#81B838] uppercase tracking-wider font-montserrat">
                    Resultado Clave
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-200 leading-snug">
                  Reducción del 85% en tiempos de espera en acceso a Bloques y auditoría de accesos en tiempo real.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Gimnasio Colombo Británico */}
          <div className="rounded-2xl bg-[#1B204A] text-white border-2 border-[#81B838]/40 shadow-xl flex flex-col justify-between hover:border-[#81B838] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="w-full h-48 overflow-hidden bg-[#0B0E17]">
              <img
                alt="Gimnasio Colombo Británico - GCB Arena"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp10-tV_vJATa0sVE0ek-0O6Nmb1_Ml99pDkEeWTrcNjUBr8Z2xia7TF6-2J3BVOECgp0CMroDKXzDJx9IkZkzysYWXIM1pCRQMebr2t9Z5AmbvUF2yiNLc-gVwir73KgEuRj3RQgQRTRAWt0zhN3dfhT9LlR0_0teAC7tMiTmCuFKPtN_5s9q5HnDls9-kfmbsN4zUT7UaYdgDF1Q-N5580wfBVvie_M3BJo_tSQaWEizT33OrbPgzg"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "/src/assets/images/project_corporate_facility_1791324786313.jpg";
                }}
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#242B63]/50 text-[#81B838] text-xs font-bold uppercase tracking-wider border border-[#81B838]/30">
                    <i className="fa-solid fa-video text-[10px]"></i> CCTV Y VIDEOVIGILANCIA
                  </span>
                  <span className="text-xs text-slate-300 font-medium flex items-center gap-1">
                    <i className="fa-solid fa-location-dot text-[#81B838]"></i> Bogotá D.C.
                  </span>
                </div>
                <h4 className="font-montserrat font-bold text-white text-lg mb-2">
                  Gimnasio Colombo Británico
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Implementación de cámaras IP 4K con analítica para detección comunal y perimetral y resguardo continuo de la comunidad educativa en zonas de servidumbre comunal.
                </p>
              </div>
              <div className="p-3.5 bg-[#121625]/80 rounded-xl border border-[#81B838]/30">
                <div className="flex items-center gap-2 mb-1">
                  <i className="fa-solid fa-circle-check text-[#3A9D5D] text-sm"></i>
                  <span className="text-[11px] font-bold text-[#81B838] uppercase tracking-wider font-montserrat">
                    Resultado Clave
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-200 leading-snug">
                  Cobertura del 100% del campus sin puntos ciegos y monitoreo inteligente 24/7.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
