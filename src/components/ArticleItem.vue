<script setup>
    defineProps({
        title: String
    })
</script>

<template>
    <div>
        <h3 v-bind:class="{'heading' : true}">{{ title }}</h3>
        <img v-bind:class="{'thumbnail' : true}" src="@/assets/banner.jpg"/>
    </div>
</template>

<style scoped>
    .thumbnail {
        width: 300px;
        height: 300px;
    }
    .heading {
        color: black;
    }
</style>