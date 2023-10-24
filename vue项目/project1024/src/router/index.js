import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//切换页面可用
const routes = [
  {
    path: '/emp',
    name: 'emp',
    component: () => import('../views/mainPage/EmpView.vue')
  },
  {
    path: '/dept',
    name: 'dept',
    component: () => import('../views/mainPage/DeptView.vue')
  },
  {
    path: '/',
    redirect:'/dept'//设置加载页面时默认访问的界面
    //component: () => import('../views/mainPage/DeptView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
