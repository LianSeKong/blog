<template>
    <div class="menu">
        <div class="menu__list">
            <div class="menu__item"  v-for="item of list" :key="item.name" >
                <div class="menu__item__title" :class="item.isSelected ? 'active' : ''">
                    <span @click="handleClick(item)" >{{ item.name }}</span>
                    <span class="menu__item__num">{{ item.articleCount }}</span>
                </div>
                <BaseMenu v-if="item.children" @select="handleClick" :list="item.children"></BaseMenu>
            </div>
        </div>
    </div>
</template>

<script>
// Dense风格List
export default {
    name: 'BaseMenu',
    props: {
        list: {
            type: Array,
            require: true
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        handleClick(item) {
            this.$emit("select", item)
        }
    }
}


</script>


<style lang="scss" scoped>
.menu {
    padding: 0 20px;
    color: #282a2c;
    font-size: 16px;
    font-family: 'AliR';

    &__item {

        &__num {
            color: #1976d2;
        }
        &__title {
            &.active{
                color: #1976d2;
                background: rgb(231, 231, 231);
            }
            &:hover {
                color: #1976d2;
                background: rgb(231, 231, 231);
            }
        }
        span {
            padding: 2px 12px;
        }

    }
}



</style>