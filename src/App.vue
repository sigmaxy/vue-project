<template>
  <div id="app">
    <h1>Hello World</h1>
    <TSPerson />
    <RefTag />
    <WatchEffect />
    <Watch3 />
    <Watch2 />
    <Watch1 />
    <Computed />
    <Car />
    <Person />
  </div>
</template>

<script lang="ts">
    import Person from './components/Person.vue'
    import Car from './components/Car.vue';
    import Computed from './components/Computed.vue';
    import Watch1 from './components/Watch1.vue';
    import Watch2 from './components/Watch2.vue';
    import Watch3 from './components/Watch3.vue';
    import WatchEffect from './components/WatchEffect.vue';
    import RefTag from './components/RefTag.vue';
    import TSPerson from './components/TSPerson.vue';
    export default {
        name: 'App',
        components: {
            Person,
            Car,
            TSPerson,
            Computed,
            Watch1,
            Watch2,
            Watch3,
            WatchEffect,
            RefTag
        }
    }
</script>

<style scoped>
    #app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
