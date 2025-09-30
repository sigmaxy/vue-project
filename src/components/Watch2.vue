<template>
    <div class="watch2">
        <h2>watch2 Component</h2>
        <p>name: {{ person.name }}</p>
        <p>age: {{ person.age }}</p>
        <button @click="changeName">Change Name</button>
        <button @click="changeAge">Change Age</button>
        <button @click="changePerson">Replace Person</button>
    </div>
</template>
<script lang="ts">
    import { ref,watch } from "vue";
    export default {
        name: "Watch2",
    };
</script>  
<script setup lang="ts">
    let person = ref({ name: "Alice", age: 25 });
    function changeName() {
        person.value.name = person.value.name === "Alice" ? "Bob" : "Alice";
    }
    function changeAge() {
        person.value.age += 1;
    }
    function changePerson() {
        person.value = { name: "Charlie", age: 30 };
    }


    watch(person, (newVal, oldVal) => {
        console.log(`Person changed from ${JSON.stringify(oldVal)} to ${JSON.stringify(newVal)}`);
    }, { deep: true} // 深度监听
    );
</script>
<style scoped>
    .watch2 {
        background-color: lightcoral;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
        margin-top: 20px;
    }
    button {
        margin-right: 10px;
    }
</style>