// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tschenfeng.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  server: {
    // 默认分配独立端口 4325（避免与 azqe.com:4321、tattoogoat.com:4322 等冲突）
    port: Number(process.env.PORT) || 4325,
    host: true,
  },
  integrations: [sitemap()],
  vite: {
    server: {
      // 端口若偶然被占则自动递增寻找空闲端口，绝不抢占或报错
      strictPort: false,
    },
    plugins: [tailwindcss()],
  },
});
