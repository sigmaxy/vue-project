<template>
    <div class="car">
        <h2>Car Component</h2>
        <p>Model: {{ state.model }}</p>
        <p>Year: {{ state.year }}</p>
        <button @click="changeModel">Change Model</button>
        <button @click="changeYear">Increase Year</button>
        <button @click="changeCar">Change Car</button>
    </div>
</template>

<style scoped>
    .car {
        background-color: eee;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
        margin-top: 20px;
    }
        button {
        margin-right: 10px;
    }
</style>
<script lang="ts">
    export default {
        name: "Car",
    };
</script>
<script setup lang="ts">
    import { reactive } from "vue";

    const state = reactive({
        model: "Toyota",
        year: 2020
    });

    function changeModel() {
        state.model = state.model === "Toyota" ? "Honda" : "Toyota";
    }

    function changeYear() {
        state.year += 1;
    }

    function changeCar() {
        let newcar = { model: "Ford", year: 1996 };
        Object.assign(state, newcar);
    }

</script>