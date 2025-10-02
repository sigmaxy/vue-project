<template>
    <div class="RefTag">
        <h2>Ref Tag</h2>
        <h3 ref="refTagh3">This is a ref tag component</h3>
        <button @click="showLog">Button 1</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: "RefTag",
    };
</script>
<script setup lang="ts">
    import { ref } from "vue";
    let refTagh3 = ref();

    function showLog() {
        console.log(refTagh3.value);
    }

</script>
<style scoped>
    .RefTag {
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