<template>
    <div class="hooks">
        <h2>Hooks Example</h2>
        <h2>Sum : {{ sum }} </h2>
        <button @click="addToSum(1)">Add 1</button>
        <button @click="addToSum(5)">Add 5</button>
        <hr/>
        <img v-for="(dog, index) in dogList" :key="index" :src="dog" height="200" style="margin-right: 10px;"/>
        <br/>
        <button @click="getDogs">Get Dogs</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Hooks",
    };
</script>
<script setup lang="ts">
    import useDog from '@/hooks/useDog';
    import { useSum } from '@/hooks/useSum';

    const { dogList, getDogs } = useDog();
    const { addToSum, sum } = useSum();
</script>
<style scoped>
    .hooks {
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