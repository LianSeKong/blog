import getComponentRootDom from './getComponentRootDom.js'
import Icon from '@/components/Icon'
import styles from './showMessage.module.scss'

/**
 * 
 * @param { String } content  消息内容
 * @param { String } type     消息类型
 * @param { Number } duration     消失时间
 * @param { HTMLElement } container 容器， 消息显示到此容器中间，若无则显示在页面中间
 */
export default function(options = {}) {
    // content, type = 'success', duration = 3000 ,container
    const { content , type = 'info', duration = 3000 ,container = document.body } = options

    const div = document.createElement('div')
    const IconDomHTML = getComponentRootDom(Icon, { iconName: type })

    div.innerHTML = `<span >
                        ${IconDomHTML.outerHTML}
                     </span>
                    <span>${content}</span>
                     `
    div.classList.add(`${styles['message-box']}`)
    div.classList.add(`${styles['message-box--' + type]}`) 

    // 获取容器的计算样式    
    if (container !== document.body && getComputedStyle(container).position === 'static') {
        container.style.position = 'relative'
    }
    container.appendChild(div)

    // 移除message元素
    div.addEventListener('transitionend', () => {
        setTimeout(() => {
            div.remove()
            
        }, duration)
    }, { once: true })

    // 触发重排
    div.clientHeight;
    
    // 初始化显示的动画效果
    div.style.opacity = 1
    div.style.top = '10px'


}

// // 获取vue组件渲染后的dom元素

// function getComponentRootDom(comp, props) {
//     const vm = new Vue({
//         render: h => h(comp, { props })
//     })
//     vm.$mount()
//     return vm.$el
// }