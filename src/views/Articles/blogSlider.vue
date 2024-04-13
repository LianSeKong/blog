<template>
    <div>
        <Menu :list="typeList" @select="handleSelect"></Menu>
    </div>
</template>

<script>
import Menu from '@/components/Menu'
import { getBlogType } from '@/api/blog'
export default {
    name: 'BlogSlider',
    components: {
        Menu
    },
    data() {
        return {
            typeList: []
        }
    },
    computed: {
        categoryId() {
            return +this.$route.params.id || -1
        },
        routeInfo() {
            return {
                categoryId: +this.$route.params.id || -1,
                limit: +this.$route.query.id || 10,
                page: +this.$route.query.page || 1,
            }
        }
    },
    watch: {
        $route: {
            handler(newR) {
                const item = newR
                this.typeList = this.typeList.map(
                el => {
                    if (el.id === item.id) {
                        el.isSelected = true
                    } else {
                        el.isSelected =false
                    }
                    return el;
                }
            )
            if (item.id === -1) {
                    this.$router.push({
                        name: 'article',
                        query: {
                            limit: this.routeInfo.limit,
                            page: this.routeInfo.page,
                        }
                    })
                } else {
                    this.$router.push({
                        name: 'category',
                        query: {
                            limit: this.routeInfo.limit,
                            page: this.routeInfo.page,
                        },
                        params: {
                            id: item.id
                        }
                    })
                }
            }
        }
    },
    beforeMount() {
        getBlogType().then(res => {
            const total = res.data.data.reduce((pre, cur) => {
                return pre + cur.articleCount
            }, 0);
            const id = this.categoryId;
            const data = res.data.data
            data.unshift({
                    id: -1,
                    name: '全部',
                    articleCount: total,
                    order: 1
            })

            data.map(item => {
                if (item.id === id) {
                    item.isSelected = true
                }
                return item
            })
            this.typeList = data
        })
    },
    methods: {
        handleSelect(item) {
            this.typeList = this.typeList.map(
                el => {
                    if (el.id === item.id) {
                        el.isSelected = true
                    } else {
                        el.isSelected =false
                    }
                    return el;
                }
            )
            if (item.id === -1) {
                    this.$router.push({
                        name: 'article',
                        query: {
                            limit: this.routeInfo.limit,
                            page: this.routeInfo.page,
                        }
                    })
                } else {
                    this.$router.push({
                        name: 'category',
                        query: {
                            limit: this.routeInfo.limit,
                            page: this.routeInfo.page,
                        },
                        params: {
                            id: item.id
                        }
                    })
                }
        }
    }
}

</script>