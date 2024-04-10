import Vue from "vue"

// 获取vue组件渲染后的dom元素
export default function getComponentRootDom(comp, props) {
    const vm = new Vue({
        render: h => h(comp, { props })
    })
    vm.$mount()
    return vm.$el
}

