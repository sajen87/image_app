<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <button class="btn btn-primary" @click="fetchData()">Click for pic list</button>
                <ul>
                    <li v-for="pic in pics" @click.prevent="sendFile(pic)"><a :href="pic.url">{{ pic.title}}</a></li>
                </ul>
            </div>

        </div>


    </div>

</template>

<script>

    export default {
        data: function () {
            return {
                pics: [],
                pictureNumber: 5
            }
        },
        methods:
            {
                sendFile(file) {
                    this.$emit('updatePic', file);
                },
                fetchData() {
                    this.$http.get('https://jsonplaceholder.typicode.com/photos')
                        .then(response => response.json())
                        .then(data => {

                            var resultArray = [];

                            for (var key in data) {
                                if (key < this.pictureNumber) {
                                    resultArray.push(data[key]);
                                }

                            }
                            this.pics = resultArray;
                        })
                }
            }
    }
</script>

<style scoped>
    .btn {
        margin: 50px 0;
    }

    ul {
        list-style: none;
    }
</style>
