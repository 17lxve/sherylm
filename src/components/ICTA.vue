<script>
export default{
    props : {
        back:{
            type:String,
            required : true
        },
        title:{
            type : String,
            required : true
        }
    },
  computed: {
    background_image_style() {
      return `background-image: url("/general/${this.back}");`
    }
  }
}
</script>

<template>
    <div class="full-box">

        <div class="pic half" :style="background_image_style">
        </div>

        <hr>

        <div class="txt half">
            <h2>{{ title }}</h2>
            <hr>
            <p>
                <slot></slot>
            </p>
        </div>
    </div>
</template>
<style scoped>
.half{
    width: 45%;
    aspect-ratio: 5/3;
}
.txt{
    font-size: calc(1.1vw + 0.4rem);
    font-family: Inika;
}
.txt h2{
    font-family: Outfit;
    font-weight: bolder;
    font-size: 3vw;
}
.pic{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.full-box{
    display: flex;
    flex-direction: row;
    margin: 2% 2% 5vh 2%;
    max-height: fit-content;
    overflow: hidden;
    align-items: center;
    justify-content: center;
}
</style>