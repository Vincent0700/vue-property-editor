# 配置项

## theme

- 类型：`String`
- 默认值：`dark`

设置属性编辑器的主题，若用户需要自定义主题，参见 [自定义主题](zh-cn/theme.md)

## title

- 类型：`String`
- 默认值：`UNTITLED`

属性编辑器的标题

## groups

- 类型：`Array`
- 默认值：`[]`

示例：

```javascript
[
  {
    rows: ["String", "Integer", "Float", "Checkbox"]
  },
  {
    title: "FILTER",
    icon: "<i class='pe-icon pe-icon-filter'></i>",
    rows: ["Email"]
  }
]
```

> groups 项包含三个属性：title、icon、rows。
> - title: group header 的标题
> - icon: 图标的 html
> - rows: label 数组

!> 首项不包含 Header，因此即使首项设置了 `title` 和 `icon` 也不会显示

## properties

- 类型：`Object`
- 默认值：`{}`

示例：

```javascript
properties: {
  String: {         // 标签名，对应 group 的 rows 字段
    type: "string", // 数据类型
    bind: {         // 绑定数据
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
    filter: function(old_value, new_value) { // 过滤函数
      const pattern = /^([A-Za-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/;
      return pattern.test(new_value) ? new_value : old_value;
    }
  }
}
```