import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import controller from './components/controller.vue'
import home from './components/home.vue'
import insertdata from './components/insertdata.vue'
import deletee from './components/delete.vue'
import getbyid from './components/getbyid.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path:'/controller', name:'controller', component:controller},
    {path:'/', name:'home', component:home},
    {path:'/insertdata', name:'insertdata', component:insertdata},
    {path:'/delete', name:'delete', component:deletee},
    {path:'/getbyid', name:'getbyid', component: getbyid}

]


const router = createRouter({
    history:createWebHistory(),
    routes
})


createApp(App).use(router).mount('#app')

