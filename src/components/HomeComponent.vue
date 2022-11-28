/* eslint-disable vue/multi-word-component-names */
<template>
    <section v-on:load="getMovies('')" >
        <NavBar/>
        <Header :title=intro subTitle="Checkout Movie List"/>
        <MovieList :movies=moviesList />
        <Footer info="By Baraka Mwang'amba"/>
    </section>

</template>
<script>
    import NavBar from "./NavbarComponent.vue"
    import Header from "./HeaderComponent.vue"
    import Footer from "./FooterComponent.vue"
    import MovieList from "./MovieListComponent.vue"

    export default {

        mounted() {
            this.getMovies() //method1 will execute at pageload
        },
        data() {
            return {
                moviesList: [],
            }
        },
        name: 'HomeComponent',
        props: {
            intro: String
        }
        , components: {
            NavBar, Header, Footer, MovieList
        },
        methods: {
            async getMovies(search) {

                let url;

                if(search === '' || search === null || search === undefined){
                    url = 'https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17';
                }else {
                    url = "https://api.themoviedb.org/3/search/movie?api_key=d0f5f2e135336200362af8a1a73acb17&query=" + search;
                }

                const response = await fetch(url);

                const data = await response.json();
                console.log(data.results);
                this.moviesList = data.results;
                // console.log(this.movies);
                return data.results;

            }
        },
    }
</script>
<style scoped>

</style>