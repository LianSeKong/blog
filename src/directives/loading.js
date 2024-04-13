import loadingImgSrc from '../assets/loading.gif'
import styles from './loading.module.css'
export default {
    // 指令与元素成功绑定时（一上来）
    bind(el, binding){
        // 创建一个img元素, 放到el元素内部
        const curImg = el.querySelector("img[data-role^='loading']")
        if (binding.value) {
            if (!curImg) {
                const img = document.createElement('img')
                img.dataset.role = 'loading'
                img.src = loadingImgSrc
                img.className = styles['loading']
                el.appendChild(img)
            }
        } else {
            if (curImg) {
                curImg.remove()
            }
        }
    },
    update(el, binding){
        // 创建一个img元素, 放到el元素内部
        const curImg = el.querySelector("img[data-role^='loading']")

        if (binding.value) {
            if (!curImg) {
                const img = document.createElement('img')
                img.dataset.role = 'loading'
                img.src = loadingImgSrc
                img.className = styles['loading']
                el.appendChild(img)
               
            } 
        } else {
            if (curImg) {
                curImg.remove()
            } 
        }
    },
}