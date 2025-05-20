// Plugins
import AutoImport from 'unplugin-auto-import/vite' // 自动导入常用 API，减少手动 import
import Components from 'unplugin-vue-components/vite' // 自动注册 Vue 组件
import Fonts from 'unplugin-fonts/vite' // 自动加载字体资源
import Layouts from 'vite-plugin-vue-layouts-next' // 支持 Vue 布局组件
import Vue from '@vitejs/plugin-vue' // Vite 官方 Vue 插件，支持 Vue 3 单文件组件
import VueRouter from 'unplugin-vue-router/vite' // Vue Router 自动生成路由插件
import { VueRouterAutoImports } from 'unplugin-vue-router' // Vue Router 的自动导入 API
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify' // Vuetify UI 框架集成插件

// Utilities
import { defineConfig } from 'vite' // Vite 提供的配置类型定义函数
import { fileURLToPath, URL } from 'node:url' // Node.js 工具函数，用于路径处理

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      dts: 'src/typed-router.d.ts', // 生成 Vue Router 类型声明文件
    }),
    Layouts(), // 启用布局组件功能
    AutoImport({
      imports: [
        'vue', // 自动导入 Vue 核心 API 不用再写 import {ref} from 'vue'
        VueRouterAutoImports, // 自动导入 Vue Router 相关 API
        {
          'pinia': ['defineStore', 'storeToRefs'], // 自动导入 Pinia 状态管理 API
        },
      ],
      dts: 'src/auto-imports.d.ts', // 生成自动导入的类型声明文件
      eslintrc: {
        enabled: true, // 启用 ESLint 配置支持
      },
      vueTemplate: true, // 在 Vue 模板中启用自动导入
    }),
    Components({
      dts: 'src/components.d.ts', // 生成组件自动注册的类型声明文件
    }),
    Vue({
      template: { transformAssetUrls }, // 处理 Vue 模板中的资源 URL 转换
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true, // 自动导入 Vuetify 组件和指令
      styles: {
        configFile: 'src/styles/settings.scss', // 自定义 SCSS 变量配置文件
      },
    }),
    Fonts({
      fontsource: {
        families: [
          {
            name: 'Roboto', // 使用 Google Fonts 的 Roboto 字体
            weights: [100, 300, 400, 500, 700, 900], // 包含的字体粗细
            styles: ['normal', 'italic'], // 包含的字体样式
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    exclude: [
      'vuetify', // 排除 Vuetify，避免优化依赖打包
      'vue-router', // 排除 Vue Router
      'unplugin-vue-router/runtime', // 排除 unplugin-vue-router 运行时模块
      'unplugin-vue-router/data-loaders',
      'unplugin-vue-router/data-loaders/basic',
    ],
  },
  define: { 'process.env': {} }, // 定义全局变量
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // 设置路径别名 @ 指向 src 目录
    },
    extensions: [
      '.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue', // 支持的文件扩展名
    ],
  },
  server: {
    port: 3000, // 开发服务器端口
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern-compiler', // 使用 modern 编译器处理 sass 文件
      },
      scss: {
        api: 'modern-compiler', // 使用 modern 编译器处理 scss 文件
      },
    },
  },
})
