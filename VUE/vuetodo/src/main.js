import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// createApp(App).use(router).mount('#app')

const app1 = createApp(App);
app1.use(router);
app1.mount('#app');


// 일일히 axios 접근해서 쓰지 않아도 되게 명시할거
// 이렇게 하면 $ax 로 쓸 수 있음 $http로하면 $http로 쓸 수 있음
app1.config.globalProperties.$ax = axios;