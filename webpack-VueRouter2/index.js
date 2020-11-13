
const User = {
    computed: {
        userId() {
            console.log(this.$route)
            return "123"
        }
    },
    template: '<div>User {{$route.params.id}}</div>'
}

const router = new VueRouter({
    routes: [
        { path: '/user/:id', component: User }
    ]
})

new Vue({
    el: '#app',
    router: router,
})