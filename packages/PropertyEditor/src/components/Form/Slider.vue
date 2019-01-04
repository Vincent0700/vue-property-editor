<template>
  <div class="pe_slider" ref="wrapper">
    <div class="slide_bar"></div>
    <div class="slide_btn"
         :style="`left:${offset}%`"
         @mousedown="OnMouseDown($event)">
    </div>
  </div>
</template>

<script>
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
  computed: {
    offset() {
      const min = this.min_value;
      const max = this.max_value;
      const val = this.bind.object[this.bind.key];
      return (95.0 * (val - min)) / (max - min);
    }
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
      if (new_offset > 0.95) new_offset = 0.95;
      const val = (new_offset * (max - min)) / 0.95 + min;
      this.bind.object[this.bind.key] = val;
    });
  },
  methods: {
    OnMouseDown(e) {
      this.dragged = true;
      this.old_x = e.x;
      this.old_offset = parseFloat(this.offset) / 100.0;
    }
  }
};
</script>
