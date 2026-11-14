import React, { useState } from 'react';
import { 
  getAppSettings, 
  saveAppSettings, 
  exportBackupJSON, 
  importBackupJSON 
} from '../utils/storage';
import { 
  playRestAlarm, 
  triggerHapticFeedback, 
  requestNotificationPermission,
  initAudioContext
} from '../utils/audioAlarm';
import { THEMES, applyTheme } from '../utils/theme';
import { 
  Palette, 
  Volume2, 
  Bell, 
  Download, 
  Upload, 
  Check 
} from 'lucide-react';

interface Props {
  onSettingsChanged: () => void;
}

export const SettingsTab: React.FC<Props> = ({ onSettingsChanged }) => {
  const [settings, setSettings] = useState(getAppSettings());
  const [testedSound, setTestedSound] = useState(false);
  const [notifGranted, setNotifGranted] = useState(
    typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted'
  );
  const [backupMessage, setBackupMessage] = useState<string | null>(null);

  const restTimes = [60, 90, 120, 180];
  const restPauseTimes = [5, 10, 15, 20, 30];

  const handleSelectTheme = (themeId: string) => {
    const updated = saveAppSettings({ theme: themeId });
    setSettings(updated);
    applyTheme(themeId);
    onSettingsChanged();
  };

  const handleUpdateRest = (seconds: number) => {
    const updated = saveAppSettings({ standardRestSeconds: seconds });
    setSettings(updated);
    onSettingsChanged();
  };

  const handleUpdateRestPause = (seconds: number) => {
    const updated = saveAppSettings({ restPauseSeconds: seconds });
    setSettings(updated);
    onSettingsChanged();
  };

  const handleTestAudio = () => {
    initAudioContext();
    playRestAlarm();
    triggerHapticFeedback();
    setTestedSound(true);
    setTimeout(() => setTestedSound(false), 2000);
  };

  const handleRequestNotification = async () => {
    const ok = await requestNotificationPermission();
    setNotifGranted(ok);
  };

  const handleDownloadBackup = () => {
    const json = exportBackupJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup-forge-treino-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setBackupMessage('Backup baixado com sucesso!');
    setTimeout(() => setBackupMessage(null), 3000);
  };

  const handleUploadBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = evt => {
      const content = evt.target?.result as string;
      if (content) {
        const ok = importBackupJSON(content);
        if (ok) {
          setBackupMessage('Backup restaurado com sucesso! Atualizando...');
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          setBackupMessage('Arquivo de backup inválido.');
        }
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-4 pb-24">
      {/* Header */}
      <div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-brand">
          Preferências
        </span>
        <h1 className="text-xl font-black text-white">Ajustes & Alertas</h1>
        <p className="text-xs text-gray-400">Personalize cores, descansos, sons e backup</p>
      </div>

      {backupMessage && (
        <div className="p-3 rounded-xl bg-brand-subtle border border-brand text-brand text-xs font-semibold flex items-center gap-2">
          <Check className="w-4 h-4" />
          <span>{backupMessage}</span>
        </div>
      )}

      {/* PERSONALIZAÇÃO DE COR DO APP (Com opção Preto/Stealth) */}
      <div className="bg-card border border-app rounded-2xl p-4 shadow-sm space-y-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-brand-subtle text-brand">
            <Palette className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Cor do Aplicativo</h3>
            <p className="text-xs text-gray-400">A cor escolhida se aplica aos destaques de todo o aplicativo</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
          {THEMES.map(t => {
            const isSelected = (settings.theme || 'green') === t.id;
            return (
              <button
                key={t.id}
                onClick={() => handleSelectTheme(t.id)}
                className={`flex items-center gap-2.5 p-2.5 rounded-xl border transition-all text-left ${
                  isSelected
                    ? 'border-brand-solid bg-elevated shadow-sm'
                    : 'border-app bg-card-subtle hover:bg-card-subtle'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center shadow-sm ${
                    t.id === 'black' ? 'border border-gray-400' : ''
                  }`}
                  style={{ backgroundColor: t.colorHex }}
                >
                  {isSelected && (
                    <Check className="w-3 h-3 stroke-[3]" style={{ color: t.textHex }} />
                  )}
                </span>
                <span className={`text-xs font-semibold truncate ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                  {t.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tempo Padrão de Descanso (Com Inserção Personalizada) */}
      <div className="bg-card border border-app rounded-2xl p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-white">Tempo de Descanso Padrão</h3>
            <p className="text-xs text-gray-400">Disparado automaticamente ao concluir cada série</p>
          </div>
          <span className="text-xs font-black text-brand">
            {settings.standardRestSeconds}s
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {restTimes.map(sec => (
            <button
              key={sec}
              onClick={() => handleUpdateRest(sec)}
              className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                settings.standardRestSeconds === sec
                  ? 'bg-brand text-black border-brand-solid shadow-brand'
                  : 'bg-card-subtle text-gray-300 border-app hover:bg-elevated'
              }`}
            >
              {sec}s
            </button>
          ))}
        </div>

        {/* Inserção de Tempo Personalizado */}
        <div className="flex items-center justify-between pt-2 border-t border-app">
          <span className="text-xs text-gray-400">Tempo personalizado:</span>
          <div className="flex items-center gap-1.5">
            <input
              type="number"
              min="5"
              max="600"
              placeholder="Ex: 75"
              value={settings.standardRestSeconds || ''}
              onChange={e => {
                const val = parseInt(e.target.value, 10) || 0;
                handleUpdateRest(val);
              }}
              className="w-20 px-3 py-1 text-center font-bold text-xs bg-card-subtle border border-app rounded-xl text-white focus:outline-none focus:border-brand-solid"
            />
            <span className="text-xs text-gray-400 font-semibold">segundos</span>
          </div>
        </div>
      </div>

      {/* Tempo de Rest-Pause (Com Inserção Personalizada) */}
      <div className="bg-card border border-app rounded-2xl p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-white">Tempo de Rest-Pause</h3>
            <p className="text-xs text-gray-400">Intervalo curto para séries com técnica avançada</p>
          </div>
          <span className="text-xs font-black text-brand">
            {settings.restPauseSeconds}s
          </span>
        </div>

        <div className="grid grid-cols-5 gap-1.5">
          {restPauseTimes.map(sec => (
            <button
              key={sec}
              onClick={() => handleUpdateRestPause(sec)}
              className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                settings.restPauseSeconds === sec
                  ? 'bg-brand text-black border-brand-solid shadow-brand'
                  : 'bg-card-subtle text-gray-300 border-app hover:bg-elevated'
              }`}
            >
              {sec}s
            </button>
          ))}
        </div>

        {/* Inserção de Tempo Personalizado de Rest-Pause */}
        <div className="flex items-center justify-between pt-2 border-t border-app">
          <span className="text-xs text-gray-400">Tempo personalizado:</span>
          <div className="flex items-center gap-1.5">
            <input
              type="number"
              min="3"
              max="120"
              placeholder="Ex: 12"
              value={settings.restPauseSeconds || ''}
              onChange={e => {
                const val = parseInt(e.target.value, 10) || 0;
                handleUpdateRestPause(val);
              }}
              className="w-20 px-3 py-1 text-center font-bold text-xs bg-card-subtle border border-app rounded-xl text-white focus:outline-none focus:border-brand-solid"
            />
            <span className="text-xs text-gray-400 font-semibold">segundos</span>
          </div>
        </div>
      </div>

      {/* Áudio, Vibração e Notificações */}
      <div className="bg-card border border-app rounded-2xl p-4 shadow-sm space-y-3">
        <div>
          <h3 className="text-sm font-bold text-white">Alarmes & Notificações</h3>
          <p className="text-xs text-gray-400">
            Garante que o alarme toque mesmo em segundo plano ou tela bloqueada
          </p>
        </div>

        <div className="space-y-2">
          {/* Teste de Som */}
          <div className="p-3 rounded-xl bg-card-subtle border border-app flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-brand-subtle text-brand">
                <Volume2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Sinal Sonoro de Alarme</span>
                <span className="text-[11px] text-gray-400">Toque sintetizado penetrante + vibração</span>
              </div>
            </div>

            <button
              onClick={handleTestAudio}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                testedSound
                  ? 'bg-brand text-black'
                  : 'bg-elevated text-brand border border-app hover:bg-[var(--bg-hover)]'
              }`}
            >
              {testedSound ? 'Tocando! 🔔' : 'Testar Som'}
            </button>
          </div>

          {/* Permissão de Notificação */}
          <div className="p-3 rounded-xl bg-card-subtle border border-app flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-brand-subtle text-brand">
                <Bell className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Notificações no Celular</span>
                <span className="text-[11px] text-gray-400">Avisa na tela bloqueada ao fim do descanso</span>
              </div>
            </div>

            <button
              onClick={handleRequestNotification}
              disabled={notifGranted}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                notifGranted
                  ? 'bg-elevated text-brand border border-brand cursor-default'
                  : 'bg-brand text-black hover:bg-brand-hover shadow-brand'
              }`}
            >
              {notifGranted ? '✓ Permitido' : 'Ativar'}
            </button>
          </div>
        </div>
      </div>

      {/* Backup e Restauração de Dados */}
      <div className="bg-card border border-app rounded-2xl p-4 shadow-sm space-y-3">
        <div>
          <h3 className="text-sm font-bold text-white">Segurança dos Dados (Backup)</h3>
          <p className="text-xs text-gray-400">Exporte ou importe seus treinos e histórico em arquivo JSON</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleDownloadBackup}
            className="p-3 rounded-xl bg-card-subtle hover:bg-elevated border border-app text-brand text-xs font-bold flex items-center justify-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Baixar Backup</span>
          </button>

          <label className="p-3 rounded-xl bg-card-subtle hover:bg-elevated border border-app text-gray-300 hover:text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors">
            <Upload className="w-4 h-4 text-brand" />
            <span>Restaurar Backup</span>
            <input
              type="file"
              accept=".json"
              onChange={handleUploadBackup}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
