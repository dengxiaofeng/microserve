const vueConfig = {
  configureWebpack: {
    // webpack plugins
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-icon-loader')
      .loader('vue-svg-icon-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      })
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
        },
        javascriptEnabled: true
      }
    }
  },
  productionSourceMap: false,
  lintOnSave: undefined,
  transpileDependencies: []
}

module.exports = vueConfig
