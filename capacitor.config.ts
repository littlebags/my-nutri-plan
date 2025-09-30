import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.c748df8b703948f6b21a94b5f3969a3e',
  appName: 'cook-my-diet',
  webDir: 'dist',
  server: {
    url: 'https://c748df8b-7039-48f6-b21a-94b5f3969a3e.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;