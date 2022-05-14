/* eslint @typescript-eslint/no-var-requires: 0 */
const { withEsbuildOverride } = require('remix-esbuild-override');
const { resolve } = require('node:path');
const GlobalsPolyfills =
  require('@esbuild-plugins/node-globals-polyfill').default;
const alias = require('esbuild-plugin-alias');

withEsbuildOverride((option, { isServer }) => {
  option.jsxFactory = 'jsx';
  option.inject = [resolve(__dirname, 'reactShims.ts')];
  option.plugins = [
    alias({
      through: require.resolve('no-op'),
      'html-tokenize': require.resolve('no-op'),
      multipipe: require.resolve('no-op'),
    }),
    GlobalsPolyfills({
      buffer: true,
    }),
    ...option.plugins,
  ];
  if (isServer) option.mainFields = ['browser', 'module', 'main'];

  return option;
});

/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  serverBuildTarget: 'cloudflare-pages',
  server: './server.js',
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ['**/.*'],
};
