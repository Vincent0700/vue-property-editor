<template>
  <div class="pe_panel">
    <Header
        :title="header.title"
        :icon_class="header.icon_class" />
  </div>
</template>

<script>
import Header from "./Header";

export default {
  name: "Panel",
  components: {
    Header
  },
  props: {
    header: {
      type: Object,
      required: true
    }
  }
};
</script>
