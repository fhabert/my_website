<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Footer/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Footer
  }
}
</script>

<style>
#app {
  font-family: "Open-sans", sans-serif;
  margin: 0;
  bottom: 0;
  background: #f9fdff;
}
a {
  text-decoration: none;
}
</style>
