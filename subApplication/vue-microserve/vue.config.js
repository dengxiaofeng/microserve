'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = 7104 // dev port

module.exports = {
  publicPath: '//localhost:7104/',
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  lintOnSave: false,
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port: port,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
  configureWebpack: {
    // name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    output: {
      library: '[name]',
      filename: '[name].js',
      libraryTarget: 'umd',
      globalObject: 'this'
    }
  },
};
