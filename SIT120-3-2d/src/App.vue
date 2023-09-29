<script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import Home from './components/home.vue';
  import Projects from './components/projects.vue';
  import Contact from './components/contact.vue';
  import Navbar from './components/NavBar.vue';
  import MyFooter from './components/Footer.vue';

  const routes = {
    '/': Home,
    '/projects': Projects,
    '/contact-us': Contact,
  };

  const currentRoute = useRoute();
  const currentPath = ref(currentRoute.path);

  onMounted(() => {
    currentPath.value = currentRoute.path;
  });

  const currentView = computed(() => {
    return routes[currentPath.value] || Home;
  });

  let projectlist = ref([]);

  async function loadProjectList() {
    try {
      const response = await fetch('/src/projectsjson.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      projectlist.value = await response.json();

    } catch (error) {
      console.error(error);
    }
  }

  loadProjectList();

</script>

<template>
  <div class="container">
    <header>
      <div class="secondary_header">
        <Navbar/>
      </div>
    </header>
    <router-view :projectlist="projectlist"></router-view>
    <footer class="secondary_header footer">
        <MyFooter/>
    </footer>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
