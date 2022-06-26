<template>

<section>
<Search/>
<section class="features3 cid-t9OnTOm56F" id="features3-d">

<div class="container-fluid">
        <div class="media-container-row">
            <div class="card p-3 col-6 col-md-6 col-lg-3">
                <div class="card-wrapper p-0">
                    <div class="card-img">
                        <img src="assets/images/mbr-1.jpg" alt="Mobirise" title="">
                    </div>
                    <div class="card-box">
                        
                        
                    </div>
                    <div class="mbr-section-btn text-center p-0">
                        <LikeButton movie=@movie />
                    </div>
                </div>
            </div>

            <div class="card p-3 col-6 col-md-6 col-lg-3">
                <div class="card-wrapper p-0">
                    <div class="card-img">
                        <img src="assets/images/mbr-1.jpg" alt="Mobirise" title="">
                    </div>
                    <div class="card-box">
                        
                        
                    </div>
                    <div class="mbr-section-btn text-center p-0">
                        <LikeButton movie=@movie />
                    </div>
                </div>
            </div>

            <div class="card p-3 col-6 col-md-6 col-lg-3">
                <div class="card-wrapper p-0">
                    <div class="card-img">
                        <img src="assets/images/mbr-1.jpg" alt="Mobirise" title="">
                    </div>
                    <div class="card-box">
                        
                        
                    </div>
                    <div class="mbr-section-btn text-center p-0">
                        <LikeButton movie=@movie />
                    </div>
                </div>
            </div>

            <div class="card p-3 col-6 col-md-6 col-lg-3">
                <div class="card-wrapper p-0">
                    <div class="card-img">
                        <img src="assets/images/mbr-1.jpg" alt="Mobirise" title="">
                    </div>
                    <div class="card-box">
                        
                        
                    </div>
                    <div class="mbr-section-btn text-center p-0">
                        <LikeButton movie=@movie />
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
export default{
    name: "MovieListComponent",
    components: {
    LikeButton, Search
}
    ,props: { 
        movie: Object
    }
}
</script>
