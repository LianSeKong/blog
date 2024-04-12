<template>
    <div class="imageLoader">
        <img class="placeholder" ref="placeholder" :src="placeholder" alt="">
        <img :src="imageSrc" 
             :style="originStyle" 
             alt=""
             @load="handleLoader" 
             class="origin">
    </div>
</template>


<script>
export default {
    name: 'ImageLoader',
    props: {
        imageSrc: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            default: 500
        }

    },
    data() {
        return {
            originStyle: {
                opacity: 0
            }
        }
    },
    computed: {},
    methods: {
        loaded() {

        },
        handleLoader() {
            this.$refs.placeholder.style.opacity = 0
                // this.$refs.placeholder.style.display = 'none'
                this.originStyle.opacity = 1
            this.$emit('load')                
        }
    }
}


</script>


<style lang="scss" scoped>
.imageLoader {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    
    .origin {
        transition: opacity 0.3s ease-in;
    }
    .placeholder {
        z-index: 2;
        opacity: 1;
        filter: blur(2vw);
        transition: opacity 5s;
    }

    img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        z-index: 1;
        opacity: 0;
    }
    
}


</style>