<template>
    <div class="person">
        <h2>Person Component</h2>
        <p>Name: {{ person.name }}</p>
        <p>Age: {{ person.age }}</p>
        <button @click="changeName">Change Name</button>
        <button @click="changeAge">Increase Age</button>
        <button @click="showTel">Show Tel</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Person",
    };
</script>
<script setup lang="ts">
    import { reactive } from "vue";

    let person = reactive({
        name: "Alice",
        age: 25,
        tel: "987-654-3210"
    });

    function changeName() {
        person.name = person.name === "Alice" ? "Bob" : "Alice";
    }
    function changeAge() {
        person.age += 1;
    }
    function showTel() {
        alert(`Tel: ${person.tel}`);
    }
</script>
<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
        margin-top: 20px;
    }
    button {
        margin-right: 10px;
    }
</style>