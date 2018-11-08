const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js',
        publicPath: 'http://localhost:3000/'  //配置js，css文件的绝对路径
    },
    devtool: "eval",
    module: {
        rules: [
            //css loader
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                minimize: true // css代码压缩
                            }
                        }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            //图片loader
            {
                test: /\.(png|jpg|gif|jpeg)/,  //是匹配图片文件后缀名称
                use: [
                    {
                        loader: 'url-loader', //是指定使用的loader和loader的配置参数
                        options: {
                            limit: 500,  //是把小于500B的文件打成Base64的格式，写入JS
                            name: 'images/[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(htm|html)$/i,
                use: ['html-withimg-loader']
            },
            //babel配置
            {
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader'
                },
                exclude:/node_modules/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new uglify(),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true  //removeAttrubuteQuotes是却掉属性的双引号。
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template: './src/index.html' //是要打包的html模版路径和文件名称。
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        host: 'localhost',
        compress: true,
        port: 3000
    }
};