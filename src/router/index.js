import Vue from 'vue'
import VueRouter from 'vue-router'
const Root = () => import('../views/root/root')
const Home = () => import('../views/home/home')
const Blog = () => import('../views/blog/blog')
const Work = () => import('../views/work/work')
const About = () => import('../views/about/about')
const notFind = () => import('../components/404/notFind')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: Root,
    children: [
      {
        path: '/home',
        component: Home,
        name: 'home',
        alias: '/'
      },
      {
        path: '/blog',
        component: Blog,
        name: 'blog'
      },
      {
        path: '/work',
        component: Work,
        name: 'work'
      },
      {
        path: '/about',
        component: About,
        name: 'about'
      },
      {
        path: '*',
        component: notFind,
        name: 'notFind'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
