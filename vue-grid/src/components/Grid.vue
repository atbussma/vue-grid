<template>
    <div class="grid" v-bind:style="{ 'grid-template-columns': 'repeat(' + numberOfColumns + ', 1fr)' }">
        <div
            class="grid-cell"
            v-for="(cell, index) in gridCells"
            v-bind:class="computeCustomClasses">
            {{index}}-{{cell}}
        </div>
    </div>
</template>

<script>
export default {
    name: "Grid",
    props: {
        numberOfColumns: Number,
        gridCells: Array,
        computeCustomClasses: Function,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.grid {
    display: grid;
    column-gap: 5px;
    padding-left: 30px;
    padding-right: 30px;
    border: dotted red 2px;
}
.grid .grid-cell {
  display: inline-block;
  border: solid blue 1px;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 5px;
  background-color: #cfcfcf;
}
</style>