module.exports = {
    // ...other vue-cli plugin options...
 
    pwa: {
      name: 'KAA',
      themeColor: '#00276f',
      msTileColor: '#00276f',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: '#00276f',
      manifestPath:'./manifest.json',
           // configure the workbox plugin
           workboxPluginMode: 'InjectManifest',
           workboxOptions: {
             swSrc: './public/sw.js',
             exclude: ['_redirects'],
             globDirectory: "public/",
             globPatterns: ["**/*.{css,ico,html,png,js,json,woff2}"],
           
           },

           chainWebpack: (config) => {

            // A, remove the plugin
            config.plugins.delete('prefetch')
          }
  
    }
  }