const Vue = require('vue')
const appComponent = require('./components/app/app-component.vue')

new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(appComponent)
  }
})