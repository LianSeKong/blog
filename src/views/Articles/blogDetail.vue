<template>
    <div class="blog__container">
        <div class="blog__main">
            <div class="blog__detail">
                <blogDetailMainVue></blogDetailMainVue>
            </div>
            <div class="blog__comment"></div>
        </div>
        <div class="blog__slider"></div>
    </div>
</template>


<script>
import blogDetailMainVue from "./components/blogDetailMain.vue";
export default {
    components: {
        blogDetailMainVue
    }
}

</script>


<style lang="scss" scoped>
.blog {

    &__container {
        width: 100%;
        height: 100%;
        position: relative;

        display: flex;
    }
    &__detail {
        overflow: auto;
        height: 100%;
        padding: 20px 40px;
    }
    &__main {
        flex: 1;
    }

    &__slider {
       
        width: 240px;
        height: 100%;
        padding: 20px 40px;
    }


}





</style>