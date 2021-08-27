# juejin

react 仿掘金客户端，第一次使用 react 开发，有所不足请见谅。

## 运行

```
yarn install

yarn start
```

## 实现的功能

* 无限滚动列表
* 浏览历史记录
* 因为不知道如何在 react 中实现状态保持，因此利用 `display: none` 隐藏组件，让进入详情页退回列表页时，停留在离开列表页时的浏览位置上
* 回到顶部