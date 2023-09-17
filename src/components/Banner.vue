<template>
    <div class="bannerimg">
        <div class="contents">
            <h1>Welcome to my website</h1>
        </div>
    </div>
</template>

<style scoped>
body, html {
    height: 100%;
}
.contents {
    text-align: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}

.bannerimg {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/banner.jpg');
    height: 50vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }
</style>