<template>
    <div class="person">
        <h2>Person Component</h2>
        <p>Name: {{ person.name }}</p>
        <p>Age: {{ person.age }}</p>
        <p>Tel: {{ person.tel }}</p>
        <h3>Person List:</h3>
        <ul>
            <li v-for="p in personList" :key="p.id">
                {{ p.name }} - {{ p.age }} - {{ p.tel }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="TSPerson">
import { type PersonInterface } from '@/types';  
import { ref } from 'vue';

const person = ref<PersonInterface>({
    id: '1',
    name: 'John Doe',
    age: 30,
    tel: '123-456-7890'
});
const personList = ref<PersonInterface[]>([
    { id: '1', name: 'John Doe', age: 30, tel: '123-456-7890' },
    { id: '2', name: 'Jane Smith', age: 25, tel: '987-654-3210' }
]);
</script>
<style scoped>  
    .person {
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