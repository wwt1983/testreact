var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');
var precss = require('precss');

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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({ options: { postcss: [ autoprefixer ] } }),
        new webpack.LoaderOptionsPlugin({ options: { postcss: [ precss ] } })
    ],

    module: {
        loaders: [
            {
                loader: 'babel-loader',
                include: [ path.resolve(__dirname, 'src') ],
                exclude: /node_modules/,
                test: /\.js$/
            },
            {
                test: /\.css$/,
                loader:	'style-loader!css-loader!postcss-loader'
            }
        ]
    }
}
