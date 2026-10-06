import React from 'react';
import { LogoNexus } from './LogoNexus';

export const Footer: React.FC = () => {
  return (
    <>
      {/* BEGIN: Section 16 - Deep Dive & Compromiso de Marca */}
      <section className="py-20 bg-[#1B204A] relative overflow-hidden" data-purpose="brand-statement">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Subtle Brand Icon Watermark in Center */}
          <div className="mx-auto mb-6 inline-block">
            <LogoNexus imgClassName="h-14 w-auto object-contain" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-montserrat mb-4">
            Conectamos Tecnología, Protegemos lo que Importa
          </h2>

          <p className="text-slate-300 text-base max-w-3xl mx-auto leading-relaxed">
            En Nexus Protect concebimos la infraestructura tecnológica no como cables y cámaras independientes, sino como el sistema nervioso central que salvaguarda el patrimonio, las personas y las operaciones de su empresa. Nuestra meta es otorgarle certeza operativa total: sin fallas, sin vacíos de garantía y con una visión orientada a la máxima resiliencia técnica.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-[#81B838] font-semibold">
            <span>• Integración Sin Fricciones</span>
            <span>• Rendimiento Certificado</span>
            <span>• Calidad de Grado Industrial</span>
          </div>

        </div>
      </section>
      {/* END: Section 16 - Deep Dive & Compromiso de Marca */}

      {/* BEGIN: Section 17 & 18 - Gran CTA de Cierre y Footer Corporativo */}
      <footer className="bg-[#0B0E17] border-t border-white/10 pt-16 pb-12" data-purpose="corporate-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Footer Content Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            {/* Columna 1: Marca y descripción */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <LogoNexus imgClassName="h-8 w-auto object-contain" />
                <span className="font-montserrat font-bold text-lg text-white">
                  NEXUS <span className="text-[#81B838]">PROTECT</span>
                </span>
              </div>
              
              <p className="text-xs text-slate-400 leading-relaxed">
                Líderes en integración de soluciones de Seguridad Electrónica, Circuitos Cerrados de TV, Control de Acceso, Detección de Incendio y Cableado Estructurado de alta precisión.
              </p>

              <div className="flex items-center gap-3 mt-4">
                <a
                  aria-label="Facebook Nexus Protect"
                  className="text-[#00d2ff] border border-[#00d2ff]/40 bg-[#00d2ff]/10 hover:bg-[#00d2ff] hover:text-black hover:shadow-[0_0_15px_#00d2ff] transition-all p-2.5 rounded-xl flex items-center justify-center"
                  href="https://facebook.com/nexus-protect"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  aria-label="Instagram Nexus Protect"
                  className="text-[#ff2a85] border border-[#ff2a85]/40 bg-[#ff2a85]/10 hover:bg-[#ff2a85] hover:text-white hover:shadow-[0_0_15px_#ff2a85] transition-all p-2.5 rounded-xl flex items-center justify-center"
                  href="https://instagram.com/nexus-protect"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  aria-label="WhatsApp Nexus Protect"
                  className="text-[#25D366] border border-[#25D366]/40 bg-[#25D366]/10 hover:bg-[#25D366] hover:text-black hover:shadow-[0_0_15px_#25D366] transition-all p-2.5 rounded-xl flex items-center justify-center"
                  href="https://wa.me/+573195992929"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Columna 2: Especialidades */}
            <div>
              <h4 className="font-montserrat font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-[#81B838] pl-2">
                Especialidades
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a className="hover:text-white transition-colors" href="#metodologia">CCTV &amp; Telemetría Perimetral</a></li>
                <li><a className="hover:text-white transition-colors" href="#metodologia">Control de Acceso Biométrico</a></li>
                <li><a className="hover:text-white transition-colors" href="#metodologia">Detección y Alarma de Incendios</a></li>
                <li><a className="hover:text-white transition-colors" href="#metodologia">Fibra Óptica &amp; Enlaces Dedicados</a></li>
                <li><a className="hover:text-white transition-colors" href="#metodologia">Centros de Control y Video Wall</a></li>
              </ul>
            </div>

            {/* Columna 3: Enlaces Rápidos */}
            <div>
              <h4 className="font-montserrat font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-[#3A9D5D] pl-2">
                Navegación
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a className="hover:text-white transition-colors" href="#hero">Inicio</a></li>
                <li><a className="hover:text-white transition-colors" href="#problema">El Reto de Múltiples Proveedores</a></li>
                <li><a className="hover:text-white transition-colors" href="#garantia">Garantía Directa de Fábrica</a></li>
                <li><a className="hover:text-white transition-colors" href="#comparativa">Tabla Comparativa</a></li>
                <li><a className="hover:text-white transition-colors" href="#faq">Preguntas Frecuentes</a></li>
              </ul>
            </div>

            {/* Columna 4: Centro de Asistencia & Horarios */}
            <div>
              <h4 className="font-montserrat font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-[#C36428] pl-2">
                Contacto Directo
              </h4>
              <ul className="space-y-3 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-location-dot text-[#81B838] mt-0.5"></i>
                  <span>Parque Corporativo de Alta Tecnología, Piso 8.</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-phone text-[#81B838]"></i>
                  <span>Línea Corporativa: (800) 555-NEXUS</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-clock text-[#81B838]"></i>
                  <span>Monitoreo &amp; NOC: Activo 24/7/365</span>
                </li>
                <li className="pt-2">
                  <a
                    className="inline-block px-4 py-2 rounded-lg text-white font-montserrat font-bold text-xs transition-colors"
                    href="#formulario-contacto"
                    style={{
                      background: 'linear-gradient(135deg, rgb(255, 122, 24) 0%, rgb(255, 82, 0) 100%)',
                      color: 'rgb(255, 255, 255)',
                      borderColor: 'rgb(255, 140, 66)',
                      boxShadow: 'rgba(255, 106, 0, 0.6) 0px 0px 16px, rgba(255, 255, 255, 0.4) 0px 1px 1px inset',
                      textShadow: 'rgba(0, 0, 0, 0.5) 0px 1px 2px'
                    }}
                  >
                    Contactar Asesor Senior
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright & Legal */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 Nexus Protect (Seguridad Electrónica | Telecomunicaciones). Todos los derechos reservados.</p>
            <div className="flex items-center space-x-6">
              <a className="hover:text-slate-400 transition-colors" href="#">Política de Privacidad</a>
              <a className="hover:text-slate-400 transition-colors" href="#">Términos de Servicio</a>
              <a className="hover:text-slate-400 transition-colors" href="#">Acuerdo de SLA</a>
            </div>
          </div>

        </div>
      </footer>
      {/* END: Section 17 & 18 - Gran CTA de Cierre y Footer Corporativo */}
    </>
  );
};
