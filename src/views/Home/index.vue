<template>
    <div class="home"  v-loading="true">
        <!-- <ImageLoader 
            ref="imageLoader"
            :placeholder="imageLoaderSrc" 
            :imageSrc="imageLoaderSrc" 
            class="imageLoader"
            /> -->

        <Carouse></Carouse>
    </div>
</template>


<script>
// import ImageLoader from "@/components/ImageLoader";
import Carouse from './Carouse.vue';
export default {
    name: 'MyHome',
    components: {
        // ImageLoader
        Carouse
    },
    data() {
        return {
            imageLoaderSrc: 'https://w.wallhaven.cc/full/qz/wallhaven-qz8z3d.jpg'
        }
    },
    mounted() {

        // this.$notify({
        //     content: 'imageLoader',
        //     type: 'error',
        //     duration: 3000,
        //     // container: this.$refs.imageLoader.$el
           
        // })
    }
}

</script>


<style lang="scss" scoped>

.home {
    height: 100%;
    position: relative;
}
.imageLoader {
    width: 100%;
    height: 100%;
}

</style>