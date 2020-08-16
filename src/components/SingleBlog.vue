<template>
  <div id="single-blog">
    <div v-if="success">
      <h1>{{ blog.title }}</h1>
      <article>{{ blog.content }}</article>
      <p>Author: {{ blog.author }}</p>
      <p>Categories:</p>
      <ul>
        <li v-for="(category, index) in blog.categories" :key="index">{{ category }}</li>
      </ul>
    </div>
    <div v-else>
      <h1>Blog not found</h1>
      <article>ID: {{ id }}</article>
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      success: true,
      error: "",
    };
  },
  created() {
    this.$http
      .get("http://localhost:8081/blog/" + this.id)
      .then((response) => {
        this.blog = response.data;
        this.success = true;
        this.error = "";
      })
      .catch((error) => {
        this.success = false;
        this.error = error;
      });
  },
};
</script>

<style>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>
