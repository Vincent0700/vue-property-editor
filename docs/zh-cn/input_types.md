# 输入类型

## 基础类型

### string

字符串，默认不过滤任何输入

![](https://raw.githubusercontent.com/Vincent0700/personal-image-hosting/master/images/vue-property-editor/vpe_type_string.png)

- 可选配置：

  - {Function} `filter` 自定义过滤器 | null

### integer

整形，仅能输入数字`[0-9]`

![](https://raw.githubusercontent.com/Vincent0700/personal-image-hosting/master/images/vue-property-editor/vpe_type_integer.png)

- 可选配置：

  - {Function} `filter` 自定义过滤器 | null

### float

浮点数，仅能输入数字和小数点，且会被 parseFloat

![](https://raw.githubusercontent.com/Vincent0700/personal-image-hosting/master/images/vue-property-editor/vpe_type_integer.png)

- 可选配置：

  - {Function} `filter` 自定义过滤器 | null


## 进阶类型

### switch

布尔类型

![](https://raw.githubusercontent.com/Vincent0700/personal-image-hosting/master/images/vue-property-editor/vpe_type_checkbox.png)

- 可选配置：

  - {String} `text_true` 正确文字 | "ON"
  - {String} `text_false` 错误文字 | "OFF"

### slider

滑块类型

![](https://raw.githubusercontent.com/Vincent0700/personal-image-hosting/master/images/vue-property-editor/vpe_type_slider.png)

- 必填配置：

  - {Number} `min_value` 最小值
  - {Number} `max_value` 最大值
