<script>
export default {
    props : {
        title : {
            type : String,
            required : true
        }, company_name : {
            type : String,
            required : true
        }, call : {
            type : String,
            required : true
        }, clicker : {
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
    
    <div>
        <h5>{{ title }}</h5>
        <h2>{{ call }}</h2>
        <button>{{ clicker }}</button>
    </div>
    <div>
    <h2>{{ title }}</h2>
    <hr>
    <p>
        <slot></slot>
    </p>
    </div>

</template>