import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.appinmo.app',
  appName: 'App Inmo',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
