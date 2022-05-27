const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  assetsDir: "assets"
})

module.exports =  {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/scss/main.scss";'
      }
    }
  }
};

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.pug$/,
          oneOf: [
            {
              resourceQuery: /^\?vue/,
              use: ['pug-plain-loader']
            },
            {
              use: ['raw-loader', 'pug-plain-loader']
            }
          ]
        }
      ]
    }
  }
}

