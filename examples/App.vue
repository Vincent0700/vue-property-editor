<template>
  <div id="app">
    <ul>
      <li>{{form.basic._string}}</li>
      <li>{{form.basic._integer}}</li>
      <li>{{form.basic._integer}}</li>
    </ul>
    <ul>
      <li>{{form.advanced._switch}}</li>
      <li>{{form.advanced._slider}}</li>
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
          _float: 3.14159
        },
        advanced: {
          _switch: true,
          _slider: 3.72
        },
        filter: {
          _email: "test@test.com"
        }
      }
    };
  },
  created() {
    class Binder {
      constructor(object, key) {
        this.object = object;
        this.key = key;
      }
    }

    const InputTypes = {
      String: "String",
      Integer: "Integer",
      Float: "Float",
      Switch: "Switch",
      Slider: "Slider"
    };

    function ShowInInspector(type) {
      return (target, property, descriptor) => {
        console.log(target, property, descriptor);
        // target[property] = type;
      };
    }
    const self = this;

    class InspectorWindow {
      constructor() {
        // this.name = new Binder(self.)
      }
      @ShowInInspector(InputTypes.String)
      Name(val) {
        return val;
      }
    }

    let x = new InspectorWindow();
    console.log(x);

    this.config = {
      title: "PROPERTIES",
      groups: [
        {
          title: "BASIC",
          icon: "<i class='pe-icon pe-icon-default'></i>",
          rows: ["String", "Integer", "Float"]
        },
        {
          title: "ADVANCED",
          icon: "<i class='pe-icon pe-icon-threeway'></i>",
          rows: ["Switch", "Slider"]
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
        Switch: {
          type: "switch",
          bind: {
            object: this.form.advanced,
            key: "_switch"
          }
        },
        Slider: {
          type: "slider",
          bind: {
            object: this.form.advanced,
            key: "_slider"
          },
          min_value: -5,
          max_value: 5
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
  background: url("assets/images/pw_maze_black.png");
  color: #eee;
}
</style>
