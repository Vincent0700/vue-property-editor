<template>
  <div class="pe_header" >
    <div class="icon" @click="TogglePanel()"><i :class="icon_class"></i></div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
import bus from "../js/bus";

export default {
  name: "Header",
  props: {
    closed: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "UNTITLED"
    },
    icon_class: {
      type: String,
      default: "pe-icon pe-icon-arrow-circle-down"
    }
  },
  methods: {
    TogglePanel() {
      if (this.toggle) {
        bus.$emit("UIEvent.TogglePanel");
      }
    }
  }
};
</script>
