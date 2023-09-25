<script>
export default {
  props: {
    cover: {
      type: String,
      required: true
    }
  },
  computed: {
    bbc() {
      return `background-image: url(/general/${this.cover});`
    }
  }
}
</script>
<template>
  <div class="out">
    <div class="inn" :style="bbc"></div>
  </div>

  <!-- <img :src="'/general/' + cover" alt="Cover Picture" /> -->
</template>

<style scoped>
.out {
  width: 100%;
  display: flex;
  justify-content: center;
}
.inn {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 90.278%;
  aspect-ratio: 13/5;
}
</style>
