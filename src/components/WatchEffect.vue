<template>
    <div class="watchEffect">
        <h2>WatchEffect Component</h2>
        <h3>Current Temperature: {{ temperature }}°C</h3>
        <h3>Current height: {{ height }} cm</h3>
        <button @click="increaseTemp">Increase Temperature</button>
        <button @click="decreaseTemp">Decrease Temperature</button>
        <button @click="increaseHeight">Increase Height</button>
        <button @click="decreaseHeight">Decrease Height</button>
    </div>
</template>
<script lang="ts">
    import { ref, watchEffect } from "vue";
    export default {
        name: "WatchEffect",
    };
   
</script>
<script setup lang="ts">
    const temperature = ref(20);
    const height = ref(160);
    function increaseTemp() {
        temperature.value += 10;
    }
    function decreaseTemp() {
        temperature.value -= 10;
    }
    function increaseHeight() {
        height.value += 10;
    }
    function decreaseHeight() {
        height.value -= 10;
    }
    watchEffect(() => {
        if (temperature.value > 30) {
            console.log("It's too hot!");
        } else if (temperature.value < 10) {
            console.log("It's too cold!");
        } else {
            console.log("The temperature is just right.");
        }   
        if (height.value > 200) {
            console.log("You are very tall!");
        } else if (height.value < 100) {
            console.log("You are quite short!");
        } else {
            console.log("Your height is average.");
        }
    });
</script>

<style scoped>
    .watchEffect {
        background-color: lightgreen;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
        margin-top: 20px;
    }
    button {
        margin-right: 10px;
    }
</style>
