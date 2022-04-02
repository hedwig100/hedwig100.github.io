<template>
  <div id="whole">
    <h2>{{ title }}</h2>
    <p v-if="slides.length > 3">You can scroll to the right.</p>
    <div id="list">
      <div v-for="slide in slides" :key="slide.id">
        <div v-if="typeof slide.link === 'undefined'" id="slide">
          <h3>{{ slide.name }}</h3>
          <p>{{ slide.description }}</p>
        </div>
        <a v-else id="slide" :href="slide.link" target="_blank">
          <h3>{{ slide.name }}</h3>
          <p>{{ slide.description }}</p>
        </a>
      </div>
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
  padding-top: 40px;
}
#list {
  display: flex;
  justify-content: left;
  overflow-x: auto;
}
#slide {
  display: block;
  min-width: 400px;
  width: 400px;
  height: 250px;
  margin: 30px;
  border: 3px double #cccccc;
  text-decoration: none;
}
#list a:hover {
  opacity: 0.5;
}
#list a:visited {
  color: black;
}
#slide p {
  padding: 10px;
}
</style>
