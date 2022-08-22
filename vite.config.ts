import { resolve } from 'path';
import { defineConfig, Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteImagemin from 'vite-plugin-imagemin';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
// import { visualizer } from 'rollup-plugin-visualizer';

const isBuild: boolean = process.env.npm_lifecycle_event === 'build';

const plugins: Plugin[] = [
  vue({
    template: { transformAssetUrls },
  }),
  quasar({
    sassVariables: 'src/assets/scss/_variables.scss',
  }),
  vueI18n({
    compositionOnly: true,
  }),
  createSvgSpritePlugin({
    include: '**/assets/icons/*.svg',
    symbolId: 'icon-[name]',
  }),
  // visualizer(),
];

if (isBuild) {
  plugins.push(viteImagemin());
}

export default defineConfig({
  plugins,

  build: {
    emptyOutDir: true,
    manifest: true,
    // rollupOptions: {
    //   input: {
    //     app: resolve(__dirname, 'app/index.html'),
    //     nested: resolve(__dirname, 'nested/index.html'),
    //   },
    // },
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },

  server: {
    host: true,
  },
});
