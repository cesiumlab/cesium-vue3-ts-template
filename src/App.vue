<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->

  <div id="app" style="width: 100%; height: 100%; background: grey; position: relative;">
      <earth-comp></earth-comp>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import HelloWorld from './components/HelloWorld.vue';
import EarthComp from './components/CesiumContainer.vue'

@Options({
  components: {
    // HelloWorld,
    EarthComp
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
