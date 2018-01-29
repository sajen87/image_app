<template>
    <div class="container col-6">
        <h1>Image App</h1>

        <b-card :title="file.title"
                :img-src="file.name || file.url"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
        </b-card>
    </div>
</template>

<script>

    export default {
        props: ['file'],
        data: function () {
            return {}
        },
    }
</script>

<style scoped>

</style>

