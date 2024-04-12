<template>
    <div class="loading">
        <img :src="loadingImgSrc" alt="">
    </div>
</template>

<script>
import loadingImgSrc from '@/assets/loading.gif'
export default {
    name: 'ImgLoading',
    data() {
        return {
            loadingImgSrc
        }
    }
}
</script>


<style lang="scss" scoped>
.loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>>
