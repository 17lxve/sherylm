<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    colors: {
      type: Array[String],
      required: true
    },
    picture: {
      type: String,
      required: true
    }
  }
}
</script>
<template>
  <div class="card">
    <div class="pic-div">
      <img class="pic" :src="'/glasses/' + picture" alt="Glasses" />
    </div>
    <div>
      <h3>{{ name }}</h3>
    </div>
    <div class="colors-display">
      <div
        v-for="color in colors"
        :key="color"
        class="color-show"
        :style="'background-color:' + color + ';'"
      ></div>
    </div>
  </div>
</template>
<style scoped>
.colors-display {
  display: flex;
  flex-direction: row-reverse;
}
.color-show {
  width: 1vw;
  aspect-ratio: 1/1;
  border-radius: 50%;
  margin: 3px;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  margin: 2%;
}
.pic-div {
  width: 80%;
  aspect-ratio: 27/16;
}
.pic {
  width: 100%;
}
h3 {
  text-align: center;
  text-transform: uppercase;
  font-family: Inika;
  text-shadow: 0.5px 0.5px gold;
}
</style>
