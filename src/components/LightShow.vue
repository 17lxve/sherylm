<script>
export default{
    props: {
        link:{
            type: String,
            required : true
        }, name : {
            type : String,
            required : true
        }
    }
}
</script>
<template>
    <img :src="link" alt="Lunettes">
    <p>{{ name }}</p>
</template>