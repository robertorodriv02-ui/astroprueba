// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node'
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "server",
  adapter: node({
    mode: 'standalone'
  }),
  server: {
    host: process.env.HOST || "0.0.0.0",
    port: Number(process.env.PORT) || 4321,
  }
});