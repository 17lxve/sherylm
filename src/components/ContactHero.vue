<script>
export default {
  props: {
    company_name: {
      type: String,
      required: true
    },
    slogan: {
      type: String,
      required: true
    },
    background_image: {
      type: String,
      required: true
    }
  },
  computed: {
    background_image_style() {
      return `background-image: url("/general/${this.background_image}");`
    }
  }
}
</script>

<template>
  <div class="boku">
    <img :src="'/general/' + background_image" alt="Contact Cover">
  </div>
</template>

<style>
img {
  width : 70%;
  aspect-ratio: 3/1;
}
.boku{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>