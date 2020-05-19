<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div class="single-blog" v-for='(blog, index) in filteredBlogs' :key=index>
        <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow>{{ blog.title | to-uppercase }}</h2></router-link>
        <article>{{ blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
import SearchMixin from '../mixins/SearchMixin'

export default {
    data() {
        return {
            blogs: [],
            search: ''
        }
    },
    methods: {

    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            this.blogs = response.data.slice(0,10);
        });
    },
    computed: {
        
    },
    filters: {
        toUppercase(value) {
            return value.toUpperCase();
        }
    },
    directives: {
        'rainbow': {
            bind(el){
                el.style.color = "#" + Math.random().toString().slice(2,8);
            }
        }
    },
    mixins: [SearchMixin]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>