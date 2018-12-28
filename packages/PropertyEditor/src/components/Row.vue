<template>
  <div class="pe_row">
    <div class="input_row">
      <div class="left">{{info.label}}</div>
      <div class="right">
        <input type="text">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Row",
  props: {
    info: {
      type: Object,
      required: true
    }
  }
};
</script>
