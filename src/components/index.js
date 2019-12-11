import Vue from 'vue';
// 前缀
export const prefix = 'x';
// 自定义组件
const requireComponents = require.context('../components', true, /\.vue/);
// 打印结果
// 遍历出每个组件的路径
requireComponents.keys().forEach(fileName => {
  // 组件实例
  const reqCom = requireComponents(fileName);
  // 截取路径作为组件名
  const reqComName = fileName.split('/')[1];
  // 组件挂载
  Vue.component(
    `${prefix.toUpperCase()}${reqComName}`,
    reqCom.default || reqCom
  );
});
