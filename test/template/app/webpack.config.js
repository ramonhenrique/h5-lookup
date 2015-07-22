module.exports = {
    entry: __dirname + "/lookup.view.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.js$/,
                loaders: ['babel'], // 'jsx?harmony&stripTypes', 'flowcheck'],
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: "json"
            }
    ]
    },
    devtool: "source-map",
    devServer: {
        contentBase: __dirname,
        hot: false,
        inline: true,
        noInfo: false,
        host: '0.0.0.0',
        port: 3080,
        colors: true
    },
    plugins: [
//        new webpack.optimize.MinChunkSizePlugin({
//            minChunkSize: 100000000
//        })
    ]
};
