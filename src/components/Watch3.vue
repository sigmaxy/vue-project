<template>
    <div class="watch3">
        <h2>Watch3 Component</h2>
        <h3>name: {{ person.name }}</h3>
        <h3>fake age: {{ person.age.fakeage }}</h3>
        <h3>real age: {{ person.age.realage }}</h3>
        <button @click="changeName">Change Name</button>
        <button @click="changeAge">Change Age</button>
        <button @click="changePerson">Replace Person</button>
    </div>
</template>
<script lang="ts">
    import { reactive,watch } from "vue";
    export default {
        name: "Watch3",
    };
</script>  
<script setup lang="ts">
    let person = reactive({ name: "Alice", age: { fakeage: 18, realage: 38 } });
    function changeName() {
        person.name = person.name === "Alice" ? "Bob" : "Alice";
    }
    function changeAge() {
        person.age.fakeage += 1;
        person.age.realage += 1;
    }
    function changePerson() {
        Object.assign(person, { name: "Charlie", age: { fakeage: 20, realage: 40 } });
    }
    watch(person, (newVal, oldVal) => {
        console.log(`Person changed from ${JSON.stringify(oldVal)} to ${JSON.stringify(newVal)}`);
    }, { deep: true} // 深度监听
    );
</script>
<style scoped>
    .watch3 {
        background-color: lightblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
        margin-top: 20px;
    }
    button {
        margin-right: 10px;
    }
</style>