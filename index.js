const app = Vue.createApp({
    data() {
        return {
            title: 'GOT',
            author: 'kenny',
            age: 95,
            show: true,
            books: [
                {
                    title: 'things fall apart', author: 'Chinua achebe', img: './assets/1.jpg', isFav: true
                },
                {
                   title: 'Ake, years of childhood', author: 'wole soyinka', img: './assets/2.jpg', isFav: true
                }, 
                {
                    title: 'purple hibiscus', author: 'chimamanda ngozi', img: './assets/3.jpg', isFav: false
                }
            ]
        }
    },

    methods: {
        changeTitle(e, arg) { /* here we can take in the arg as long as its passed to the func */
            this.title = "lord of the rings"
            console.log(e);
            console.log(arg);
        }, 
        toggleDisplay(){
            this.show = !this.show
        },
        toggleFav(book){
          book.isFav = !book.isFav
        }
    },
    /* computed properties is away to define data properties which depends on othee data */
    computed: {
        fliteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')