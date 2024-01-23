import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import vue from "@astrojs/vue";
import tunnel from "astro-tunnel";

import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), icon(), vue(), tunnel({
    url: 'http://localhost:4321',
    port: 4321,
    acceptCloudflareNotice: true
  })],
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
});