<template>
    <div>
        <hr>
        <h3>Lista dostępnych zdjęć:</h3>
        <button class="btn btn-primary" @click="fetchData()">Rozwin liste zdjec</button>
        <ul>
            <li v-for="pic in pics" @click.prevent="sendFile(pic)"><a :href="pic.url">{{ pic.title}}</a></li>
        </ul>
    </div>

</template>

<script>

    export default {
        data: function () {
            return {
                pics: []
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

                            for (var key in data ) {
                                if(key < 15) {
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

    div {
        text-align: center;
    }

    .btn {
        margin: 50px 0;
    }

    ul {
        list-style: none;
    }
</style>
