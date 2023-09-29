<script>
    export default {
        props: {
            projectlist: Array,
        },
    };
</script>

<template>
    <div class="container">
    <section>
        <div class="left_article">
            <h3>Welcome</h3>
            <p>My name is Hugo Smith, I am a Computer Science student in my third year at Deakin University in Melbourne, Australia.</p>
            <p>Please see my projects in the Projects Tab for more information about my current skills and past projects.</p>
            <p>If you wish to make contact with me about a potential job lisitng please see the Contact Us page.</p>
        </div>
        <div class="right_article"><img src="../assets/profile.jpg" alt="" width="400" height="200" class="placeholder"/></div>
    </section>
    <div class="row">
        <template v-for="project in projectlist">
            <div class="columns">
            <p class="thumbnail_align"> <img :src=project.thumbnail alt="" class="thumbnail"/> </p>
            <h4>{{ project.title }}</h4>
            <a :href=project.link>{{ project.link }}</a>
            </div>
        </template>
    </div>
    </div>
</template>