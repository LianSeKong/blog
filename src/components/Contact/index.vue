<template>
    <div class="contact">
        <ul class="contact__list">
            <li class="contact__item" :style="itemStyle(item.iconSize)" v-for="item of list" :key="item.desc">
                <Icon class="contact__item__icon" :iconName="item.iconName" :iconSize="item.iconSize" ></Icon>
                <span class="contact__item__desc">{{item.desc}}</span>
                <img class="contack__item__img" :src="item.imgSrc" />
            </li>
        </ul>
    </div>
</template>

<script>
import Icon from '../Icon'
export default {
    name: 'BlogContact',
    components: {
        Icon
    },
    methods: {
        itemStyle(size) {
                return {
                    lineHeight: size + 'px',
                    fontSize: size / 2.6 + 'px',
                }
            }
    },
    props: {
        list: {
            type: Array,
            required: true
        }
    }
}

</script>

<style lang="scss" scoped>

.contact {
    position: relative;
   

    &__list {
        display: flex;
        flex-wrap: wrap;
    }

    &__item {
        width: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        margin-bottom: 10px;
        &:hover span{
            color: #1976d2;
        }
        .contact__item__desc:hover + .contack__item__img{
            height: 240px;
            z-index: 99;
        }
        .contack__item__img {
            position: absolute;
            bottom: 40px;
            left: 0%;
            width: 240px;
            height: 0px;

            object-fit: cover;
            transition: all .2s;
        }
        .contact__item__desc {
            margin-left: 15px;
        }
        
        span {
            color: #616161;
        }
    }
}




</style>