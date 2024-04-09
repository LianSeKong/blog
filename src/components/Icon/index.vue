<template>
    <span :class="iconClass" :style="iconStyle"></span>
</template>

<script>


export default {
    name: 'ImgIcon',
    computed: {
        iconClass() {
            return 'icon-' + this.$props.iconName
        },
        iconStyle() {
            return {
                // color: this.$props.iconColor,
                fontSize: this.$props.iconSize +'px'
            }
        }
    },
    props: {
        iconName: {
            type: String,
            required: true
        },
        iconSize: {
            type: Number,
            default: 24
        },
        iconColor: {
            type: String,
            default: 'black'
        }
    }
}

</script>


<style scoped>
    span {
        font-family: 'iconfont';
    }


</style>>
