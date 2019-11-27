import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/LandingScreen/LandingScreen.vue'
import LoginScreen from '../views/LoginScreen/LoginScreen.vue'
import ForgotPassScreen from '../views/ForgotPassScreen/ForgotPassScreen.vue'
import CreateAccountScreen from '../views/CreateAccountScreen/CreateAccountScreen.vue'
import termOfServiceScreen from '../views/termOfServiceScreen/termOfServiceScreen.vue'
import HomeScreen from '../views/HomeScreen/HomeScreen.vue'
import PostScreen from '../views/PostScreen/PostScreen.vue'
import SettingScreen from '../views/SettingScreen/SettingScreen.vue'
import TypePeopleScreen from '../views/TypePeople/TypePeopleScreen.vue'
import FindingScreen from '../views/FindingScreen/FindingScreen.vue'
import Finding from '../views/FindingScreen/components/Finding.vue'
import ShowStatic from '../views/FindingScreen/components/ShowStatic.vue'
import ChatScreen from '../views/ChatScreen/ChatScreen.vue'
import Type from '../views/TypePeople/components/Type.vue'
import Topic from '../views/TypePeople/components/Topic.vue'
import Aboutus from '../views/SettingScreen/components/Aboutus.vue'
import Privacy from '../views/SettingScreen/components/Privacy.vue'
import Logout from '../views/SettingScreen/components/Logout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/login',
    name: 'LoginScreen',
    component: LoginScreen
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassScreen',
    component: ForgotPassScreen
  },
  {
    path: '/createaccout',
    name: 'CreateAccountScreen',
    component: CreateAccountScreen
  },
  {
    path: '/home',
    name: 'HomeScreen',
    component: HomeScreen
  },
  {
    path: '/post',
    name: 'PostScreen',
    component: PostScreen
  },
  {
    path: '/setting',
    name: 'SettingScreen',
    component: SettingScreen
  },
  {
    path: '/messenger',
    name: 'TypePeopleScreen',
    component: TypePeopleScreen,
    children: [
      {
        path: 'type',
        name: 'Type',
        component: Type
      },
      {
        path: 'topic/:userType',
        name: 'Topic',
        component: Topic
      }
    ]
  },
  {
    path: '/finding',
    name: 'FindingScreen',
    component: FindingScreen,
    children: [
      {
        path: 'finding',
        name: 'Finding',
        component: Finding
      },
      {
        path: 'showstatic',
        name: 'ShowStatic',
        component: ShowStatic
      }
    ]
  },
  {
    path: '/chat',
    name: 'ChatScreen',
    component: ChatScreen
  },
  {
    path: '/termofservice',
    name: 'termOfServiceScreen',
    component: termOfServiceScreen
  },
  {
    path: '/aboutus',
    name: 'Aboutus',
    component: Aboutus
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  hash: false
})

export default router
