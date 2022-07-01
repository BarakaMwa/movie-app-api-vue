/* eslint-disable vue/multi-word-component-names */
<template>
    <section v-on:load="getMovies('')" >
        <NavBar/>
        <Header :title=intro subTitle="Checkout Movie List"/>
        <MovieList :movies=movies />
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
                movies: []
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

                let response;
                

                if(search === '' || search === null || search === undefined){
                    response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17');
                }

                // const data = await response.json();
                const results = await response.json();
                // console.log(data.results);
                console.log(results.results);
                // this.movies = data.results;
                this.movies = results.results;
                // console.log(this.movies);

            }
        },
    }
</script>
<style scoped>

</style>