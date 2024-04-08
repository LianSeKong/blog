<template>
    <div class="blog">
        <div class="blog-slider">
            <SliderLayout></SliderLayout>
        </div>
        <div class="blog-body">
            <div class="empty-test">
                <Empty
                    imageSize="160" 
                    image="https://img.icons8.com/external-basicons-color-edtgraphics/200/external-Paper-sheets-office-stationery-basicons-color-edtgraphics-2.png">

                </Empty>
            </div>

        </div>
    </div>
</template>

<script>
import Empty from '../components/Empty'
import SliderLayout from './SliderLayout.vue';
    export default {
        name: 'BlogLayout',
        components: {
            SliderLayout,
            Empty
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

    .empty-test {
        width: 400px;
        border: 1px solid #000;
        height: 300px;
    }
</style>