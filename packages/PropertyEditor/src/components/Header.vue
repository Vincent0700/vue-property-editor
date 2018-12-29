<template>
  <div class="pe_header" >
    <div class="icon" @click="TogglePanel()" v-html="`${icon?icon:'<i class=\'pe-icon pe-icon-default\'></i>'}`"></div>
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
    icon: {
      type: String,
      default: ""
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
