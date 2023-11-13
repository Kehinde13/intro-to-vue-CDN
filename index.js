const app = Vue.createApp({
    data() {
        return {
            title: 'GOT',
            author: 'kenny',
            age: 95,
            show: true
        }
    },

    methods: {
        changeTitle() {
            this.title = "lord of the rings"
        }, 
        toggleDisplay(){
            this.show = !this.show
        }
    }
})

app.mount('#app')