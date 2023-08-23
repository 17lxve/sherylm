<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    company_name: {
      type: String,
      required: true
    },
    call: {
      type: String,
      required: true
    },
    clicker: {
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
  <div class="box">
    <div class="first-half">
      <h2>{{ title }}</h2>
      <hr />
      <p>
        <slot></slot>
      </p>
    </div>

    <div class="second-half" :style="background_image_style">
      <h1>{{ call }}</h1>
      <button @click="$router.push('/contact')">{{ clicker }}</button>
    </div>
  </div>
</template>

<style scoped>
.first-half {
  width: 40%;
  color: black;
  font-family: Inika;
}
.second-half {
  width: 30%;
  color: brown;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}
button {
  border: 0.3px dotted black;
  background-color: whitesmoke;
  color: black;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  margin-right: 2%;
  width: fit-content;
  padding: 2%;
  border-radius: 5px;
  transition: all 1s;
  margin-bottom: 2%;
  position: absolute;
  right: 0;
  bottom: 0;
}
button:hover {
  background-color: brown;
  color: white;
  border: none;
  padding: 3%;
  margin-bottom: 5%;
  transition: all 1s;
}
button:active {
  background-color: black;
  transition: all 0.1ms;
}
h1,
h2 {
  font-family: Outfit;
  font-weight: bold;
}
.box {
  display: flex;
  flex-direction: row;
  margin-bottom: 2%;
  justify-content: center;
  gap: 10%;
  /* align-items: center; */
}
</style>
