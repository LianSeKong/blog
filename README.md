# Vue-Blog

## 小诀窍

### 动态加载本地图片

> 动态加载本地图片时， webpack并不会打包本地未引用的图片

``` vue

<template>
    <img :src="imgSrc"/>
</template>

<script>
// 引入图片， webpack打包时自动编译
import wImgSrc from '@/assets/1.png'
export default {
    props: {
        imgSrc: {
            type: String,
            default: wImgSrc
        }
    }
}
<script>

```


### 1

```


```