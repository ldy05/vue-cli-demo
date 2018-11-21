import Vue from 'vue'
import Router from 'vue-router'
import Parent from '@/components/Parent'
import Children from '@/components/Children'

Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [
        {
            path:'/',
            redirect:'/Parent'
        },
        {
          path: '/Parent',
          name: 'Parent',
          component:Parent
        },
        {
            path: '/Children',
            name: 'Parent',
            component:Parent
        }
  ]
})
