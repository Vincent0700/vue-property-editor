<template>
  <div class="pe_header">
    <div class="icon"><i :class="icon_class"></i></div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Untitled"
    },
    icon_class: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
</style>
