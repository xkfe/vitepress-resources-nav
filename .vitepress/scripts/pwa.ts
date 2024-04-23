import type { VitePWAOptions } from 'vite-plugin-pwa'

export const pwa: Partial<VitePWAOptions> = {
  outDir: 'dist',
  base: '/',
  scope: '/',
  registerType: 'prompt',
  includeAssets: ['favicon.svg'],
  includeManifestIcons: false,
  selfDestroying: true,
  manifest: {
    name: '小凯同学的网址导航',
    short_name: '小凯同学的网址导航',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
  workbox: {
    globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    // runtimeCaching: [
    //   {
    //     urlPattern: /^https:\.qn\.kaife\.cn\/.*/i,
    //     handler: 'NetworkFirst',
    //     options: {
    //       cacheName: 'qn-images-cache',
    //       expiration: {
    //         maxEntries: 10,
    //         maxAgeSeconds: 60 * 60 * 24 * 7, // <== 7 days
    //       },
    //       cacheableResponse: {
    //         statuses: [0, 200],
    //       },
    //     },
    //   },
    // ],
  },
  devOptions: {
    enabled: true,
    suppressWarnings: true,
    navigateFallback: '/',
  },
}
