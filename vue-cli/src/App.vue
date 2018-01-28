<template>
    <div>
        <router-view></router-view>
        <hr>
        <h1 v-on:logged="changeStatus($event)">{{ status }}</h1>
        <pic-window v-if="isLoggedIn" :file="file"></pic-window>
        <file-selector v-if="isLoggedIn" @updatePic="updatePicEventHandler"></file-selector>
        <login v-if="isLoggedIn" v-bind:title="title" v-on:changeTitle="updateTitle($event)"></login>
    </div>
</template>

<script>
    import FileSelector from './FileSelector.vue';
    import PicWindow from './PicWindow.vue';
    import Login from './Login.vue';

    export default {

        components: {PicWindow, FileSelector, Login},


        data() {
            return {
                file: {},
                status: false,
                isLoggedIn: false,

            }
        },

        methods: {
            changeStatus(event) {
                event = alert("vhu")
            },
            updatePicEventHandler(file) {
                this.file = file;
            },


        }
    }
</script>
