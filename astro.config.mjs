// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  // Produce a static site (outputs to `dist/`) so GitHub Pages can serve the
  // entire exported site. Previously this was set to `server` with the
  // Vercel adapter which generates server-side artifacts instead of a full
  // static `dist/` folder.
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],

  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Geist",
      cssVariable: "--font-geist",
      fallbacks: ["Inter", "sans-serif"],
    }]
  },

  // No adapter required for a static site. If you prefer an adapter, you
  // can install and enable `@astrojs/static` here.
});