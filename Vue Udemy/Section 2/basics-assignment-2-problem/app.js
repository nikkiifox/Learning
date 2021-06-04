const app = Vue.createApp({
    data() {
        return {
            input: '',
            confirmedInput: ''
        };
    },

    methods: {
        alert() {
            alert('You are doing amazing sweetie');
        },

        setInput(event) {
            this.input = event.target.value;
        },

        confirmInput(event) {
            this.confirmedInput = event.target.value;
        }
    }
});

app.mount('#assignment');