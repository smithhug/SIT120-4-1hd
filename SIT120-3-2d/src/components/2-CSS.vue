<template>
    <div class="container">
        <img src="../assets/banner.jpg" class="grid">
        <img src="../assets/banner.jpg" class="grid">
        <img src="../assets/banner.jpg" class="grid">
    </div>
    <img src="../assets/banner.jpg" class="responsive">
</template>

<style scoped>
.responsive {
    width: 100%;
    height: auto;
}

.container {
    padding: 10px;
}
.grid {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    width: 95%;
}

@media (min-width: 150vh) {
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 10px;
    }
    .grid {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 20px;
    }
}
</style>