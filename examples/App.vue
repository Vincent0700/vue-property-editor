<template>
  <div id="app">
    <ul>
      <li><input type="text" v-model="data.name"></li>
      <li><input type="number" v-model="data.age"></li>
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
      data: {
        name: "Vincent",
        age: 20
      },
      config: {
        theme: "dark",
        title: "INSPECTOR",
        groups: [
          {
            rows: ["Name", "Age"]
          },
          {
            title: "INFOMATION"
          }
        ],
        properties: {
          Name: {
            type: "basic/string",
            bind: {
              object: this.data,
              key: "name"
            }
          },
          Age: {
            type: "basic/number",
            bind: {
              object: this.data,
              key: "age"
            }
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
