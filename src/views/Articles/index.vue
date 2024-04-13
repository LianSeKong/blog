<template>
    <div class="article" v-loading="loading">
        <div class="article__main">
            <q-scroll-area style="height: calc(100% - 50px); " ref="scroll">
                <q-list separator bordered padding>
                    <q-item v-for="item of list" :key="item.id">
                        <q-item-section top thumbnail class="q-ml-none">
                        <img :src="item.thumb">
                        </q-item-section>

                        <q-item-section>
                        <q-item-label>{{item.title}}</q-item-label>
                        <q-item-label caption>{{item.description}}</q-item-label>
                        </q-item-section>

                        <q-item-section side top>
                        <q-item-label caption>{{item.commentNumber}}</q-item-label>
                        </q-item-section>
                    </q-item>
                 </q-list>

            </q-scroll-area>
            <q-pagination
                v-if="list.length"
                v-model="current"
                class="article__pag"
                :max="max"
                :max-pages="6"
                boundary-numbers
            />
        </div>
        <blogSlider class="article__slider"></blogSlider>
    </div>
</template>

<script>
import {getBlogs} from '@/api/blog'
import blogSlider from './blogSlider.vue'
export default {
    name: 'BlogArticles',
    props: ['id', 'page', 'limit'],
    components: {
        blogSlider
    },
    data() {
        return {
            list: [],
            current: this.$props.page,
            max: null,
            loading: false
        }
    },
    computed: {

    },
    watch: {
        current: {
            handler(newPage) {
                if (+this.$route.query.page == newPage) {
                    this.$refs.scroll.setScrollPosition('vertical', 0, 300)
                    this.fetchData()
                    return
                }

                // 处理页面初始化问题
                if (this.$props.id === -1) {
                    this.$router.push({
                        name: 'article',
                        query: {
                            limit: this.$props.limit,
                            page: newPage
                        }
                    })
                } else {
                    this.$router.push({
                        name: 'category',
                        query: {
                            limit: this.$props.limit,
                            page: newPage
                        },
                        params: {
                            id: this.$props.id
                        }
                    })
                }
            },
            deep: true
        },
        $route: {
            handler() {
                if (this.$route.query.page === this.current) {
                    this.$refs.scroll.setScrollPosition('vertical', 0, 300)
                    this.fetchData()
                } else {
                    this.current = +this.$route.query.page
                }
            },
            deep: true
        }
    },
    beforeMount() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.loading = true
            getBlogs(this.current, this.limit).then(res => {
                const { total, row } = res.data.data

                this.list = row
                this.max = Math.ceil(total / this.limit)
                this.loading = false
            })
        }
    }
}

</script>


<style lang="scss" scoped>

.article {
    font-size: 16px;
    height: 100%;

    display: flex;

    &__pag {
        padding: 10px;
        float: right;
    }
    &__main {
        flex: 1;
    }

    &__slider {
        padding: 20px;
        width: 240px;
        height: 100%;
    }
}

</style>