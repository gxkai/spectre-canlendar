import Vue from 'vue';
import Router from 'vue-router';
import routes from 'vue-auto-routing';
import { createRouterLayout } from 'vue-router-layout';
import { login } from './lib/account';
import store from './store';
import _ from 'lodash';
import ls from 'store2';
Vue.use(Router);
const RouterLayout = createRouterLayout(layout => {
  return import('@/layouts/' + layout + '.vue');
});
const router = new Router({
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});
export default router;
const whiteList = ['/login'];
router.beforeEach((to, from, next) => {
  if (_.isEqual(ls.get('login'), login)) {
    Object.assign(store.state.login, login);
    next();
  }
  if (_.isEqual(store.state.login, login)) {
    if (to.path === '/login') {
      next('/');
    } else {
      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
