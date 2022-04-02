<template>
  <div id="whole">
    <h2>{{ title }}</h2>
    <div id="list">
      <a v-for="slide in slides" :key="slide.id" id="slide" :href="slide.link">
        <h3>{{ slide.name }}</h3>
        <p>{{ slide.description }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: Array,
    title: String,
  },
};
</script>

<style scoped>
#whole {
  padding: 40px;
}
#list {
  display: flex;
  justify-content: space-evenly;
}
#slide {
  display: block;
  width: 400px;
  height: 300px;
  margin: 30px;
  border: 3px double #cccccc;
  text-decoration: none;
}
#slide:hover {
  opacity: 0.5;
}
#slide:visited {
  color: black;
}
#slide p {
  padding: 10px;
}
</style>
