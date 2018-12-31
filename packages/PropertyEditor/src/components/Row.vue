<template>
  <div class="pe_row">
    <div class="input_row">
      <div class="left">{{info.label}}</div>
      <div class="right">
        <input
            class="pe_input"
            type="text"
            v-if="isInput()"
            :value="info.bind.object[info.bind.key]"
            @keypress="beforeKeypress($event)"
            @change="beforeChange($event)" />
        <Checkbox v-if="info.type=='checkbox'" :bind="info.bind" />
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "./InputBox/Checkbox";

export default {
  name: "Row",
  components: {
    Checkbox
  },
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

      // Commit changes if press enter
      if (key === "Enter") {
        this.beforeChange(event);
      }
    },
    beforeChange(event) {
      const type = this.info.type;
      const old = this.info.bind.object[this.info.bind.key];
      let value = event.target.value;

      // Base filter
      if (type === "integer") {
        value = parseInt(value);
      } else if (type === "float") {
        value = parseFloat(value);
      }

      if (this.info.filter) {
        value = this.info.filter(old, value);
      }

      event.target.value = value;
      this.info.bind.object[this.info.bind.key] = value;
    }
  }
};
</script>
