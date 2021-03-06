// const { defineConfig } = require('@vue/cli-service')

/*module.exports = defineConfig({
    transpileDependencies: true
    chainWebpack:(config)=>{
        config.resolve.alias.set('styles',)
    }
})*/
const path = require('path')
const {defineConfig} = require("@vue/cli-service");
// eslint-disable-next-line no-undef
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false
})
module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/api': '/mock'
                }
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('styles', path.join(__dirname, './src/assets/styles/'))
            .set('@', path.join(__dirname, './src/')) //起别名
            .set('common', path.join(__dirname, './src/common/'))
    }
}