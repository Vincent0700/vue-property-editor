<template>
  <div :class="`theme-${theme}`">
    <Panel/>
  </div>
</template>

<script>
import Panel from "./components/Panel";

export default {
  name: "PropertyEditor",
  components: {
    Panel
  },
  props: {
    theme: {
      type: String,
      default: "dark"
    }
  }
};
</script>

<style lang="scss">
@import "assets/scss/style";
</style>
