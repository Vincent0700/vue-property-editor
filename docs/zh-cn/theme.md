# 自定义主题

vue-property-editor 默认提供一套主题，如需添加自定义样式，请按照以下步骤执行：

1. clone [源码](https://github.com/Vincent0700/vue-property-editor)

2. 在 /packages/PropertyEditor/src/assets/scss/themes 目录下新建样式文件 custom_theme.scss

3. 按照默认样式文件 theme_dark.scss override 相关变量

```scss
$custom_theme: (
  color_panel_bg: #364346,
  color_header_normal: #283538,
  color_icon_normal: #f60,
  color_icon_focus: #fff,
  color_text_normal: #b1b8ba,
  color_text_focus: #fff,
  color_form_bg_normal: #2c393c,
  color_form_bg_focus: #20292b,
  color_form_border_normal: #293538,
  color_form_border_focus: #20292b,
  font_content: (
    "Proxima Nova Regular",
    "Helvetica Neue",
    Arial,
    Helvetica,
    sans-serif
  ),
  font_header: (
    "Proxima Nova Bold",
    "Helvetica Neue",
    Arial,
    Helvetica,
    sans-serif
  ),
  font_input: (
    "Inconsolata",
    Monaco,
    Menlo,
    "Ubuntu Mono",
    Consolas,
    source-code-pro,
    monospace
  )
);
```

4. 修改 index.scss 引入新主题

```scss
@import "./theme_dark"; // dark theme
@import "./custom_theme"; // custom theme

$themes: (
  dark: $theme_dark,
  custom: $custom_theme
);

```

5. 编译 lib

```bash
npm run lib
```

6. 编译好的 lib 将会输出到 `lib/` 文件夹，在自己的项目中引用新的 js 和 css 文件，然后在使用 PropertyEditor 组件时 props 的 config 对象指定新添加的 theme，如之前添加的 theme 名称为 `custom`





