const fs = require('fs');
const packageJson = fs.readFileSync('./package.json');
const version = JSON.parse(packageJson).version || 0;
console.log(version);
const {
  DefinePlugin
} = require('webpack');

module.exports = {
  transpileDependencies: ['vuex-persist'],
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        let v = JSON.stringify(require('./package.json').version)
        args[0]['process.env']['VERSION'] = v
        return args
      })
  },
  devServer: {
    port: 4300,
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new DefinePlugin({
        'process.env': {
          PACKAGE_VERSION: '"' + version + '"'
        }
      }),
    ],
  },
  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
};