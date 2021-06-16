<template>
    <h1>Active User</h1>
    <h2> Name: {{ name }} </h2>
    <h3> Age: {{ age }} </h3>
</template>

<script>
export default {
    props: ['name', 'age']
};
</script>

