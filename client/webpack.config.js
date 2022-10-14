const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        "webpack-dev-server/client?http://127.0.0.0:8080",
        "webpack/hot/only-dev-server",
        "./src"
      ],
    // entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HTMLWebpackPlugin({template: './public/index.html'})
    ],

    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }, 
            {
                test: /\.css$/,
                // exclude: /(node_modules)/, // Remove this 
                use: [
                  { loader: 'style-loader' },
                  { loader: 'css-loader' },
                ],
            }
        ]
    }
};
