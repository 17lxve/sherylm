<script>
import ProductDisplay from '../components/ProductDisplay.vue';
export default {
  components : {
    ProductDisplay
  }
}
</script>
<template>
  <div class="showroom">
    <ProductDisplay :name="'Past'" :colors="['yellow', 'gold','blue', 'red', 'green', 'purple']" :picture="'21.jpg'"/>
    <ProductDisplay :name="'Present'" :colors="['purple', 'indigo', 'blue','lightgreen','yellow', 'orange', 'red']" :picture="'22.jpg'"/>
    <ProductDisplay :name="'Future'" :colors="['yellow', 'gold','blue', 'red', 'green', 'purple']" :picture="'23.jpg'"/>
    <ProductDisplay :name="'Tupac'" :colors="['yellow', 'gold','blue', 'red', 'green', 'purple']" :picture="'24.jpg'"/>
    <ProductDisplay :name="'Drake'" :colors="['yellow', 'gold','blue', 'red', 'green', 'purple']" :picture="'25.jpg'"/>
    <ProductDisplay :name="'Yachty'" :colors="['yellow', 'gold','blue', 'red', 'green', 'purple']" :picture="'26.jpg'"/>
    <ProductDisplay :name="'Petrol'" :colors="['yellow', 'gold','blue', 'red', 'green', 'purple']" :picture="'27.jpg'"/>
    <ProductDisplay :name="'EV'" :colors="['yellow', 'gold','blue', 'red', 'green', 'purple']" :picture="'28.jpg'"/>
  </div>
  <div class="page">
    <div class="">
      Previous
    </div>
    <div>
      Next
    </div>
  </div>
</template>
<style>
.showroom{
  display: flex;
  flex-direction: row;
  overflow: hidden;
  flex-shrink: 0;
  flex-wrap: wrap;
}
</style>