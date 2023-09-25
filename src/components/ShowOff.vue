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
      <LightShow :link="'/glasses/' + a" :name="'John'" />
      <LightShow :link="'/glasses/' + b" :name="'Elvis'" />
      <LightShow :link="'/glasses/' + c" :name="'Presley'" />
      <LightShow :link="'/glasses/' + d" :name="'Kadher'" />
    </div>
    <button @click="$router.push('/product')">Voir nos collections</button>
  </div>
  <hr />
</template>

<style scoped>
.shop {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.1% 5%;
}
.vitrine {
  display: flex;
  flex-direction: row;
  width: 100%;
}
button {
  margin: 2% 0;
  width: min-content;
  padding: 2% 8%;
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
  padding: 3% 10%;
}
button:active {
  background-color: black;
  transition: all 0.1ms;
}
</style>
