<template>
    <div class="container col-sm-4 col-sm-offset-4">


        <h2>Why you so serious</h2>


        <form @submit.prevent="login">
            <div class="form-group">
                <label for="exampleInputEmail1"></label>
                <input type="email" v-model="form.userEmail"
                       class="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp"
                       placeholder="Enter email">
                <div class="form-group">
                    <label for="exampleInputPassword1"></label>
                    <input type="password" v-model="form.password" class="form-control" id="exampleInputPassword1"
                           placeholder="Password">
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    </div>

</template>

<script>

    export default {
        data() {
            return {
                form: {
                    userEmail: '',
                    password: ''
                },
                userEmail: "test@test.com",
                pass: "1234",
                status: false,

            }
        },
        methods: {
            login() {
                if (this.form.userEmail === this.userEmail && this.form.password === this.pass) {
                    this.status = true;
                    this.$emit('logged', this.status);
                }
                else {
                    alert("zle haslo")
                }
            }
        }
    }
</script>

<style scoped>

    .container {

        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
    }

    h2 {
        text-align: center;
        color: darkgrey;
    }

</style>