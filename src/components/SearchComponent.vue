<template>
    <section class="cid-t9Olg2rxwj" id="">


        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="title col-12 col-lg-8 text-white">

                    Search

                </div>
            </div>

            <div class="row py-2 justify-content-center">
                <div class="col-12 col-lg-6  col-md-8">
                    <div class="row">
                        <div class="form-group col-lg-12">
                            <input type="email" name="email" placeholder="Search" data-form-field="Email"
                                   required="required" class="form-control display-7" v-on:change="getMovies(this.value)">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {

        name: "SearchComponent",
        props: {},
        components: {},
        methods:{

         }
    }
</script>
<style scoped>
    input {
        background-color: transparent;
        color: black;
        border: 3px solid white;
        font-weight: bolder;
    }

    .form-control:focus {
        color: white;
        font-weight: bolder;
        border: 3px solid white;
        background-color: transparent;
    }

    .cid-t9Olg2rxwj {
        background-color: #784ace;
    }
</style>