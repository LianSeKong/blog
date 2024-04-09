<template>
    <ul class="menu">
        <li class="menu__item ">
            <Icon class="contact__item__icon" iconName="apple-fill" iconSize="40" ></Icon>
            <span class="menu__text">文章</span>
        </li>
        <li class="menu__item">
            <Icon class="contact__item__icon" iconName="apple-fill" iconSize="40" ></Icon>
            <span class="menu__text">文章</span>
        </li>
        <li class="menu__item">
            <Icon class="contact__item__icon" iconName="apple-fill" iconSize="40" ></Icon>
            <span class="menu__text">文章</span>
        </li>
    </ul>
</template>



<script>
import Icon from '@/components/Icon'
export default {
    name: 'BlogMenu',
    components: {
        Icon
    }
}

</script>


<style lang="scss" scoped>
.menu {
    font-family: 'AliR', Courier, monospace;
    position: relative;
    color: #636978;
    font-size: 16px;
    &__item {
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: all .3s;

        &--active {
            color: #282a2c;
            background: rgba(129, 132, 139, .3);
        }

        &:hover {
            color: #282a2c;
            background: rgba(129, 132, 139, .3);
        }
    }
    &__text {
        padding-top: 4px;
        padding-left: 10px;
    }
}



</style>>


