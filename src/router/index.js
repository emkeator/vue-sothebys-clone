import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Associates from '@/components/Associates';
import Properties from '@/components/Properties';
import About from '@/components/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sales-associates',
      name: 'Associates',
      component: Associates
    },
    {
      path: '/properties',
      name: 'Properties',
      component: Properties
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ],
});
