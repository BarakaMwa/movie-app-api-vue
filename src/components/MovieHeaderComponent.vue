<template>
<section class="header14 cid-t9Nygzys0L mbr-fullscreen mbr-parallax-background" id="header14-1">

    <div class="mbr-overlay" style="opacity: 0.3; background-color: rgb(35, 35, 35);">
    </div>

    <div class="container">
        <div class="media-container-row">

            <div class="mbr-figure" style="width: 60%;">
                <img src="/assets/images/mbr.png" alt="Mobirise" title="">
            </div>

            <div class="media-content">
                <h1 class="mbr-section-title pb-3 align-left mbr-white mbr-fonts-style display-1"><strong>
                    {{movie.title}}</strong></h1>
                
                <div class="mbr-section-text  pb-3 ">
                    <p class="mbr-text align-left mbr-white mbr-fonts-style display-5">
                        {{movie.description}}</p>
                </div>

                <div class="media-container-column" >
                        <div class="row form-inline">
                            <div class="col-auto buttons-wrap"><button type="button" class="btn btn-danger display-4">Liked Movies</button></div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>
export default {
  name: 'HeaderComponent',
  props: {
    movie: Object,
  }
}
</script>
<style scoped>

</style>
