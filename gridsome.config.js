// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')
module.exports = {
  siteName: 'Buddha Nag | Personal Portfolio',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwind
        ],
      },
    },
  },
  plugins: [
      {
          use: "gridsome-plugin-tailwindcss",
          options: {
            tailwindConfig: './tailwind.config.js',
            presetEnvConfig: {},
            shouldImport: false,
            shouldTimeTravel: false
          }
      },
      {
        use: '@allanchain/gridsome-plugin-pwa',
        options: {
          manifestOptions: {
            short_name: 'Buddha',
            description: 'Checkout me profile for collab development :)',
            display: 'standalone',
            gcm_sender_id: undefined,
            categories: ['education'],
            lang: 'en-GB',
            dir: 'auto'
          },
          appleMobileWebAppStatusBarStyle: 'default',
          manifestPath: 'manifest.json',
          icon: {
            androidChrome: [
              {
                src: './src/favicon-maskable.png',
                sizes: [512, 384, 192],
                purpose: 'maskable'
              },
              {
                sizes: [144],
                purpose: 'any'
              },
              {
                urls: [
                  '/gridsome/assets/static/favicon.7b22250.9bb7ffafafc09ac851d81afb65b8ef59.png'
                ],
                sizes: [180]
              }
            ],
            appleMaskIcon: { url: './safari-pinned-tab.svg' }
          },
          msTileColor: '#00a672',
          appShellPath: 'offline/index.html',
          workboxOptions: {
            cacheId: 'awesome-pwa',
            globPatterns: ['assets/css/*', '*.js', 'offline/index.html'],
            navigateFallback: '/gridsome/offline/index.html',
            navigateFallbackAllowlist: [/\/$/],
            skipWaiting: true
          }
        }
      },
  ],
}