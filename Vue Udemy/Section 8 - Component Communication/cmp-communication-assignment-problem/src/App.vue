// This is the 'main' app and has access to all other components.
// Therefore, the data for those components should be managed here.
// Sending data TO ActiveUser.vue
// Receiving emitted data FROM UserData.vue

<template>
    <div>
        <!-- Sending user name and age to Active User via props -->
        <active-user :name="user.name" :age="user.age"></active-user>
        <!-- set-data is emitted from UserData file and calls method setUserData -->
        <user-data @set-data="setUserData"></user-data>
    </div>
</template>

<script>
export default {
        data() {
            return {
                user: {
                    name: '',
                    age: ''
                }
            };
        },
        methods: {
            setUserData(name, age) {
                this.user = {
                    name: name,
                    age: age
                };
            }
        }
};
</script>
