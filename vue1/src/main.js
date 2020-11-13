import Vue from 'vue'

import App from 'App.vue'
import { compilation } from 'webpack'
import { component } from 'vue/types/umd'
new Vue({
    el: '#app',
    component: {
        App
    },
    template: '<App/>'
})