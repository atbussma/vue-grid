<template>
  <div id="app">
    <h1>Vue.js - CSS Grid</h1>
    <grid :numberOfColumns=2 :gridCells="['F', 'F', 'F', 'F']" />
    <grid v-bind="{
      numberOfColumns: 4,
      gridCells: [
        'E', 'E', 'E', 'E',
        'E', 'E', 'E', 'E',
        'E', 'E', 'E', 'E'
      ],
    }" />
    <grid v-bind="gridData" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Grid from "./components/Grid.vue";

export default {
  name: "app",
  components: {
    Grid
  },
  computed: mapState({
    gridData: state => state.gridData,
  }),
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>