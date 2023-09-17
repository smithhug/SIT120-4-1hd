<script setup>
    import { ref } from 'vue';
    import ArticleItem from './ArticleItem.vue';

    const articletitles = ref([
        {
            title: "Why Baldur's Gate III is GOTY"
        },
        {
            title: 'Starfield releases next week'
        },
        {
            title: 'How good is Metal Gear Solid 2: Sons of Liberty'
        }
    ])
</script>
<template>
    <div>
        <ul>
            <li><a>Featured Articles</a></li>
        </ul>
    </div>
    <div class="container">
        <template v-for="article in articletitles">
            <div class="grid"><ArticleItem :title="article.title"/></div>
        </template>
    </div>
</template>

<style scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #dddddd;
        text-align: center;
    }

    li a {
        padding: 20px;
        background-color: #dddddd;
        font-size: x-large;
        display: inline-block;
    }
    .container {
        padding: 10px;
    }
    .grid {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 20px;
        font-size: 30px;
        text-align: center;
    }

    @media (min-width: 1024px) {
        .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 10px;
    }
    .grid {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 20px;
        font-size: 30px;
        text-align: center;
    }
    }
</style>