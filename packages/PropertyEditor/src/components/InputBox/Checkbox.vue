<template>
  <div class="pe_checkbox">
    <div class="left" @click="OnChange(false)">{{text_false}}</div>
    <div class="right" @click="OnChange(true)">{{text_true}}</div>
    <div :class="['toggle_button', bind.object[bind.key]?'btn_true':'btn_false']"></div>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    text_true: {
      type: String,
      default: "ON"
    },
    text_false: {
      type: String,
      default: "OFF"
    },
    bind: {
      type: Object,
      default: false
    }
  },
  data() {
    return {
      flag: false
    };
  },
  methods: {
    OnChange(flag) {
      if (flag != this.bind.object[this.bind.key]) {
        this.bind.object[this.bind.key] = flag;
      }
    }
  }
};
</script>
