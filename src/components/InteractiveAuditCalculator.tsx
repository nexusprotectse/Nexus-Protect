import React, { useState } from 'react';
import { X, Cpu, HardDrive, Network, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface InteractiveAuditCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (specSummary: string) => void;
}

export const InteractiveAuditCalculator: React.FC<InteractiveAuditCalculatorProps> = ({
  isOpen,
  onClose,
  onSelectPlan
}) => {
  const [propertyType, setPropertyType] = useState('industrial');
  const [cameraCount, setCameraCount] = useState(24);
  const [accessDoors, setAccessDoors] = useState(4);
  const [includeFire, setIncludeFire] = useState(true);
  const [retentionDays, setRetentionDays] = useState(30);

  if (!isOpen) return null;

  // Calculators
  const estimatedStorageTB = Math.ceil((cameraCount * 12 * retentionDays) / 1000);
  const flukepoints = cameraCount + accessDoors * 2 + (includeFire ? 8 : 0);
  const estimatedDays = Math.max(6, Math.ceil(flukepoints / 4));
  const recommendedTrunk = flukepoints > 40 ? 'Fibra Óptica 10G OM4' : 'Cobre Cat 6A U/FTP';

  const handleApplyToBooking = () => {
    const summary = `${cameraCount} Cámaras IP 4K + ${accessDoors} Accesos + ${flukepoints} Puntos Certificados (${propertyType})`;
    onSelectPlan(summary);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#171b2a] border border-[#81b838]/50 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase text-[#81b838] mb-1">
          <Cpu className="w-3.5 h-3.5 text-[#81b838]" />
          <span>HERRAMIENTA DE DIMENSIONAMIENTO LVS B2B</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 font-['Montserrat']">
          Calculador Técnico de Dimensionamiento
        </h3>

        <p className="text-xs text-[#dfe1f7]/80 leading-relaxed mb-6">
          Estime la capacidad de almacenamiento, puntos de cableado Fluke y troncales de red para su instalación en 3 pasos:
        </p>

        {/* Inputs */}
        <div className="space-y-5 mb-8">
          
          {/* Property Type */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#dfe1f7]/70 mb-2">
              Tipo de Infraestructura
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'industrial', label: 'Planta / Bodega' },
                { id: 'retail', label: 'Centro Comercial' },
                { id: 'corporate', label: 'Edificio Oficinas' },
                { id: 'residential', label: 'Condominio' }
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setPropertyType(t.id)}
                  className={`py-2 px-3 rounded text-xs font-semibold border transition-all text-center ${
                    propertyType === t.id
                      ? 'bg-[#81b838] text-[#090d1c] border-[#81b838]'
                      : 'bg-[#0f1322] text-[#dfe1f7]/80 border-white/10 hover:border-white/30'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Camera Count Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-bold mb-1">
              <span className="text-[#dfe1f7]/70 uppercase">Cámaras 4K Requeridas:</span>
              <span className="text-[#81b838] font-mono font-bold text-sm">{cameraCount} puntos</span>
            </div>
            <input
              type="range"
              min="4"
              max="128"
              step="4"
              value={cameraCount}
              onChange={(e) => setCameraCount(Number(e.target.value))}
              className="w-full accent-[#81b838] cursor-pointer"
            />
          </div>

          {/* Access Doors Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-bold mb-1">
              <span className="text-[#dfe1f7]/70 uppercase">Puntos de Acceso / Torniquetes:</span>
              <span className="text-[#81b838] font-mono font-bold text-sm">{accessDoors} accesos</span>
            </div>
            <input
              type="range"
              min="1"
              max="24"
              step="1"
              value={accessDoors}
              onChange={(e) => setAccessDoors(Number(e.target.value))}
              className="w-full accent-[#81b838] cursor-pointer"
            />
          </div>

          {/* Retention days & Fire options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#dfe1f7]/70 mb-1">
                Retención de Grabación
              </label>
              <select
                value={retentionDays}
                onChange={(e) => setRetentionDays(Number(e.target.value))}
                className="w-full py-2 px-3 rounded bg-[#0f1322] border border-white/10 text-white text-xs outline-none"
              >
                <option value={15}>15 Días (Operación estándar)</option>
                <option value={30}>30 Días (Norma corporativa recomendada)</option>
                <option value={60}>60 Días (Sector bancario / portuario)</option>
                <option value={90}>90 Días (Alta seguridad legal)</option>
              </select>
            </div>

            <div className="flex items-center gap-3 bg-[#0f1322] p-2.5 rounded border border-white/10">
              <input
                type="checkbox"
                id="fireCheckbox"
                checked={includeFire}
                onChange={(e) => setIncludeFire(e.target.checked)}
                className="w-4 h-4 accent-[#81b838] rounded cursor-pointer"
              />
              <label htmlFor="fireCheckbox" className="text-xs text-[#dfe1f7]/90 font-medium cursor-pointer">
                Incluir Subsistema de Incendios NFPA 72
              </label>
            </div>
          </div>

        </div>

        {/* Calculation Output Box */}
        <div className="p-4 rounded-xl bg-[#0f1322] border border-[#81b838]/30 space-y-3 mb-6">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#81b838]">
            DIAGNÓSTICO TÉCNICO ESTIMADO:
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            
            <div className="p-2.5 rounded bg-[#171b2a] border border-white/5">
              <HardDrive className="w-4 h-4 text-[#81b838] mx-auto mb-1" />
              <div className="text-sm font-extrabold text-white font-mono">{estimatedStorageTB} TB</div>
              <div className="text-[9px] uppercase tracking-wider text-[#dfe1f7]/60">Almacenamiento RAID</div>
            </div>

            <div className="p-2.5 rounded bg-[#171b2a] border border-white/5">
              <Network className="w-4 h-4 text-[#81b838] mx-auto mb-1" />
              <div className="text-sm font-extrabold text-white font-mono">{flukepoints} Puntos</div>
              <div className="text-[9px] uppercase tracking-wider text-[#dfe1f7]/60">Certificados Fluke</div>
            </div>

            <div className="p-2.5 rounded bg-[#171b2a] border border-white/5">
              <Clock className="w-4 h-4 text-[#f78c4d] mx-auto mb-1" />
              <div className="text-sm font-extrabold text-white font-mono">~{estimatedDays} Días</div>
              <div className="text-[9px] uppercase tracking-wider text-[#dfe1f7]/60">Tiempo Despliegue</div>
            </div>

            <div className="p-2.5 rounded bg-[#171b2a] border border-white/5">
              <ShieldCheck className="w-4 h-4 text-[#81b838] mx-auto mb-1" />
              <div className="text-[11px] font-bold text-[#81b838] truncate">{recommendedTrunk}</div>
              <div className="text-[9px] uppercase tracking-wider text-[#dfe1f7]/60">Troncal de Enlace</div>
            </div>

          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Cerrar
          </button>
          
          <button
            type="button"
            onClick={handleApplyToBooking}
            className="px-6 py-2.5 rounded bg-[#f78c4d] hover:bg-[#ff7a18] text-[#090d1c] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>Incluir en Mi Auditoría Gratuita</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
