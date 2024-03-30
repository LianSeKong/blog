<template>
    <div class="blog">
        <div class="blog-slider">
            <SliderLayout></SliderLayout>
        </div>
        <div class="blog-body"></div>
    </div>
</template>

<script>

import SliderLayout from './SliderLayout.vue';
    export default {
        name: 'BlogLayout',
        components: {
            SliderLayout
        }
    } 
</script>

<style scoped>
    .blog {
        width: 100%;
        height: 100%;
        display: flex;
    }
    .blog-slider {
        width: 200px;
        height: 100%;
    }
    .blog-body { 
        flex: 1;
    }
</style>