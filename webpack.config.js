const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
  mode: 'development',
  entry: './src/index.tsx',
  output:{
    path: path.resolve(__dirname + './dist'),
    filename:'[name].js'
  },
  devServer: {
    contentBase: path.resolve("./dist"),
    publicPath:"/",
    port: 3000,
    overlay: true,
    stats: "errors-only",
    historyApiFallback:true,
    open:true,
    hot:true
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // alias: {
    //   'components': path.resolve(__dirname, '..', 'src', 'components'),
    //   'containers': path.resolve(__dirname, '..', 'src', 'containers'),
    //   'assets': path.resolve(__dirname, '..', 'src', 'assets'),
    // },
  },
  module:{
    rules:[
      {
        test:/\.ts(x?)$/,
        exclude:/node_modules/,
        use: [
          {
            loader:'ts-loader'
          }
        ]
      },
      {
        test:/\.scss$/,
        use:[
          'style-loader','css-loader','sass-loader'
        ]
      },
      {
        test:/\.(jpe?g|png|gif|svg)$/,
        use:[
          {
            loader:'file-loader',
            options:{
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({template:'./public/index.html'})
  ]
}