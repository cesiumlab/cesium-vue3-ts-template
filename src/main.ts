import { createApp } from 'vue'
import App from './App.vue'
import { addsub } from './testjs' // 测试js代码载入，可以去掉

{
    // 测试js代码载入，可以去掉
    const test = addsub(1, 2, 3);
    console.log(`test: ${test}`);
}


createApp(App).mount('#app')
