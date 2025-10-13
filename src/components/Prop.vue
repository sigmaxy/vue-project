<template>
    <div class="prop">
        <h2>Prop Component</h2>
        <h3>Received Props:</h3>
        <ul>
            <li v-for="(value, key) in props" :key="key">{{ key }}: {{ value }}</li>
        </ul>
        <p>This is a prop component.</p>
    </div>
</template>
<script lang="ts">
    export default {
        name: "Prop",
    };
</script>
<script setup lang="ts">
    // No specific logic needed for this simple component
    import { defineProps } from 'vue';
    const props = defineProps<{
        a: string;
        b: string;
    }>();
    console.log('Prop a:', props.a);
    console.log('Prop b:', props.b);
</script>
<style scoped>
    .prop {
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