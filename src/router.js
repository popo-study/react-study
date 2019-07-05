
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

var router = new Router({
  mode: 'history',
  base: 'http://localhost:8080', //설정해줘야함.
  routes: [
    {
      path: '/',
      name: 'main_page',
      meta: { authRequired: true },
      component: () => import('./views/main/Main.vue')
    },
    {
      path: '/store_test',
      name: 'store_test',
      component: () => import('./views/StoreTest.vue')
    },
    {
        path: '/component_test',
        name: 'component_test',
        component: () => import('./views/ComponentTest.vue')
      }
  ]
});


router.beforeEach(function(to, from, next) {  
  if (
    to.matched.some(function(routeInfo) {
      return routeInfo.meta.authRequired;
    })
  ) {
      next();
  } else {
    next(); // 페이지 전환
  }
});

export default router;
