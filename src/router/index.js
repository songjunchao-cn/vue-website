import Vue from 'vue'
import VueRouter from 'vue-router'
import Root from '../views/root/root'
import Home from '../views/home/home'
import Work from '../views/work/work'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: Root,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home,
        name: 'home'
      },
      {
        path: '/work',
        component: Work,
        name: 'work'
      }
    ]
    //   {
    //     path: '/about',
    //     component: about,
    //     name: 'about'
    //   },
    //   {
    //     path: '/blog',
    //     component: blog,
    //     name: 'blog'
    //   }
    // ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
