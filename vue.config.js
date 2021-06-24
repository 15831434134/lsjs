module.exports = {
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    chainWebpack: (config) => {
        // config.resolve.alias.set('@', resolve('src'))
        // config.module.test(/|.less/).use('less-loader')
 
    },
}