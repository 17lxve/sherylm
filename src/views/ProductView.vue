<script>
import ShowOffFull from '../components/ShowOffFull.vue'

export default { components: { ShowOffFull } }
</script>
<template>
  <div>
    <img src="/general/30.jpeg" alt="cover image" class="cover" />
    <ShowOffFull :a="'14.jpg'" :b="'18.jpg'" :c="'40.jpg'" :d="'44.jpg'" />
    <ShowOffFull :a="'91.jpg'" :b="'102.jpg'" :c="'85.jpg'" :d="'100.jpg'" />
    <ShowOffFull :a="'130.jpg'" :b="'128.jpg'" :c="'116.jpg'" :d="'144.jpg'" />
    <ShowOffFull :a="'401.jpg'" :b="'420.jpg'" :c="'436.jpg'" :d="'432.jpg'" />
    <ShowOffFull :a="'499.jpg'" :b="'505.jpg'" :c="'465.jpg'" :d="'511.jpg'" />
  </div>
</template>
<style scoped>
.cover {
  width: 100%;
  aspect-ratio: 4/1;
}
</style>
