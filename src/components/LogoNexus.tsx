import React from 'react';

interface LogoNexusProps {
  className?: string;
  imgClassName?: string;
  variant?: 'badge' | 'plain';
}

const LOGO_SRC = "https://lh3.googleusercontent.com/aida-public/AB6AXuDZLPMo9Ij051XEkXFcdhG8vKNM4A0GkNkibnvdiN8ByPK-4eVHvG0vHSbKbgzsb_mP4rnaP_DUkXnJDbBzp6TR1En9kmZztwFlYvO_Tgx7YdQ-_ST740P3dGyAUhdfNkk6yMf_e5vB15Z6sUrGvfdHZF1HGs9OEL1bA7ZoNs6Tv3EIwfCwEuniIA034POZojWxxL8ZeVJkjrFhQ6vJKy1zLMc11S_cNeC3cWURPzxMcFgTCE4O1Rwi9Q";

export const LogoNexus: React.FC<LogoNexusProps> = ({
  className = '',
  imgClassName = 'h-9 w-auto object-contain',
  variant = 'badge'
}) => {
  if (variant === 'badge') {
    return (
      <div
        className={`bg-white rounded-lg inline-flex items-center justify-center shadow-md ${className}`}
        style={{
          backgroundColor: '#FFFFFF',
          padding: '6px 12px',
          borderRadius: '8px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px'
        }}
      >
        <img
          src={LOGO_SRC}
          alt="Logo Nexus Protect"
          className={imgClassName}
          referrerPolicy="no-referrer"
          onError={(e) => {
            // High-fidelity SVG fallback if CDN blocked
            const target = e.currentTarget;
            target.style.display = 'none';
            if (target.parentElement) {
              target.parentElement.innerHTML = `
                <div class="flex items-center gap-1.5 font-montserrat font-extrabold text-[#1B204A] text-sm tracking-tight">
                  <svg width="24" height="24" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="8" stroke="#1B204A" stroke-width="4"/>
                    <circle cx="32" cy="10" r="4" fill="#3A9D5D"/>
                    <line x1="32" y1="14" x2="32" y2="24" stroke="#3A9D5D" stroke-width="3"/>
                    <circle cx="32" cy="54" r="4" fill="#3A9D5D"/>
                    <line x1="32" y1="40" x2="32" y2="50" stroke="#3A9D5D" stroke-width="3"/>
                    <circle cx="10" cy="32" r="4" fill="#1B204A"/>
                    <line x1="14" y1="32" x2="24" y2="32" stroke="#1B204A" stroke-width="3"/>
                    <circle cx="54" cy="32" r="4" fill="#1B204A"/>
                    <line x1="40" y1="32" x2="50" y2="32" stroke="#1B204A" stroke-width="3"/>
                    <circle cx="16" cy="16" r="3.5" fill="#81B838"/>
                    <line x1="19" y1="19" x2="26" y2="26" stroke="#81B838" stroke-width="3"/>
                    <circle cx="48" cy="48" r="3.5" fill="#81B838"/>
                    <line x1="38" y1="38" x2="45" y2="45" stroke="#81B838" stroke-width="3"/>
                    <circle cx="48" cy="16" r="3.5" fill="#81B838"/>
                    <line x1="45" y1="19" x2="38" y2="26" stroke="#81B838" stroke-width="3"/>
                    <circle cx="16" cy="48" r="3.5" fill="#81B838"/>
                    <line x1="19" y1="45" x2="26" y2="38" stroke="#81B838" stroke-width="3"/>
                  </svg>
                  <span>NEXUS</span>
                </div>
              `;
            }
          }}
        />
      </div>
    );
  }

  return (
    <img
      src={LOGO_SRC}
      alt="Logo Nexus Protect"
      className={imgClassName}
      referrerPolicy="no-referrer"
    />
  );
};
