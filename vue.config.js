const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
    publicPath: '/',
    assetsDir: 'static',
    // configureWebpack: () => {
    //     if (process.env.NODE_ENV === 'production') {
    //         return {
    //             plugins: [
    //                 new CompressionPlugin({
    //                     test: /\.js$|\.html$|.\css/,
    //                     algorithm: 'gzip',// 使用gzip压缩
    //                     threshold: 10240, //对超过10k的数据压缩
    //                     deleteOriginalAssets: false //删除源文件
    //                 })
    //             ]
    //         }
    //     } 
    // },
    devServer: {
        disableHostCheck: true,
        port: 8090,
        proxy: {
            '^/api': {
                target: 'http://127.0.0.1:4000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        },
        overlay: {
            warnings: true,
            errors: true
        }
    }
}