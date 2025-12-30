import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      allowedHosts: [
        'ggs.proaxon.in',
        'www.ggs.proaxon.in',
        'localhost',
        '46.62.128.100',
      ],
    },
  });
};


