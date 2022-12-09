import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import HomeComponent from './components/HomeComponent';
import ResearchComponent from './components/ResearchComponent';
import PublicationComponent from './components/PublicationComponent';
import ServiceComponent from './components/ServiceComponent';
import CVComponent from './components/CVComponent';
import ContactComponent from './components/ContactComponent'
import Component005 from './components/Component005'
import Component005_HainanMin from './components/Component005_HainanMin'

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
              path:'CV',
              component:CVComponent,
          },
          {
              path:'Contact',
              component:ContactComponent,
          },
          {
            path:'005',
            component:Component005,
          },
          {
            path:'005_HainanMin',
            component:Component005_HainanMin,
          },

      ]},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);
app.use(HomeComponent);
app.use(ResearchComponent);
app.use(PublicationComponent);
app.use(ServiceComponent);
app.use(CVComponent);
app.use(ContactComponent);
app.use(Component005);
app.use(Component005_HainanMin);
app.use(router);
app.use(Antd).mount('#app');