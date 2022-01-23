import { defineConfig } from 'umi';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  // mfsu: {},
  webpack5: {},
  extraPostCSSPlugins: [
    require('postcss-import'),
    require('tailwindcss')({
      config: './tailwind.config.js',
    }),
    require('postcss-nested'),
  ],
  chainWebpack: (memo) => {
    memo.plugin('vanilla-extract').use(VanillaExtractPlugin)
  }
});
