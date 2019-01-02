# 快速上手

推荐使用npm安装

```bash
npm i -S vue-property-editor
```

在 main.js 引入 js 和 css

```javascript
import PropertyEditor from 'vue-property-editor'
import 'vue-property-editor/lib/vue-property-editor.css'

Vue.use(PropertyEditor)
```

<details>
  <summary>在 App.vue 中添加</summary>

```vue
<template>
  <div id="app">
    <ul>
      <li>{{form.basic._string}}</li>
      <li>{{form.basic._integer}}</li>
      <li>{{form.basic._integer}}</li>
      <li>{{form.basic._checkbox}}</li>
    </ul>
    <ul>
      <li>{{form.filter._email}}</li>
    </ul>
    <PropertyEditor :config="config" />
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
          _float: 3.14159,
          _checkbox: true
        },
        filter: {
          _email: "test@test.com"
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
          rows: ["String", "Integer", "Float", "Checkbox"]
        },
        {
          title: "FILTER",
          icon: "<i class='pe-icon pe-icon-filter'></i>",
          rows: ["Email"]
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
        },
        Checkbox: {
          type: "checkbox",
          bind: {
            object: this.form.basic,
            key: "_checkbox"
          },
          text_true: "TRUE",
          text_false: "FALSE"
        },
        Email: {
          type: "string",
          bind: {
            object: this.form.filter,
            key: "_email"
          },
          filter: function(old_value, new_value) {
            const pattern = /^([A-Za-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/;
            return pattern.test(new_value) ? new_value : old_value;
          }
        }
      }
    };
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  color: #666;
}
</style>
```
</details>

## 基础案例

使用 JSFiddle 作为案例演示，国内用户可能访问速度较慢

<iframe width="100%" height="400" src="//jsfiddle.net/Vincent0700/gvks9a1w/35/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>