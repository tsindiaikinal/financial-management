import 'tailwindcss/dist/tailwind.css'
import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
// import Diagram from '@/components/Diagram'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    }
  ]
})
