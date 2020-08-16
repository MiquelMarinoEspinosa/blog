<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    "app-header": Header,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito Semibold";
}
</style>
