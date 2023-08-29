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
    <img :src="background_image" alt="Contact Cover">
</template>