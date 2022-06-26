<template>
    

<section class="cid-t9Olg2rxwj" id="">

    

    

    <div class="container">
        <div class="row justify-content-center text-center">
            <div class="title col-12 col-lg-8 text-white">
                
                Search
                
            </div>
        </div>

        <div class="row py-2 justify-content-center">
            <div class="col-12 col-lg-6  col-md-8 " data-form-type="formoid">
            <div class="row">
                        <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for filling out the form!</div>
                        <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col" data-for="email">
                            <input type="email" name="email" placeholder="Search" data-form-field="Email" required="required" class="form-control display-7" id="email-form3-8">
                        </div>
                    </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>
export default {
    name : "SearchComponent",
    props : {

    },
    components: {

    }
}
</script>
<style scoped>
input{
    background-color: transparent;
    color: white;
    border: 2px solid white;
    font-weight: border;
}
.form-control{
color: white;
    font-weight: border;
}
.cid-t9Olg2rxwj {
    background-color: #784ace;
}
</style>