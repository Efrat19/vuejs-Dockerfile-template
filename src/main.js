import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import dashboard from './components/dashboard'
import home from './components/home'

const router = new Router({
  routes: [
    {path: '/', component: home},
    {path: '/dashboard', component: dashboard},
  ]
})
Vue.use(Router)
  new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
