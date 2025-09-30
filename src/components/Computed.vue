<template>
    <div class="computed">
        Last Name: <input type="text" v-model="lastName" />
        <br>
        First Name: <input type="text" v-model="firstName" />
        <br>
        <p>Full Name: {{ fullName }}</p>
        <button @click="setFullName('Doe Jane')">Set Full Name to 'Doe Jane'</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: "computed",
    };
</script>
<script setup lang="ts">
    import { ref, computed } from "vue";

    let lastName = ref("Smith");
    let firstName = ref("John");

    let fullName = computed({
        get(){
            return `${lastName.value} ${firstName.value}`; 
        },
        set() {
            console.log("Full Name changed");
        }
    });
    function setFullName(newFullName: string) {
        let names = newFullName.split(" ");
        if (names.length >= 2) {
            lastName.value = names[0];
            firstName.value = names[1];
        }
    }
</script>
<style scoped>
    .computed {
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