<template>
  <div :class="['pe_panel', {closed}]">
    <Header
        :title="title"
        :closed="closed"
        :toggle="true" />
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
    closed: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>
