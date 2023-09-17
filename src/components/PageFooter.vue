<template>
    <div class="container">
        <div class="grid">
            <p>
                Your one-stop-shop for all the latest gaming news. Keep up with the discussion as we play through our favourite games both new and old.
            </p>
        </div>
        <div class="grid">
            <h3> Want to be the frist to hear? </h3>
            <input placeholder="Enter your Email"/>
            <button>Submit</button>
        </div>
    </div>
</template>

<style>
.container {
        padding: 10px;
}
.grid {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    font-size: medium;
    padding: 20px;
    text-align: center;
    color: black;
}

@media (min-width: 1024px) {
    .container {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
}
</style>