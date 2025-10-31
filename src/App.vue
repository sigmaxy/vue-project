<template>
    <div id="app">
        <h2>Vue Route</h2>
        <div class="navigate">
            <RouterLink replace to="/home" active-class="active">Home</RouterLink> |
            <RouterLink replace to="/about" active-class="active">About</RouterLink> |
            <RouterLink replace to="/news" active-class="active">News</RouterLink> |
        </div>
        <div class="main-content">
            
            <RouterView />
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'App',
    };
</script>
<script setup lang="ts">
    import { RouterView, RouterLink } from 'vue-router';
</script>
<style scoped>
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    .navigate {
        margin-bottom: 20px;
    }
    .active {
        font-weight: bold;
    }
    a {
        text-decoration: none;
        color: blue;
    }
    a:hover {
        text-decoration: underline;
    }
    .main-content {
        background-color: white;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>


<!-- <template>
  <div id="app">
    <h1>Hello World</h1>
    <Hooks />
    <Prop a="123" b="456" />
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
    import Prop from './components/Prop.vue';
import Hooks from './components/Hooks.vue';
    export default {
        name: 'App',
        components: {
            Person,
            Car,
            Prop,
            TSPerson,
            Computed,
            Watch1,
            Watch2,
            Watch3,
            WatchEffect,
            RefTag,
            Hooks
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
</style> -->
