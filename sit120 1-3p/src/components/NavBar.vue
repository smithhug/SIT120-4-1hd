<template>
    <div>
        <ul>
            <li><a href="/">HTML</a></li>
            <li><a href="#/CSS">CSS</a></li>
            <li><a href="#/Vue">Vue</a></li>
        </ul>
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

    li {
        display: inline;
    }

    li a {
        padding: 20px;
        background-color: #dddddd;
        font-size: x-large;
        display: inline-block;
    }

    li a:hover {
        background-color: #111;
    }

</style>