<template>
  <div class="pe_row">
    <div class="input_row">
      <div class="left">{{info.label}}</div>
      <div class="right">
        <input
            class="pe_input"
            type="text"
            v-if="IsInput()"
            :value="info.bind.object[info.bind.key]"
            @keypress="BeforeKeyPress($event)"
            @change="BeforeChange($event)" />
        <Switcher
            v-if="info.type=='switch'"
            :bind="info.bind"
            :text_true="info.text_true"
            :text_false="info.text_false" />
        <Slider
            v-if="info.type=='slider'"
            :bind="info.bind"
            :min_value="info.min_value"
            :max_value="info.max_value"/>
      </div>
    </div>
  </div>
</template>

<script>
import Switcher from "./Form/Switcher";
import Slider from "./Form/Slider";

export default {
  name: "Row",
  components: {
    Switcher,
    Slider
  },
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  methods: {
    IsInput() {
      const type = this.info.type;
      const arr = ["string", "integer", "float"];
      return arr.indexOf(type) != -1;
    },
    BeforeKeyPress(event) {
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
        this.BeforeChange(event);
      }
    },
    BeforeChange(event) {
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
