/* eslint-disable vue/multi-word-component-names */
<template>
    <section>
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
        data() {
            return {
                movies: [{
                    "adult": false,
                    "backdrop_path": "/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
                    "genre_ids": [14, 28, 12],
                    "id": 453395,
                    "original_language": "en",
                    "original_title": "Doctor Strange in the Multiverse of Madness",
                    "overview": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
                    "popularity": 16751.01,
                    "poster_path": "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
                    "release_date": "2022-05-04",
                    "title": "Doctor Strange in the Multiverse of Madness",
                    "video": false,
                    "vote_average": 7.5,
                    "vote_count": 3518
                }, {
                    "adult": false,
                    "backdrop_path": "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
                    "genre_ids": [14, 12, 28],
                    "id": 338953,
                    "original_language": "en",
                    "original_title": "Fantastic Beasts: The Secrets of Dumbledore",
                    "overview": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
                    "popularity": 4038.798,
                    "poster_path": "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
                    "release_date": "2022-04-06",
                    "title": "Fantastic Beasts: The Secrets of Dumbledore",
                    "video": false,
                    "vote_average": 6.8,
                    "vote_count": 2057
                }]
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
           /* async getMovies() {
                const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17');
                this.movies = response.results;
                console.log(this.movies);

            }*/
        }
    }
</script>
<style scoped>

</style>