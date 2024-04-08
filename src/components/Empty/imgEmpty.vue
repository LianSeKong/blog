<template>
    <div>
        <img class="empty__image" src="../../assets/empty-dog-bowl.png" alt="Empty">
    </div>
</template>

<script>
export default {
    name: "ImageEmpty",
}

</script>

<style scoped>

.empty__image {
    display: block;
    width: 160px;
    height: 160px;
    object-fit: cover;
}
</style>