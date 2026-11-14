import React, { useState } from 'react';
import { HistoryEntry } from '../types';
import { getWorkoutHistory, exportHistoryCSV } from '../utils/storage';
import { 
  History, 
  Calendar, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Download
} from 'lucide-react';

export const HistoryTab: React.FC = () => {
  const [history, setHistory] = useState<HistoryEntry[]>(getWorkoutHistory());
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const totalVolumeAll = history.reduce((sum, h) => sum + h.totalVolumeKg, 0);
  const totalSetsAll = history.reduce((sum, h) => sum + h.setsCount, 0);

  const handleDownloadCSV = () => {
    const csv = exportHistoryCSV();
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `meu-treino-historico-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand">
            Registro
          </span>
          <h1 className="text-xl font-black text-white">Histórico de Sessões</h1>
          <p className="text-xs text-gray-400">Suas cargas, repetições e volume total</p>
        </div>

        {history.length > 0 && (
          <button
            onClick={handleDownloadCSV}
            className="px-3 py-1.5 rounded-xl bg-card-subtle hover:bg-elevated text-brand text-xs font-semibold flex items-center gap-1.5 border border-app transition-colors"
            title="Exportar dados para Excel / CSV"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Exportar</span> Planilha
          </button>
        )}
      </div>

      {/* Estatísticas Rápidas de Resumo */}
      {history.length > 0 && (
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="p-3 rounded-2xl bg-card border border-app text-center">
            <span className="text-gray-400 text-[10px] block uppercase font-bold">Treinos</span>
            <span className="text-base font-black text-white">{history.length}</span>
          </div>
          <div className="p-3 rounded-2xl bg-card border border-app text-center">
            <span className="text-gray-400 text-[10px] block uppercase font-bold">Séries</span>
            <span className="text-base font-black text-brand">{totalSetsAll}</span>
          </div>
          <div className="p-3 rounded-2xl bg-card border border-app text-center">
            <span className="text-gray-400 text-[10px] block uppercase font-bold">Tonelagem Total</span>
            <span className="text-base font-black text-white">
              {Math.round(totalVolumeAll / 1000)} <small className="text-[10px] text-gray-400">ton</small>
            </span>
          </div>
        </div>
      )}

      {/* Lista do Histórico */}
      <div className="space-y-3">
        {history.length > 0 ? (
          history.map(entry => {
            const isExpanded = expandedId === entry.id;
            return (
              <div
                key={entry.id}
                className="bg-card border border-app rounded-2xl p-4 shadow-sm transition-all"
              >
                <div 
                  className="cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : entry.id)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-0.5">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-brand" />
                          {entry.dateStr}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-brand" />
                          {entry.durationMinutes} min
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white">{entry.name}</h3>
                      <p className="text-[11px] text-gray-400">{entry.plan}</p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-black text-brand block">
                        {entry.totalVolumeKg.toLocaleString('pt-BR')} kg
                      </span>
                      <span className="text-[10px] text-gray-400">
                        {entry.setsCount} séries
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-app flex items-center justify-between text-xs text-brand">
                    <span className="font-semibold text-[11px]">
                      {isExpanded ? 'Ocultar séries e cargas' : 'Ver séries, repetições e cargas'}
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>

                {/* Detalhamento Expandido (Exercício a Exercício) */}
                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-app space-y-3 animate-in fade-in">
                    {entry.exercises.map((ex, exIdx) => (
                      <div key={exIdx} className="bg-card-subtle p-3 rounded-xl border border-app space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-white">
                            {ex.name}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-subtle text-brand">
                            Máx: {ex.maxWeight} kg
                          </span>
                        </div>

                        {/* Linhas das séries */}
                        <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5 text-center text-xs">
                          {ex.series.map((s, sIdx) => (
                            <div 
                              key={sIdx}
                              className="p-1.5 rounded-lg bg-card-subtle border border-app"
                            >
                              <span className="text-[9px] text-gray-400 block">#{s.setNumber}</span>
                              <span className="font-bold text-white">{s.weight}kg</span>
                              <span className="text-[10px] text-gray-400 block">{s.reps} reps</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="bg-card border border-app rounded-2xl p-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-subtle text-brand flex items-center justify-center mx-auto">
              <History className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Nenhum treino finalizado ainda</h3>
              <p className="text-xs text-gray-400 max-w-xs mx-auto mt-1">
                Conclua sua primeira sessão na aba Treinos para registrar automaticamente suas cargas e evolução.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
