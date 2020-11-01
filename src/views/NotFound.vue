<template>
  <div class="not_found">
    <h1>404 Not Found</h1>
    <h2>Oops! It seems that this page does not exist.</h2>
    <router-link :to="{path:'/page/1'}">Back to first page</router-link>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .not_found {
    text-align: center;
    margin-top: 100px;
  }      
</style>
