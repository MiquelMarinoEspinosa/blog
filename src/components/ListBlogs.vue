<template>
  <div id="show-blogs">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div
      class="single-blog"
      v-for="(blog, index) in filteredBlogs"
      :key="index"
    >
      <h2>{{ blog.title | uppercase }}</h2>
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
      this.blogs = response.data.slice(0, 10);
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
</style>
