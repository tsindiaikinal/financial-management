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
import OperationCard from './components/OperationCard'
import CopyOperation from './components/CopyOperation'
import AddItem from './components/AddItem'
import DeleteItem from './components/DeleteItem'
import AddOperation from './components/AddOperation'
import Scoreboard from './components/Scoreboard'
import Profile from './components/Profile'

Vue.config.productionTip = false

Vue.component('app-diagram', Diagram)
Vue.component('app-calendar', Calendar)
Vue.component('app-search', Search)
Vue.component('app-filter', FilterData)
Vue.component('app-adduser', AddUser)
Vue.component('app-menu', RightMenu)
Vue.component('app-opercard', OperationCard)
Vue.component('app-copy', CopyOperation)
Vue.component('app-add', AddItem)
Vue.component('app-delete', DeleteItem)
Vue.component('app-operation', AddOperation)
Vue.component('app-scoreboard', Scoreboard)
Vue.component('app-profile', Profile)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
