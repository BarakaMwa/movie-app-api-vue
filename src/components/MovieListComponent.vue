<template>

    <section>
        <Search/>
        <section class="features3 cid-t9OnTOm56F" id="features3-d" v-on:load="showListOfMovies(movies)">

            <div class="container-fluid scroll-x">
                <div class="media-container-row row justify-content-start">


                    <div class="card p-3 col-6 col-md-6 col-lg-2 movie-card animated animate__pulse mt-5 mb-5 p-4"
                         v-for="item in movies"
                         :key="item.id" >
                        <div class="card-wrapper p-0">
                            <div class="card-img" v-on:click=getMovie(item) >

                                <img :src="'https://image.tmdb.org/t/p/w300'+item.poster_path" :alt=item.title
                                     :title=item.title />
                            </div>
                            <div class="card-box">

                            </div>
                            <div class="mbr-section-btn text-center p-0">
                                <LikeButton :movie=item />
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </section>

    </section>
</template>
<script>
    import Search from './SearchComponent.vue';
    import LikeButton from './LikeButtonComponent.vue';

    export default {
        mounted() {
            this.showListOfMovies(this.movies) //method1 will execute at pageload
        },
        data() {
            return {
                movieList: this.movies
            }
        },
        name: "MovieListComponent",
        components: {
            LikeButton, Search
        }
        , props: {
            movies: Object
        }, methods: {
            getMovie(movie) {
                console.log(movie)
            },
            showListOfMovies(list){
                console.log(list)

    }
        }

    }

</script>
<style>
    .movie-card:hover {
        animation: pulse; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 1s; /* don't forget to set a duration! */
    }

    .scroll-x > .row {
        overflow-x: auto;
        flex-wrap: nowrap;

    }
</style>
