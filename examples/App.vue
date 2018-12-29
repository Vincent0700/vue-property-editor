<template>
  <div id="app">
    <ul>
      <li><input type="text" v-model="form.basic._string"></li>
      <li><input type="number" v-model="form.basic._integer"></li>
      <li><input type="number" v-model="form.basic._float"></li>
    </ul>
    <PropertyEditor
        :config="config" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      form: {
        basic: {
          _string: "Vincent",
          _integer: 20,
          _float: 3.14159
        }
      }
    };
  },
  created() {
    this.config = {
      theme: "dark",
      title: "PROPERTIES",
      groups: [
        {
          rows: ["String", "Integer", "Float"]
        },
        {
          title: "FILTER"
        }
      ],
      properties: {
        String: {
          type: "string",
          bind: {
            object: this.form.basic,
            key: "_string"
          }
        },
        Integer: {
          type: "integer",
          bind: {
            object: this.form.basic,
            key: "_integer"
          }
        },
        Float: {
          type: "float",
          bind: {
            object: this.form.basic,
            key: "_float"
          }
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100vh;
  background-color: #000;
}
</style>
