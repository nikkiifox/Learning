const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    increaseCounter(num) {
      this.counter = this.counter + num;
    },

    decreaseCounter(num) {
      this.counter = this.counter - num;
    },

    setName(event) {
      this.name = event.target.value; // javascript comes with built-in feature which passes information
      // about an event to a function, then use event.target
      // to get the input value (from input on line 24 in html file)
    },

    submitForm(event) {
      // event.preventDefault(); //tells form not to submit and reload page
      alert("Submitted!");
    },

    confirmName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
