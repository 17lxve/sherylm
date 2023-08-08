<script>
export default {
    props:{
        company_name : {
            type : String,
            required : true
        }, slogan : {
            type : String,
            required : true
        }, background_image : {
            type : String,
            required : true
        }
    }
}
</script>
<template>
    <img :src="background_image" alt="background image">
    <div>
    <h3>{{ company_name }}</h3>
    <h1>{{ slogan }}</h1>
    <button>Découvrir nos produits</button>
    </div>
</template>