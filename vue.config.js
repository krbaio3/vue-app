const fs = require('fs');
const packageJson = fs.readFileSync('./package.json');
const version = JSON.parse(packageJson).version || 0;
const name = JSON.parse(packageJson).name || '';
const {
  DefinePlugin
} = require('webpack');

let port = 4300;
let public = '0.0.0.0';

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
    port,
    public,
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new DefinePlugin({
        'process.env': {
          PACKAGE_VERSION: '"' + version + '"',
          NAME_APP: '"' + name + '"',
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