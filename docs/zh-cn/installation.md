# 安装

## npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

 ```bash
npm i vue-property-editor -S
```

## CDN

目前可以通过 unpkg.com/vue-property-editor 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/vue-property-editor/lib/vue-property-editor.css">
<!-- import JavaScript -->
<script src="https://unpkg.com/vue-property-editor/lib/vue-property-editor.umd.js"></script>
```

!> 我们建议使用 CDN 引入 vue-property-editor 的用户在链接地址上锁定版本，以免将来升级时受到非兼容性更新的影响。锁定版本的方法请查看 unpkg.com。
