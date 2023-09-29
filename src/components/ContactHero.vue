<script>
export default {
  props: {
    background_image: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="boku">
    <img :src="'/general/' + background_image" alt="Contact Cover" />
  </div>
</template>

<style>
img {
  width: 80%;
  aspect-ratio: 3/1;
  object-fit: cover;
  object-position: 50% 35%;
}
.boku {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
