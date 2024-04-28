const { ModuleFederationPlugin } = require('webpack').container;

/** @type {require('webpack').Configuration} */
module.exports = {
  output: {
    publicPath: 'auto', // we setup the `publicHost` in `angular.json` file
    uniqueName: 'master-app',
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    // Allow output javascript files as module source type.
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'master-app',
      library: {
        // because Angular v14 will output ESModule
        type: 'module',
      },
      remotes: {
        hrm: 'http://localhost:4300/remoteEntry.js',
        pm: 'http://localhost:4400/remoteEntry.js',
      },
       shared: ['@angular/core', '@angular/common', '@angular/router'],

    }),
  ],
};