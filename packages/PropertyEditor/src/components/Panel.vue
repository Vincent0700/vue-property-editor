<template>
  <div :class="['pe_panel', {closed}]">
    <Header
      icon="<i class='pe-icon pe-icon-arrow-circle-down'></i>"
      :title="title"
      :isTopHeader="true" />
    <div class="groups">
      <Group
          v-if="!closed"
          v-for="(group,index) in groups" :key="index"
          :title="group.title"
          :icon="group.icon"
          :rows="group.rows"
          :properties="properties" />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Group from "./Group";

export default {
  name: "Panel",
  components: {
    Header,
    Group
  },
  props: {
    closed: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    groups: {
      type: Array,
      default: function() {
        return [];
      }
    },
    properties: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>
