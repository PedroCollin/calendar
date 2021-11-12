import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';




import 'primevue/resources/themes/saga-blue/theme.css' ;      
import 'primevue/resources/primevue.min.css' ;               
import 'primeicons/primeicons.css' ;

import InputText from 'primevue/inputtext';
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';


const app = createApp(App);



app.use(store);
app.use(router);
app.use(PrimeVue);

app.component('InputText', InputText);
app.component('Carousel', Carousel);
app.component("Button",Button);

app.mount('#app');

