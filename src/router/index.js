import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import headerinformation from '@/components/headerInformation'
import studentDetails from '@/components/studentDetails'
import User from '@/components/User'
import nodeExample from '@/components/nodeExample'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/headerInformation',
      name: 'headerInformation',
      component: headerinformation
    },
    {
      path:'/studentDetails',
      name:'studentDetails',
      component:studentDetails
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path:'/nodeExample',
      name:'nodeExample',
      component:nodeExample
    }

  ]
})
