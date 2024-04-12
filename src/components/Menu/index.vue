<template>
    <div class="menu">
        <div class="menu__list">
            <div class="menu__item"  v-for="item of list" :key="item.name" >
                <span @click="handleClick(item)" :class="item.isSelected ? 'active' : ''">{{ item.name }}</span>
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


        span {
            display: block;
            padding: 2px 12px;
        }
        span.active{
            background: rgb(231, 231, 231);
        }
        span:hover {
            background: rgb(231, 231, 231);
        }
    }
}



</style>