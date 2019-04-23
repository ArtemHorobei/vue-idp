import Vue from 'vue';
import Router from 'vue-router';
import Users from '../components/Users';
import User from '../components/User';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users,
    },
    {
      path: '/:userId',
      name: 'User',
      component: User,
    },
  ],
});
