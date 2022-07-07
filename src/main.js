import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import { createRouter, createWebHashHistory, RouterLink } from 'vue-router';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import HomeComponent from './components/HomeComponent';
import ResearchComponent from './components/ResearchComponent';
import PublicationComponent from './components/PublicationComponent';
import ServiceComponent from './components/ServiceComponent';
import HobbyComponent from './components/HobbyComponent';
import ContactComponent from './components/ContactComponent'
import HomePage from './components/HomePage'


const routes = [
    { path: '/',
      component: HomePage,
      children:[
          {
              path:'',
              component:HomeComponent,
          },
          {
              path:'Home',
              component:HomeComponent,
          },
          {
              path:'Research',
              component:ResearchComponent,
          },
          {
              path:'Publications',
              component:PublicationComponent,
          },
          {
              path:'Services',
              component:ServiceComponent,
          },
          {
              path:'Hobby',
              component:HobbyComponent,
          },
          {
              path:'Contact',
              component:ContactComponent,
          },
      ]},
]

// const router = createRouter({
//     history: createWebHashHistory(),
//     routes,
// });

const router = new RouterLink({
    routes,
    mode : 'hash'
})

const app = createApp(App);
app.use(HomeComponent);
app.use(ResearchComponent);
app.use(PublicationComponent);
app.use(ServiceComponent);
app.use(HobbyComponent);
app.use(ContactComponent);
app.use(router);
app.use(Antd).mount('#app');