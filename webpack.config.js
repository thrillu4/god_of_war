const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: './src/assets/js/index.js'
    },
    output: {
        clean: true,
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        static: './src',
        compress: true,
        port: 9000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]ss|css)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif|mp4)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'God Of War',
            template: 'src/index.html'
        })
    ]
}