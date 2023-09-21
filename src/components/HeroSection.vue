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
      // return `background-image: url("/general/${this.background_image}");`
      return `background-image: linear-gradient(
              rgba(0, 0, 0, 0.2), 
              rgba(0, 0, 0, 0.2)
              ),url("/general/${this.background_image}");`
    }
  }
}
</script>
<template>
  <!-- <img :src="background_image" alt="background image" /> -->
  <div class="bg-div" :style="background_image_style">
    <div class="text-div">
      <h3>{{ company_name }}</h3>
      <h1>{{ slogan }}</h1>
    </div>
    <div class="btdiv">
      <!-- <button @click="$router.back()">Découvrir nos produits</button> -->
      <button @click="$router.push('/product')">Découvrir nos produits</button>
    </div>
  </div>
</template>

<style scoped>
@keyframes bounce {
  0%,
  100% {
    border-radius: 40px;
  }
  20% {
    border-radius: 30px;
  }
  40% {
    border-radius: 20px;
  }
  60% {
    border-radius: 10px;
  }
  80% {
    border-radius: 20px;
  }
}
.bg-div2 {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  aspect-ratio: 10/3;
  margin-bottom: 1%;
}
.bg-div{
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* flex: 1 0 auto; */
  /* flex-wrap: nowrap; */
  aspect-ratio: 48/10;
}
.bg-div h1,
.bg-div h3 {
  color: white;
  font-family: Outfit;
  font-weight: bold;
}

.text-div {
  width: 50%;
  text-align: center;
}
.btdiv {
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  height: 50%;
  width: 100%;
}
button {
  text-transform: capitalize;
  color: white;
  background-color: transparent;
  border: 2px brown thick;
  border-radius: 40px;
  font-size: large;
  padding: 1%;
  margin-bottom: 2%;
  font-family: Outfit;
  max-width: 100%;
  min-width: 40%;
  transition: all 1s;
}
button:hover {
  background-color: burlywood;
  cursor: pointer;
  animation: bounce 1s ease-in-out infinite;
}
button:active {
  background-color: black;
  transition: all 0.1ms;
}
</style>
