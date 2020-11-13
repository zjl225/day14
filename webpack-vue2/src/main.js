//导入vue实例，挂载app组件
import Vue from 'vue'
//导入App组件
import App from './App.vue'

new Vue({
    el: '#app',
    components: {
        App: App//组件名：组件对象
    },
    template: '<App/>'
})