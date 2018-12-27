<template>
  <div id="app">
    <PropertyEditor :theme="config.theme"/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      config: {
        theme: "dark"
      }
    };
  }
};
</script>

<style lang="scss">
</style>
