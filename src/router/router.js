import {Router} from '@vaadin/router';

import '../constants/url' 

//do i need to import all components in router
import '../components/posts-view'
import '../components/not-found-view'


/**
 * 
 * @param {DOMNODE} outlet 
 */
export default function initRouter(outlet) {
  const router = new Router(outlet); 
  router.setRoutes([
    {
      path: '/login',
      component: 'login-view',

    },
    {
      path: '/posts',
      component: 'posts-view',
      action : async () => { await import (/* webpackChunkName: "post-view"   */ '../components/posts-view.js') }

    },
    {
      path: '/update',
      component: 'update',
      action : async () => { await import (/* webpackChunkName: "update"   */ '../components/update.js') }

    },
    {
      path: '(.*)', 
      component: 'not-found-view',
    
    }
  ]);
}

