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
            <h3>Projects</h3>
            <p>See the list of my most recent projects.</p>
            <p>If you wish to see more, please visit my GitHub page to thr right.</p>
            <div class="row">
                    <table>
                    <thead>
                    <tr>
                        <th>Thumbnail</th>
                        <th>Project Title</th>
                        <th>Link</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="project in projectlist">
                        <td><p class="thumbnail_align"> <img :src=project.thumbnail alt="" class="thumbnail"/> </p></td>
                        <td>{{ project.title }}</td>
                        <td>{{ project.link }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="righter_article">
            <img width="200" height="200" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
            <h2>GitHub</h2>
            <p>smithhug</p>
            <a href="https://github.com/smithhug">https://github.com/smithhug</a>
        </div>
    </section>
    <footer class="secondary_header footer">
        <div class="copyright">&copy;2023 - <strong>Hugo Smith</strong></div>
    </footer>
    </div>
</template>