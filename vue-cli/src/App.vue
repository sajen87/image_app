<template>
    <div>
        <router-view v-on:logged="changeStatus"></router-view>

        <login v-on:logged="changeStatus" v-if="!isLoggedIn"></login>
        <hr>
        <pic-window v-if="isLoggedIn" :file="file"></pic-window>
        <file-selector v-if="isLoggedIn" @updatePic="updatePicEventHandler"></file-selector>
        <upload-image v-if="isLoggedIn" @updatePic="updatePicEventHandler"></upload-image>
    </div>
</template>

<script>
    import FileSelector from './FileSelector.vue';
    import PicWindow from './PicWindow.vue';
    import Login from './Login.vue';
    import UploadImage from "./uploadImage";

    export default {
        components: {
            UploadImage, PicWindow, FileSelector, Login},

        data() {
            return {
                file: {},
                status: false,
                isLoggedIn: false,
            }
        },
        methods: {
            changeStatus(event) {
                this.isLoggedIn = event
            },
            updatePicEventHandler(file) {
                this.file = file;
            },
        }
    }
</script>
