<script setup>
  import { ref, computed } from 'vue';
  import Homepage from './pages/Homepage.vue';
  import Dashboardpage from './pages/Dashboardpage.vue';
  import ContactUs from './pages/ContactUs.vue';
  import NavBar from './components/NavBar.vue';

  const routes = {
        '/': Homepage,
        '/Dashboard': Dashboardpage,
        '/Contact-Us': ContactUs,
    };

    const currentPath = ref(window.location.hash);

    window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash;
    });

    const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'];
    });
</script>

<template>
  <header>
    <NavBar/>
  </header>

  <main>
    <component :is="currentView"></component>
  </main>
</template>

<style scoped>
  
</style>
