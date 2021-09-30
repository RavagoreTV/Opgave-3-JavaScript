Vue.createApp({
    data() {
        return {
            word: "",
            wordToUpper: "",
            wordToLower: ""
        }
    },
    methods: {
        makeList() 
        {
            console.log()
            this.wordToLower = this.word.toLowerCase(),
            this.wordToUpper = this.word.toUpperCase()
        }
    }
}).mount("#app")