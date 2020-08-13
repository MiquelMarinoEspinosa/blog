<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" required v-model="blog.title" />
      <label>Blog Content:</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxes">
        <label>Vue</label>
        <input type="checkbox" value="vue" v-model="blog.categories" />
        <label>React</label>
        <input type="checkbox" value="react" v-model="blog.categories" />
        <label>Angular</label>
        <input type="checkbox" value="angular" v-model="blog.categories" />
        <label>Nodejs</label>
        <input type="checkbox" value="nodejs" v-model="blog.categories" />
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="(author, index) in authors" :key="index">
          {{ author }}
        </option>
      </select>
      <button @click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog categories:</p>
      <ul>
        <li v-for="(category, index) in blog.categories" :key="index">
          {{ category }}
        </li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: ["Luke Winslow", "Mike Fernandez", "Don Hattaway"],
      submitted: false,
    };
  },
  methods: {
    post() {
      this.$http.post("http://localhost:8081/blog", this.blog).then(() => {
        this.submitted = true;
      });
    },
  },
};
</script>

<style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
