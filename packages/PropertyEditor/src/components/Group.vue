<template>
  <div class="pe_group">
    <Header
      v-if="title"
      :title="title"
      :icon="icon" />
    <div class="content">
      <Row
        v-for="(row,index) in GetRows()" :key="index"
        :info="row" />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Row from "./Row";

export default {
  name: "Group",
  components: {
    Header,
    Row
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    rows: {
      type: Array,
      default: function() {
        return [];
      }
    },
    properties: {
      type: Object,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    GetRows() {
      let arr = [];
      this.rows.forEach(label => {
        const row = this.properties[label];
        arr.push({ label, ...row });
      });
      return arr;
    }
  }
};
</script>
