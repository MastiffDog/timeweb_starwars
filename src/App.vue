<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
}
</script>

<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css";
</style>
