<template>
    <h2>this is about</h2>
</template>

<script lang="ts">
    export default {
        name: "About",
    };
</script>

<script setup lang="ts">
    import { defineComponent } from 'vue';
    defineComponent({
        name: "About",
    });
</script>
<style scoped>
    h2 {
        color: green;
    }
</style>