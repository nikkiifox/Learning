const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      last_name: ''
    };
  },
  watch: {
    counter(value) {
      if(value > 50) {
        setTimeout(function() {
          this.coun
        })
        this.counter = 0;
      }
    }
  },
  computed: { // use computed for outputting properties
    fullname() { //do not name as data() item
      console.log("Running again..");
      if(this.name === '' || this.last_name === '') {
        return '';
      }
      return this.name + ' ' + this.last_name;
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetName() {
      this.name = '';
    },
    outputFullname() {
      if(this.name == '') {
        return '';
      }
      return this.name + ' ' + 'Spallino';
    }
  }
});

app.mount('#events');
