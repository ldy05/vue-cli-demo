import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
import home from "@/components/home.vue";
import about from "@/components/about.vue";
import note from "@/components/node.vue";
import content from "@/components/content.vue";
import my  from "@/components/my.vue";
import con  from "@/components/con.vue";


Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
      // 重定向
      {
          path: '/',
          redirect: '/home'
      },
      {
          path:"/home",
          component: home
      },
      {
          path: "/about",
          component: about,
      },
      {
          path: "/note",
          component: note
      },
        {
            path:'/note/:id/:tit',
            component:content
        },
        {
            path:'/about/my/:id',
            name:'my',
            component:my,
            children:[
                {
                    path:'/con/:num',
                    component:con
                }
            ]
        },


  ]
})
