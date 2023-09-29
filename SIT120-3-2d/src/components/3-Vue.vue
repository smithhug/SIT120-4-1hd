<script setup>
    import { ref, computed, reactive } from 'vue';

    const bgobject = reactive({
        title: '',
        score: 0
    })
</script>

<template>
    <input v-model="bgobject.title"/>
    <input v-model.number="bgobject.score" type="number"/>

    <li v-for="(value, key) in bgobject">
        {{ key }}: {{ value }}
    </li>
</template>