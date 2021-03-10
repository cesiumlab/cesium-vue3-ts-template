// vue.config.js
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  configureWebpack: config => {
    const cwp = new CopyWebpackPlugin([
      {
        from: './node_modules/cesium/Build/Cesium', // 调试时，将Cesium换成CesiumUnminified
        to: 'js/Cesium',
        toType: 'dir'
      },
    ]);
    config.plugins.push(cwp);

    config.externals = config.externals || {};
    config.externals.cesium = 'Cesium';
  }
}