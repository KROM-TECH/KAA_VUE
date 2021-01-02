module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
      name: 'KAA',
      themeColor: '#00276f',
      msTileColor: '#00276f',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: '#00276f',
      manifestPath:'./manifest.json',
      manifestOptions:{
        name: "Kromtech Academic Archieves",
        short_name: "KAA",
        start_url: '.',
        display: 'standalone',
        theme_color: "#00276f"
      },

    //   iconPaths:{
    //     favicon32: 'img/favicon-32x32.png',
    //     favicon16: 'img/favicon-16x16.png',
    //     appleTouchIcon: 'img/apple-touch-icon-152x152.png',
    //     maskIcon: 'img/safari-pinned-tab.svg',
    //     msTileImage: 'img/144px.png'
    //   },
      // configure the workbox plugin
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'dev/sw.js',
        // ...other Workbox options...
      }
    }
  }