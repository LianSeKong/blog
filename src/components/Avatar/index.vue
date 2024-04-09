<template>
    <div class="avatar" >
        <img src="../../assets/avatar.png" :width="width" :height="height" alt="博客主头像">
        <span class="description">{{description}}</span>
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
            type: String
        },
        height: {
            required: true,
            type: String
        },
        description: {
            type: String,
            default: 'Admin'
        }
    }
}

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
