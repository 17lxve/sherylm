<script>
import LightShow from './LightShow.vue'
export default {
  components: {
    LightShow
  },
  props: {
    a: {
      type: String,
      required: true
    },
    b: {
      type: String,
      required: true
    },
    c: {
      type: String,
      required: true
    },
    d: {
      type: String,
      required: true
    }
  }
}
</script>
<template>
  <div class="shop">
    <div class="vitrine">
      <LightShow :link="'/glasses/' + a" :name="'Disponible'" />
      <LightShow :link="'/glasses/' + b" :name="'En Rupture'" />
      <LightShow :link="'/glasses/' + c" :name="'Disponible'" />
      <LightShow :link="'/glasses/' + d" :name="'Disponible'" />
    </div>
  </div>
</template>

<style scoped>
.shop {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.vitrine {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1%;
}
button {
  margin: 2% 0;
  width: min-content;
  padding: 2% 5%;
  background-color: white;
  color: black;
  font-family: Outfit;
  font-size: large;
  text-align: center;
  text-transform: uppercase;
  text-decoration: double underline;
  transition: all 1s;
}
button:hover {
  background-color: brown;
  color: white;
  border-radius: 25px;
  transition: all 1s;
  cursor: pointer;
}
button:active {
  background-color: black;
  transition: all 0.1ms;
}
</style>
