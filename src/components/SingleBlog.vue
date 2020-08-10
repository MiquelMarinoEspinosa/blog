<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <p>Author: {{ blog.author }}</p>
    <p>Categories:</p>
    <ul>
      <li v-for="(category, index) in blog.categories" :key="index">
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    this.$http.get("http://localhost:8081/blog/" + this.id).then((response) => {
      this.blog = response.data;
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
