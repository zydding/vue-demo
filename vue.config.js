
module.exports = {
    lintOnSave: false,
    publicPath: 'demo',
    outputDir: 'demo', // 构建输出目录
    devServer: {
        port: 8093, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        proxy: {
            '/api': {
                target: 'https://zekeup.com/',
                // target: 'http://172.16.3.86/',
                // target: 'http://172.16.2.41/',
                // target: 'http://172.16.2.49/',
                changeOrigin: true,
                ws: true,
                // pathRewrite: {
                //     '^/api': '/'
                // }
            },
        }
    },

}
