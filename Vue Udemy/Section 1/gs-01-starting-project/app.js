//import Vue.js on index.html
//define desired end result and the data we need, and let Vue figure out what needs created in the DOM

//Vue is global object available via import
Vue.createApp({ 
    //here is where you configure the needed data
    //this must be called 'data' (it's a property named 'data' that has a function)
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    //here is where to define the methods (functions)
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }

}).mount('#app'); //id selector #app 