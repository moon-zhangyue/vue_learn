// const { defineConfig } = require('@vue/cli-service')

/*module.exports = defineConfig({
    transpileDependencies: true
    chainWebpack:(config)=>{
        config.resolve.alias.set('styles',)
    }
})*/
const path = require('path')
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias.set('styles', path.join(__dirname, './src/assets/styles')) //起别名
    }
}