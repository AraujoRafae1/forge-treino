import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.rafael.forgetreino',
  appName: 'Forge Treino',
  webDir: 'dist',
  plugins: {
    LocalNotifications: {
      smallIcon: 'ic_stat_forge',
      iconColor: '#10b981',
    },
  },
};

export default config;
