<template>
  <div class="pe_row">
    <div class="input_row">
      <div class="left">{{info.label}}</div>
      <div class="right">
        <input
            type="text"
            v-if="isInput()"
            :value="info.bind.object[info.bind.key]"
            @keypress="beforeKeypress($event)"
            @change="beforeChange($event)" />
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../js/bus";

export default {
  name: "Row",
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  methods: {
    isInput() {
      const type = this.info.type;
      const arr = ["string", "integer", "float"];
      return arr.indexOf(type) != -1;
    },
    beforeKeypress(event) {
      const type = this.info.type;
      const key = event.key;

      if (type === "integer") {
        const keylist = "1234567890".split("");
        if (keylist.indexOf(key) == -1) {
          event.returnValue = false;
        }
      } else if (type === "float") {
        const keylist = "1234567890.".split("");
        if (keylist.indexOf(key) == -1) {
          event.returnValue = false;
        }
      }

      if (key === "Enter") {
        this.beforeChange(event);
      }
    },
    beforeChange(event) {
      const type = this.info.type;
      let value = event.target.value;

      if (type === "integer") {
        value = parseInt(value);
      } else if (type === "float") {
        value = parseFloat(value);
      }

      event.target.value = value;
      this.info.bind.object[this.info.bind.key] = value;
    }
  }
};
</script>
