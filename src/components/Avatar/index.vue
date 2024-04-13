<template>
    <div class="avatar">
        <img :src="imgSrc" :width="width" :height="height" alt="博客主头像">
        <span class="description">{{ description }}</span>
    </div>
</template>


<script>
export default {
    name: 'BlogAvatar',
    data() {
        return {

        }
    },
    computed: {


    },
    props: {
        width: {
            required: true,
            type: Number
        },
        height: {
            required: true,
            type: Number
        },
        description: {
            type: String,
            default: 'Admin'
        },
        imgSrc: {
            type: String,
            default: 'https://img.icons8.com/stickers/200/monster-face.png'
        }
    }
}
// https://w.wallhaven.cc/full/vq/wallhaven-vqr66p.png
</script>


<style>
.avatar {
    padding: 10px;
    display: block;
    text-align: center;
}

.avatar img {
    display: block;
    object-fit: cover;
    margin: 0 auto;
    margin-bottom: 5px;
    border-radius: 50%;
}

.description {
    font-size: 18px;

    display: block;
    color: #616161;
    font-family: 'AliW', Courier, monospace;
}
</style>
