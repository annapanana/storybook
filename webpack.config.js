const ExtractTextPlugin = require('extract-text-webpack-plugin'),
      webpack = require('webpack'),
      path = require('path'),
      env = 'production',
      isDebug = env === 'debug',
      isProduction = env === 'production';

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: 'source-map',
  entry: {
    app: "./js/App.js",
  },
  output: {
    path: __dirname + "/public/",
    filename: "app.min.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          'loader': 'babel-loader',
          'options': {
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['react-html-attrs']
          }
        }]
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
                { loader: 'postcss-loader', options: { sourceMap: true, plugins: () => {return [require('autoprefixer')]} } },
                { loader: 'sass-loader', options: { sourceMap: true } }
              ]
        })
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
        ENV: JSON.stringify(env),
        VERSION: JSON.stringify(new Date().toLocaleString()),
        NODE_ENV: JSON.stringify(isDebug?env:'production')
      }),
      new ExtractTextPlugin('app.min.css')
    ].concat(!isDebug ? [
      // new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        sourceMap: true,
        compress: {
          warnings: false,
          drop_console: false,
          drop_debugger: true
        }
      }),
      new webpack.optimize.AggressiveMergingPlugin()
    ]:[]),

  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ],
    'alias': {
        'styles': path.resolve(__dirname, './src/sass'),
        'components': path.resolve(__dirname, './src/js')
      },
      'extensions': ['.js', '.jsx', '.css', '.sass', '.scss', '.png']
  }
};
