<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div
      class="single-blog"
      v-for="(blog, index) in filteredBlogs"
      :key="index"
    >
      <router-link v-bind:to="'/blog/' + blog.id"
        ><h2>{{ blog.title | uppercase }}</h2></router-link
      >
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import SearchMixin from "../mixins/SearchMixin";

export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  methods: {},
  created() {
    this.$http.get("http://localhost:8081/blog").then((response) => {
      this.blogs = response.data;
    });
  },
  computed: {},
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    },
  },
  mixins: [SearchMixin],
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
a:link {
  color: black;
  text-decoration: none;
}

a:visited {
  color: black;
  text-decoration: none;
}

a:hover {
  color: grey;
  text-decoration: none;
}

/* selected link */
a:active {
  color: black;
  text-decoration: none;
}
</style>
