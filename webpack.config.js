var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack/hot/dev-server',
        './src/index'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [
            {
                loader: 'babel-loader',
                include: [ path.resolve(__dirname, 'src') ],
                exclude: /node_modules/,
                test: /\.js$/
            }
        ],
    }
}
