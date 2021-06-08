const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            paragraphVisible: true,
            inputBackgroundColor: ''
        };
    },
    computed: {
        paraClasses() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.paragraphVisible,
                hidden: !this.paragraphVisible
            };
        }
    },
    methods: {
        togglePVis() {
            this.paragraphVisible = !this.paragraphVisible;
        }
    }
});

app.mount('#assignment');