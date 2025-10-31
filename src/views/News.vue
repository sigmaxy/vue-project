<template>
    <h2>This is News</h2>
    <ul>
        <li v-for="news in newsList.newsItems" :key="news.id">
            <RouterLink :to="{ name: 'xiangqing', params: { id: news.id, title: news.title } }">{{ news.title }}</RouterLink>
        </li>
    </ul>
    <div class="news-detail">
        <RouterView />
    </div>
</template>
<script setup lang="ts" name="News">    
    import { reactive } from 'vue';
    import { RouterLink, RouterView } from 'vue-router';    

    const newsList = reactive({
        newsItems: [
            { id: 1, title: "News Item 1" },
            { id: 2, title: "News Item 2" },
            { id: 3, title: "News Item 3" },
        ]
    });
</script>   
<style scoped>
    .news-detail {
        margin-top: 20px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f9f9f9;
    }
</style>