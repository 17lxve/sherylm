<script>
// import YanGo from './YanGo.vue'
export default {
  methods: {
    open_maps() {
      window.open('https://goo.gl/maps/Uz728hE5ZUeHopmG6', '_blank')
    },
    open_yango() {
      window.open(
        'https://3.redirect.appmetrica.yandex.com/route?' +
          'start-lat=5.402296881669657' +
          '&start-lon=-3.976345316777942' +
          '&end-lat=5.348922371094867' +
          '&end-lon=-3.9971046030935775' +
          '&level=<business>' +
          '&ref=yoursiteru' +
          '&appmetrica_tracking_id=1178268795219780156' +
          '&lang=fr")'
      )
    }
  },
  components: {
    // YanGo
  }
}
</script>
<template>
  <div class="root">
    <iframe
      id="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.4445682214414!2d-3.999685589282948!3d5.348913835674642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb6bb631f727%3A0x3f888124a616bad0!2sSheryl%20M%20Optique!5e0!3m2!1sen!2sci!4v1687625786644!5m2!1sen!2sci"
      width="50%"
      height="450"
      style="border: 0"
      allowfullscreen="false"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="hanger">
      <h1>Retrouvez Sheryl M. Optique à la Cité des Arts</h1>
      <p>
        Nous avons hâte de vous acceuillir dans notre espace privilégié, où la qualité des soins et
        l'expérience client sont notre priorité absolue.
      </p>
      <!-- <button @click="open_maps()">Google Maps</button> -->
      <!-- <button @click="open_yango()">Yango</button> -->
      <hr style="margin: 5% 0 5% 5%" />
      <div
        style="
          width: max-content;
          float: right;
          font-family: Arial;
          font-size: large;
          font-weight: bold;
        "
      >
        <ul>
          <p>Téléphone</p>
          <li><p>+225 07 11 11 56 86</p></li>
          <li><p>+225 01 01 99 37 33</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2%;
  width: 100%;
}
.hanger {
  text-align: right;
  width: 48%;
}
.hanger h1 {
  font-family: Outfit;
}
li {
  list-style-type: none;
}
button {
  width: 25%;
  margin: 4%;
  background-color: transparent;
  outline: outset;
  border: none;
  padding: 1% 3%;
  animation: shine 6s ease-in-out infinite;
  font-size: large;
  cursor: pointer;
}
button:hover {
  background-color: black;
  color: white;
}
@keyframes shine {
  0%,
  100% {
    outline-color: red;
    font-family: Outfit;
    border-radius: 2rem;
    outline-width: 10px;
  }
  14% {
    outline-color: orange;
  }
  28.5% {
    outline-color: yellow;
    outline-width: 5px;
  }
  42.85% {
    outline-color: green;
    font-family: Inika;
  }
  57.14% {
    outline-color: blue;
    outline-width: 10px;
  }
  71.42% {
    outline-color: indigo;
  }
  85.7% {
    outline-color: purple;
    outline-width: 5px;
  }
}
</style>
