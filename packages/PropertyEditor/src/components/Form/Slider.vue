<template>
  <div class="pe_slider">
    <div class="slider_wrapper" ref="wrapper">
      <div class="slide_bar"></div>
      <div :class="['slide_btn', dragged ? 'active' : '']"
           :style="`left:${GetOffset()}%`"
           @mousedown="OnMouseDown($event)">
      </div>
    </div>
    <div class="value">{{bind.object[bind.key].toFixed(2)}}</div>
  </div>
</template>

<script>
const dd = 0.93;

export default {
  name: "Slider",
  props: {
    bind: {
      type: Object,
      default: function() {
        return {};
      }
    },
    min_value: {
      type: Number,
      required: true
    },
    max_value: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      dragged: false,
      old_x: 0,
      old_offset: 0
    };
  },
  created() {
    document.addEventListener("mouseup", () => (this.dragged = false));
    document.addEventListener("mousemove", e => {
      if (!this.dragged) return;
      const dx = e.x - this.old_x;
      const width = this.$refs["wrapper"].clientWidth;
      const offset = this.old_offset;
      const min = this.min_value;
      const max = this.max_value;
      let new_offset = offset + dx / width;
      if (new_offset < 0) new_offset = 0;
      if (new_offset > dd) new_offset = dd;
      const val = (new_offset * (max - min)) / dd + min;
      this.bind.object[this.bind.key] = val;
    });
  },
  methods: {
    GetOffset() {
      const min = this.min_value;
      const max = this.max_value;
      let val = this.bind.object[this.bind.key];
      if (val < min) {
        this.bind.object[this.bind.key] = min;
        val = min;
      }
      if (val > max) {
        this.bind.object[this.bind.key] = max;
        val = max;
      }
      return (dd * 100.0 * (val - min)) / (max - min);
    },
    OnMouseDown(e) {
      this.dragged = true;
      this.old_x = e.x;
      this.old_offset = parseFloat(this.GetOffset()) / 100.0;
    }
  }
};
</script>
