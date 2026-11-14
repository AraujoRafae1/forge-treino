import React from 'react';
import { Dumbbell, Layers, History, Sliders } from 'lucide-react';

export type TabType = 'home' | 'plans' | 'history' | 'settings';

interface Props {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  hasActiveWorkout: boolean;
}

export const Navbar: React.FC<Props> = ({ activeTab, onTabChange, hasActiveWorkout }) => {
  const tabs = [
    { id: 'home', label: 'Treinos', icon: Dumbbell, hasBadge: hasActiveWorkout },
    { id: 'plans', label: 'Planos', icon: Layers },
    { id: 'history', label: 'Histórico', icon: History },
    { id: 'settings', label: 'Ajustes', icon: Sliders },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-card/95 backdrop-blur-md border-t border-app px-4 pt-2 pb-[max(8px,env(safe-area-inset-bottom))] transition-colors duration-200">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id as TabType)}
              className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
                isActive ? 'text-brand font-bold scale-105' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
                {tab.hasBadge && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand ring-2 ring-[var(--bg-card)] animate-pulse" />
                )}
              </div>
              <span className="text-[10px] mt-1">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
