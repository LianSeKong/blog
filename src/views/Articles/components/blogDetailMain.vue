<template>
    <div class="detail">
        <h1>{{blog.title}}</h1>
        <div class="detail__aside">
            <span>日期：{{blog.createDate}}</span>
            <span>浏览：{{blog.scanNumber}}</span>
            <span> <a href="">评论：{{blog.commentNumber }}</a></span>
            <span> <a href="">分类：{{blog.category.name }}</a></span>
        </div>
        <div v-html="blog.htmlContent">
        </div>
    </div>
</template>


<script>
import { getBlog } from '@/api/blog'

export default {
    data() {
        return {
            blog: {}
        }    
    },
    async beforeMount() {
        const { data } = await getBlog(1);
        console.log(data);
        this.blog = data.data;
    }
}

</script>


<style lang="scss" scoped>
.detail {
    font-family: Roboto, -apple-system, Helvetica Neue, Helvetica, Arial, sans-serif;

    h1 {
        font-weight: 700;
        font-size: 40px;
    }

    &__aside {

        span {
            padding: 0 10px;
        }

        a {
            text-decoration: none;

        }
    }
}
</style>