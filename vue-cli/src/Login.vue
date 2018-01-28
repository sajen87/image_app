<template>
    <div class="col-3">

        <h2>Why you so serious</h2>

        <h1 v-on:click="logged">Kliknij {{ status }}</h1>

        <form @submit.prevent="login">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" v-model="form.userEmail"
                       class="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp"
                       placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.
                </small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" v-model="form.password" class="form-control" id="exampleInputPassword1"
                       placeholder="Password">
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>

</template>

<script>

    export default {
        // props: {
        //     status: {
        //         type: boolean,
        //         required: true
        //     }},
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
            logged() {
                this.status = true;
                this.$emit('logged', this.status);
            },
            login() {
                if (this.form.userEmail === this.userEmail && this.form.password === this.pass) {
                    this.$emit('logged', test);
                    console.log("dobre haslo");

                }
                else {
                    alert("zle haslo")
                }
            }
        }
    }
</script>

<style scoped>
    h2 {
        text-align: center;
        color: darkgrey;
    }
</style>