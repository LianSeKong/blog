<template>
    <div class="empty">
        <div class="empty__image">
            <img v-if="image" :width="imageSize" :src="image" alt="empty">
            <slot v-else name="image">
                <ImageEmpty></ImageEmpty>
            </slot>
        </div>
        <div class="empty__text">
            <p>{{ description }}</p>
        </div>    
        <div class="empty__default" v-if="$slots.default">
            <slot name="default"></slot>
        </div>
    </div>
</template>

<script>
import ImageEmpty from './imgEmpty.vue'
export default {
    name: 'BlogEmpty',
    components: {
        ImageEmpty
    },
    props: {
        image: {
            type: String,
            default: 'https://img.icons8.com/ios/200/image-not-avialable.png'
        },
        imageSize: {
            type: Number,
            default: 160
        },
        description: {
            type: String,
            default: 'No Data'
        }
    }


}

</script>

<style>

.empty {
    font-family: 'AliW', Courier, monospace;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0;

}


.empty__text p{
    margin-top: 15px;
    color: #9da5b4;
    text-align: center;
}

.empty__default {
    margin-top: 15px;
}
</style>