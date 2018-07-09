# vue动画
## 使用transition组件
在插入transition组件或者删除transition组件时，Vue会做如下的操作：
1. 首先判断目标元素是否应用了css过渡或者动画，如果应用了，在恰当的时候添加或者删除css类名。
2. 如果过渡组件提供了 JavaScript 钩子函数，这些钩子函数将在恰当的时机被调用。
3. 如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 (插入/删除) 在下一帧中立即执行。(注意：此指浏览器逐帧动画机制，和 Vue 的 nextTick 概念不同)
<transition></transition>