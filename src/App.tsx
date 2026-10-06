/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemComparison } from './components/ProblemComparison';
import { MethodologySolutions } from './components/MethodologySolutions';
import { CriticalContinuity } from './components/CriticalContinuity';
import { CaseStudies } from './components/CaseStudies';
import { FactoryWarranty } from './components/FactoryWarranty';
import { AudienceFit } from './components/AudienceFit';
import { ProjectDeliverables } from './components/ProjectDeliverables';
import { ComparisonTable } from './components/ComparisonTable';
import { MidCtaBanner } from './components/MidCtaBanner';
import { FaqSection } from './components/FaqSection';
import { UrgencyBanner } from './components/UrgencyBanner';
import { LeadBookingForm } from './components/LeadBookingForm';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';

export default function App() {
  const scrollToContact = () => {
    const contactElement = document.getElementById('formulario-contacto');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121625] text-slate-100 flex flex-col antialiased selection:bg-[#81B838] selection:text-[#1B204A]">
      
      {/* Top Fixed Sticky Navbar with Left Social Sidebar */}
      <Navbar onOpenAudit={scrollToContact} />

      {/* Main Page Flow - 100% matched to attached screen */}
      <main>
        {/* Section 2 - Hero Section de Alto Impacto */}
        <Hero onOpenAudit={scrollToContact} />

        {/* Section 3 - Intro & Problem Statement */}
        <ProblemComparison />

        {/* Section 4 - UVP Metodología Integrada LVS & Telemetría */}
        <MethodologySolutions />

        {/* Section 5 - Grid de Beneficios Clave */}
        <CriticalContinuity />

        {/* Section 6 - Prueba Social y Casos de Éxito Corporativo */}
        <CaseStudies />

        {/* Section 7 - Garantía de Fábrica Directa */}
        <FactoryWarranty />

        {/* Section 8 - Filtro de Audiencia */}
        <AudienceFit />

        {/* Section 9 & 10 - Deliverables Stack & Bonos Exclusivos */}
        <ProjectDeliverables />

        {/* Section 11 - Tabla Comparativa (Valor vs. Precio) */}
        <ComparisonTable />

        {/* Section 12 - Primer Gran CTA Centralizado */}
        <MidCtaBanner onOpenAudit={scrollToContact} />

        {/* Section 13 - FAQ Accordion Interactivo */}
        <FaqSection />

        {/* Section 14 - Banner de Escasez / Urgencia */}
        <UrgencyBanner />

        {/* Section 15 - Formulario de Captura de Alta Conversión */}
        <LeadBookingForm />
      </main>

      {/* Section 16, 17 & 18 - Gran CTA de Cierre y Footer Corporativo */}
      <Footer />

      {/* Floating 24/7 WhatsApp Bubble */}
      <FloatingWidgets />

    </div>
  );
}
