<template>
<section>
    <!-- When the form is submitted, emit the name and age to the main App.vue -->
    <form @submit.prevent="submitData">
    <input type="text" placeholder="Your name" v-model="enteredName">
    <input type="text" placeholder="Your age" v-model="enteredAge">
    <button>Set User Data</button>
    </form>
</section>
</template>

<script>
export default {
    emits: ['set-data'],
    data() {
        return {
            enteredName: '',
            enteredAge: ''
        };
    },
    methods: {
        submitData() {
            // Emits enteredName and enteredAge to App.vue
            this.$emit('set-data', this.enteredName, this.enteredAge);
        }
    }
};
</script>