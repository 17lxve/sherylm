<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>
<template>
  <div class="box">
    <img :src="link" alt="Lunettes" />
    <p>{{ name }}</p>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  aspect-ratio: 3/2;
}
p {
  text-transform: capitalize;
  font-family: Inika;
  font-size: large;
  font-weight: 600;
  font-style: oblique;
  text-shadow: 1px 1px burlywood;
}
.box {
  width: 25%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
