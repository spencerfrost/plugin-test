import Vue from 'vue'
import App from './App.vue'
import ComponentLibrary from '@roomroster/component-library'

Vue.use(ComponentLibrary)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
