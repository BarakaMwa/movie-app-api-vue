<template>
    <button class="btn btn-white-outline btn-sm display-4 m-1" v-on:click="likeMovie(movie)">
        <span class="mobi-mbri mobi-mbri-like mbr-iconfont mbr-iconfont-btn" style="color:rgb(46, 137, 237);"></span>
    </button>
</template>
<script>
    const localStore = JSON.parse(localStorage.getItem("liked-movies-vue"))
    export default {
        mounted() {

        },
        name: "LikeButtonComponent"
        , props: {
            movie: Object
        },
        components: {},
        methods: {
            likeMovie(movie) {



                console.log(localStore);

                if(localStore === null || localStore === undefined){
                    this.save(movie,null)
                }
                else{
                    /*if exists Dont add*/
                    if (localStore.filter((item) => item.id === movie.id).length === 0) {
                        this.save(movie,localStore)
                    } else {
                        this.$swal(
                            {
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Movie Already Liked',
                            }
                        );
                    }
                }

            }
            , save(movie,localStore) {

                let newLikedMovies;

                if(localStore === null){
                    newLikedMovies = movie;
                }else{
                    // localStore=JSON.parse(localStore.toString()+","+movie.toString())
                    newLikedMovies = localStore;
                }

                console.log(newLikedMovies);

                this.saveToLocalStorage(newLikedMovies)
            },
            saveToLocalStorage(items) {
                localStorage.setItem('liked-movies-vue', JSON.stringify(items));
            }
        },
    }
</script>
<style scoped>
    .btn {
        border-radius: 40px;
    }
</style>
