<template>
  <div id="whole">
    <h2>{{ title }}</h2>
    <!--has link-->
    <div id="list" v-if="hasLink">
      <a v-for="slide in slides" :key="slide.id" id="slide" :href="slide.link">
        <h3>{{ slide.name }}</h3>
        <p>{{ slide.description }}</p>
      </a>
    </div>
    <!--doesn't have link-->
    <div id="list" v-if="!hasLink">
      <div v-for="slide in slides" :key="slide.id" id="slide">
        <h3>{{ slide.name }}</h3>
        <p>{{ slide.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: Array,
    title: String,
    hasLink: Boolean,
  },
};
</script>

<style scoped>
#whole {
  padding-top: 40px;
}
#list {
  display: flex;
  justify-content: space-evenly;
}
#slide {
  display: block;
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
