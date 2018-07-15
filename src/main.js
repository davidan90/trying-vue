import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import { Home, Users } from './views';

Vue.use(Router)

new Vue({
  el: '#app',
  router: new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/users',
        component: Users
      }
    ],
  }),
  render: h => h(App)
})
