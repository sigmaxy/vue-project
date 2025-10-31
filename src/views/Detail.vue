<template>
    <h2>News Detail Page</h2>
    <p>This is the detail view for a specific news item.</p>
    <p>News ID: {{ id }}</p>
    <p>News Title: {{title }}</p>
</template>
<script setup lang="ts" name="Detail">
    defineProps<{ id: string; title: string }>();

</script>
<style scoped>
    h2 {    
        color: #333;
    }
    p {
        font-size: 16px;
        line-height: 1.5;
    }
</style>