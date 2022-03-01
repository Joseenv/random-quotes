const App = {
    data() {
        return {
            active: false,
            API : 'https://api.adviceslip.com/advice',
            quote : {
                advice: 'Click on the button for start🎲'
            }
        }
    },
    methods: {
        async getQuote() {
            const request = await fetch(`${this.API}`);
            const response = await request.json();
            this.quote = response.slip;
        },

    },
}

Vue.createApp(App).mount('#app');