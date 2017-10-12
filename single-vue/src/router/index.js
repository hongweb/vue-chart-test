import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Home from '@/components/Home'
import Details from '@/components/Details'
import Tab1 from '@/components/Tab1'

Router.prototype.goBack = function () {
  this.isBack = true;
  this.go(-1);
};

Vue.use(Router);

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'Home',
  //     component: Home
  //   },
	//   {
  //     path: '/details',
  //     name: 'Details',
  //     component: Details
  //   }
  // ]

  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [
      {
        path: '',
        component: Home
      }, 
      {
        path: '/details',
        component: Details,
        children:[
        {
          path:'/details/tab1',
          component:Tab1
        }
        ]
      }]
    }
  ]

})
