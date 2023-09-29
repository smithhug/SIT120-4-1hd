<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/resume">Resume</router-link></li>
            <li><router-link to="/contact-us">Contact Us</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/adminlogin">Log In</router-link></li>
        </ul>
    </nav>
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
        animation-name: launch;
        animation-duration: 1s;
        font-size: x-large;
        display: inline-block;
    }

    li a:hover {
        background-color: #111;
    }

    @keyframes launch {
        from {font-size: xx-small;}
        to {font-size: x-large;}
    }

</style>