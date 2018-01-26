<template>
    <div>
        <router-view></router-view>
        <hr>
        <pic-window v-if="isLoggedIn" :file="file"></pic-window>
        <file-selector v-if="isLoggedIn" @updatePic="updatePicEventHandler"></file-selector>
    </div>
</template>

<script>
    import FileSelector from './FileSelector.vue';
    import PicWindow from './PicWindow.vue';
    import Login from './Login.vue';

    export default {
        components: { PicWindow, FileSelector, Login},
        data: function () {
            return {
                isLoggedIn : false,
                file: {},
                status: "ready"
            }
        },
        methods:  {
        updatePicEventHandler(file) {
            this.file = file;
            }
        }
    }
</script>

