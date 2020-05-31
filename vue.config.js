module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/scss/_main.scss";'
      }
    }
  },
  transpileDependencies: ["vuetify"]
};
