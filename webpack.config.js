const path = require('path');

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development', // "production" | "development" | "none"

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: {
        bundle: './src/index.tsx'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "/",
    },

    module: {
        rules: [{
            // 拡張子 .ts の場合
            test: /\.tsx?$/,
            // TypeScript をコンパイルする
            use: 'ts-loader'
        },
        {
            test: /\.css/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        url: false
                    },
                }
            ]
        },
        {
            test: /\.png$/,
            use: [
                'file-loader?name=images/[name].[ext]'
            ]
        }]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
        modules: [
            "node_modules", // node_modules 内も対象とする
        ],
        extensions: [
            '.ts',
            '.tsx',
            '.js' // node_modulesのライブラリ読み込みに必要
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        inline: true,
        watchContentBase: true,
        open: true,
        historyApiFallback: true
    }
};