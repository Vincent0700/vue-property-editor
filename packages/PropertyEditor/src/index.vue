<template>
  <div :class="`theme-${theme}`">
    <Panel :header="header" />
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
    },
    header: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import "assets/scss/style";
</style>
