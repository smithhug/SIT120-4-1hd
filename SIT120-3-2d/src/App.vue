<script setup>
  import { ref, computed } from 'vue';
  import home from './components/home.vue';
  import projects from './components/projects.vue';
  import contact from './components/contact.vue';
  import Navbar from './components/NavBar.vue'

  const routes = {
      '/': home,
      '/Projects': projects,
      '/Contact-Us': contact
  };

  const currentPath = ref(window.location.hash);

  window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
  });

  const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'];
  });

  const projectlist = ref([
        {
            title: 'SIT120 3-1D',
            link: 'https://github.com/smithhug/SIT120-3-1d',
            thumbnail: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
        },
        {
            title: 'SIT120 1-3P',
            link: 'https://github.com/smithhug/SIT120-1-3p',
            thumbnail: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
        },
        {
            title: 'SIT120 2-2C',
            link: 'https://github.com/smithhug/SIT120-2-2C',
            thumbnail: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
        },
        {
            title: 'SIT120 2-3C',
            link: 'https://github.com/smithhug/SIT120-2-3c',
            thumbnail: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
        }
    ])

</script>

<template>
  <div class="container">
    <header>
      <div class="secondary_header">
        <Navbar/>
      </div>
    </header>
    <component :is="currentView" :projectlist="projectlist"></component>
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
