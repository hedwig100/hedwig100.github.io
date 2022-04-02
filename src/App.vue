<template>
  <my-header></my-header>
  <div id="intro">
    <img src="./assets/black.png" />
    <div id="prof">
      <h2>hedwig</h2>
      <p>I'm a student.</p>
    </div>
  </div>
  <slide-table :slides="projects" :title="'Projects'"></slide-table>
  <my-footer></my-footer>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import SlideTable from "./components/SlideTable.vue";
import projects from "./data.js";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
    SlideTable,
  },
  data() {
    return {
      projects,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
#intro {
  display: flex;
  margin: 30px;
}
#intro img {
  width: 400px;
}
#prof {
  margin-left: 100px;
}
#prof h2 {
  display: block;
  margin: 20px;
}
#prof p {
  display: block;
  margin: 20px;
}
</style>
