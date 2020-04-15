<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import HelloWorld from "./components/HelloWorld.vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
</style>
