<template>
  <div :class="`theme-${manifest.theme}`">
    <Panel
        :title="manifest.title"
        :closed="manifest.closed" />
  </div>
</template>

<script>
import Core from "./js/core";
import Panel from "./components/Panel";

export default {
  name: "PropertyEditor",
  components: {
    Panel
  },
  props: {
    config: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return new Core(this, this.config);
  }
};
</script>

<style lang="scss">
@import "assets/scss/style";
</style>
