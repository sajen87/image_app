<template>
    <div class="container col-sm-6">
        <div class="input-group mb-3" v-if="!image">
            <div class="input-group-prepend">
                <span class="input-group-text">Select an image</span>
            </div>

            <div class="custom-file">
                <input type="file" @change="onFileChange" class="custom-file-input" id="inputGroupFile01">
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            </div>


        </div>
        <div v-else>
            <img :src="image"/>
            <button type="button" class="btn btn-danger" @click="removeImage">Remove image</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "upload-image",

        data() {

            return {
                image: ''
            }

        },
        methods: {
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                var image = new Image();
                var reader = new FileReader();
                var vm = this;

                reader.onload = (e) => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            removeImage: function (e) {
                this.image = '';
            }
        }

    }
</script>

<style scoped>
    img {
        width: 50%;
        margin: auto;
        display: block;
        margin-bottom: 10px;
    }
</style>