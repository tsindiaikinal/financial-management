// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Diagram from './components/Diagram'
import Calendar from './components/Calendar'
import Search from './components/Search'
import FilterData from './components/FilterData'
import AddUser from './components/AddUser'
import RightMenu from './components/RightMenu'

Vue.config.productionTip = false

Vue.component('app-diagram', Diagram)
Vue.component('app-calendar', Calendar)
Vue.component('app-search', Search)
Vue.component('app-filter', FilterData)
Vue.component('app-adduser', AddUser)
Vue.component('app-menu', RightMenu)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
