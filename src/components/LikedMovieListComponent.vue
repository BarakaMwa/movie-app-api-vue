<template>

<section>
<Search/>
<section class="features3 cid-t9OnTOm56F" id="features3-d">



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
                                <UnLikeButton :movie=item />
                            </div>
                        </div>
                    </div>


                </div>
            </div>


</section>

</section>
</template>
<script>
import UnLikeButton from './UnLikeButtonComponent'

export default{
    mounted() {
        this.getMovies() //method1 will execute at pageload
    },
    data() {
        return {
            movieList: this.movies
        }
},
    name: "LikedMovieListComponent",
    components: {
    UnLikeButton,
}
    ,props: {
movies: Object
    }, methods: {
        getMovie(movie) {
            console.log(movie)
        }
}
</script>