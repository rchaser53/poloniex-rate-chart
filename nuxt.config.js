module.exports = {
  build: {
    vendor: [
      'axios',
      'vuex'
    ],
    extend (config) {
      for (rule of config.module.rules) {
        if (rule.loader === 'vue-loader') {
          rule.options.loaders.ts = 'ts-loader?{"appendTsSuffixTo":["\\\\.vue$"]}'
        }
      }
    }
  }
}