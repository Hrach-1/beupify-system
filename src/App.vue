<template>
  <BeupifySystem/>
  <div style="background-color: #1E1939; height: 200px; width: 100%">
    <img src="/images/drupal.svg" alt="" width="76">
    <img src="/images/shopify.svg" alt="" width="76">
    <img src="/images/wix.svg" alt="" width="76">
    <img src="/images/weebly.svg" alt="" width="76">
    <img src="/images/wordpress.svg" alt="" width="76">
    <img src="/images/squarespace.svg" alt="" width="76">
  </div>
</template>

<script>
import BeupifySystem from "./components/BeupifySystem";

export default {
  name: 'App',
  components: {
    BeupifySystem
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
</style>
