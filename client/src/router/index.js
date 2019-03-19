import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import AdminLogin from '@/components/AdminLogin'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Logout from '@/components/Logout'
import AddTournments from '@/components/AddTournments'
import TournmentAdded from '@/components/TournmentAdded'
import RegisterTournment from '@/components/RegisterTournment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/adminlogin',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/addtournments',
      name: 'AddTournments',
      component: AddTournments
    },
    {
      path: '/tournmentadded',
      name: 'TournmentAdded',
      component: TournmentAdded
    },
    {
      path: '/registertournment',
      name: 'RegisterTournment',
      component: RegisterTournment
    }
  ]
})
