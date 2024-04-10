<template>
    <ul class="menu">
        <li v-for="item of list" :key="item.path" class="menu__item "
            :class="activeClass(item.path)"
            @click="goToLink(item.name)">
            <Icon class="contact__item__icon" :iconName="item.meta.icon" :iconSize="40"></Icon>
            <span class="menu__text">{{ item.meta.title }}</span>
        </li>
    </ul>
</template>



<script>
import Icon from '@/components/Icon'
import routes from '@/router/routes.js'
export default {
    name: 'BlogMenu',
    components: {
        Icon
    },
    data() {
        return {
            currentPath: ''
        }
    },
    computed: {
        list() {
            return routes[0].children
        }
    },
    watch: {
        $route(newV) {
            this.currentPath = newV.path
        }
    },
    methods: {
        activeClass(path) {
            return this.currentPath.includes(path) ? 'menu__item--active' : ''
        },
        goToLink(name) {
            if (this.$route.name === name) return;
            this.$router.push({ name })

        }
    },
    beforeMount() {
        this.currentPath = this.$route.path
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
        padding-left: 20px;
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
        padding-left: 15px;
    }
}
</style>>
