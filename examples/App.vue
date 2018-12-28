<template>
  <div id="app">
    <PropertyEditor :config="config" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      config: {
        theme: "dark",
        title: "INSPECTOR"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100vh;
  background-color: #000;
}
</style>
