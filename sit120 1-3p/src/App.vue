<script setup>
  import { ref, computed } from 'vue';
  import OneHTML from './components/1-HTML.vue';
  import OneCSS from './components/2-CSS.vue'
  import OneVue from './components/3-Vue.vue'
  import Navbar from './components/NavBar.vue'

  const routes = {
      '/': OneHTML,
      '/CSS': OneCSS,
      '/Vue': OneVue
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
    <Navbar/>
  </header>
  <component :is="currentView"></component>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
