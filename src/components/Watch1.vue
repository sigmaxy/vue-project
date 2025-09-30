<template>
    <div class="watch1">
        <h2>Watch1 Component</h2>
        <p>Count: {{ count }}</p>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script lang="ts">
    import { ref,watch } from "vue";

    export default {
        name: "Watch1",
    };
</script>

<style scoped>
    .watch1 {
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
<script setup lang="ts">
    let count = ref(0);

    function increment() {
        count.value++;
    }

    function decrement() {
        count.value--;
    }
    const stopWatch = watch(count, (newVal, oldVal) => {
        console.log(`Count changed from ${oldVal} to ${newVal}`);
        if (newVal >= 10) {
            console.log("Count reached 10, stopping watch.");
            stopWatch(); // 停止监听
        }
    });
</script>