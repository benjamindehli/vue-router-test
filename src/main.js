import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import App from './App.vue';

import Home from './pages/Home.vue';
import Users from './pages/Users.vue';
import User from './pages/User.vue';

Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Home },
	{ path: '/users', component: Users },
	{ path: '/users/:userId', component: User }
];

const router = new VueRouter({
	routes,
	mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
