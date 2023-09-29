<template>
    <div class="blog-page">
      <h2>Blog Posts</h2>
      <ul>
        <li v-for="blog in blogs" :key="blog.id" @click="viewBlog(blog.id)">
          {{ blog.title }}
        </li>
      </ul>
  
      <div v-if="selectedBlog">
        <h3>{{ selectedBlog.title }}</h3>
        <p>{{ selectedBlog.body }}</p>
        <button @click="editBlog(selectedBlog.id)" v-if="isAdmin">Edit</button>
        <button @click="deleteBlog(selectedBlog.id)" v-if="isAdmin">Delete</button>
      </div>
  
      <form @submit.prevent="saveBlog">
        <div v-if="isAdmin">
          <h2 v-if="!editing">Add New Blog</h2>
          <h2 v-if="editing">Edit Blog</h2>
          <label for="blogTitle">Title:</label>
          <input type="text" id="blogTitle" v-model="formData.title" />
          <label for="blogBody">Body:</label>
          <textarea id="blogBody" v-model="formData.body"></textarea>
          <button type="submit">{{ editing ? 'Update' : 'Create' }}</button>
        </div>
      </form>
    </div>
</template>
  
<script>
  export default {
    computed: {
      isAdmin() {
        return this.$sharedState.isLoggedIn;
      },
    },
    data() {
      return {
        blogs: [
          { id: 1, title: '3-1d', body: 'Overall I found implementation of these concepts not too difficult in practice, however it was difficult \nto find a use for a youtube video, watchers, methods or computed parameters within the context of \nthe website I was building.' },
          { id: 2, title: '1-3p', body: 'At the time of writing this, I have already demonstrated these concepts in other tasks as I approached each Ontrack task based on the deadline date and not in sequence. This made it incredibly easy to implement difficult features such as routing as I had experience doing this in other tasks using Vue. I designed the pages initially using Adobe Dreamweaver to create 3 aestheticallypleasing HTML pages. I then picked these apart to create three vue components for a homepage, project page and contact us page. I decided to list 4 previous projects as links on the homepage and as a table on the projects page. On the final page is a contact form.' },
        ],
        selectedBlog: null,
        formData: {
          title: '',
          body: '',
        },
        editing: false,
      };
    },
    methods: {
      viewBlog(id) {
        this.selectedBlog = this.blogs.find((blog) => blog.id === id);
      },
      editBlog(id) {
        this.formData = { ...this.selectedBlog };
        this.editing = true;
      },
      saveBlog() {
        if (this.editing) {
          const index = this.blogs.findIndex((blog) => blog.id === this.selectedBlog.id);
          if (index !== -1) {
            this.blogs[index] = { ...this.formData };
            this.editing = false;
          }
        } else {
          this.blogs.push({
            id: this.blogs.length + 1,
            ...this.formData,
          });
        }
        this.clearForm();
      },
      deleteBlog(id) {
        const index = this.blogs.findIndex((blog) => blog.id === id);
        if (index !== -1) {
          this.blogs.splice(index, 1);
          this.clearForm();
        }
      },
      clearForm() {
        this.formData = { title: '', body: '' };
        this.selectedBlog = null;
      },
    },
  };
</script>
  
<style scoped>
  .blog-page {
        margin: 5%;
    }

  * {
    color: black;
  }
</style>
  