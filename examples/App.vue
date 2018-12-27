<template>
  <div id="app">
    <PropertyEditor
        :theme="config.theme"
        :header="config.header" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      config: {
        theme: "dark",
        header: {
          title: "INSPECTOR",
          icon_class: "fas fa-arrow-alt-circle-down"
        }
      }
    };
  }
};
</script>

<style lang="scss">
</style>
