<template>
  <div id="single-blog">
      <h1>{{ blog.title }}</h1>
      <article>{{ blog.body }}</article>
  </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then((response) => {
            console.log(response.data);
            this.blog = response.data;
        })
    }
}
</script>

<style>
#single-blog {
    max-width: 960px;
    margin: 0 auto;
}
</style>