import Vue from 'vue'
import Router from 'vue-router'
// import layout from '@/pages/Layout'
// import index from "@/pages/Index"
// import information from "@/pages/Information"
// import about from "@/pages/About"
// import teause from "@/pages/TeaUse"
// import contact from "@/pages/Contact"
Vue.use(Router)


const router = new Router({
  //  mode: 'history',
  routes: [

    {
      path: '/layout',
      name: 'layout',
      component: resolve => require(['@/pages/layout.vue'], resolve),
      // component: layout,
      children:[
       
        {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/pages/home.vue'], resolve),
        },
        // {
        //   path: '/test3',
        //   name: 'test3',
        //   component: test3
        // },
        {
          path: '/information',
          name: 'information',
          component: resolve => require(['@/pages/information.vue'], resolve),
        },{
          path: '/about',
          name: 'about',
          component: resolve => require(['@/pages/about.vue'], resolve),
        },{
          path: '/teause',
          name: 'teause',
          component: resolve => require(['@/pages/teause.vue'], resolve),
          // component: teause
        },{
          path: '/contact',
          name: 'contact',
         
          component: resolve => require(['@/pages/contact.vue'], resolve),
        },
      ]
    },
    {
      path:'*',
      redirect:'/home',
    }
  ]
  });
export default router;