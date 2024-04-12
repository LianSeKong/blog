<template>
    <div class="carouse__item" @transitionend="handleTransitionend">
        <ImageLoader 
            :imageSrc="imageSrc" 
            :placeholder="placeholder"
            @load="handleLoad"
            v-loading="true"
            v-if="lazy"

            ></ImageLoader>
        <div class="carouse__item__text" ref="text">
            风扬起了你的黑发
            你不经心地甩过鬓颊
            笑可以天然地飘洒
        </div>

    </div>
</template>

<script>

import ImageLoader from '@/components/ImageLoader'
export default {
    name: 'CarouseItem',
    components: {
        ImageLoader
    },
    props: {
        imageSrc: {
            type: String,
            require: true
        },
        placeholder: {
            type: String,
            require: true
        },
        lazy: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleLoad() {
            console.log("load");
            this.$refs.text.style.opacity = 1
            this.$refs.text.clientWidth
            this.$refs.text.style.width = 'auto'
        },
        handleTransitionend() {
           this.$emit('transitionend')
        }
    }

}

</script>

<style lang="scss" scoped>
.carouse__item {
    transition: top .3s;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;

    &__text {
        position: absolute;
        left: 0;
        top: 50%;
        z-index: 991;
        font-family: 'AliR';
        font-size: 18px;
        color: #f1f3f5;
        transition: all 5s;
        text-wrap: nowrap;
        overflow: hidden;
        opacity: 0;
        width: 0;
    }

}
</style>