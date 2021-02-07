/* eslint-disable no-console,no-unused-vars */
export default {
  install: function (vue, options) {
    vue.mixin({
      computed: {
        codeRange() {
          return {
            contextStart: 0,
            contextEnd: 1,
            functionEnd: undefined
          }
        }
      }
    })
  }
}
