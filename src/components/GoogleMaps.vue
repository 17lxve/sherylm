<script>
export default {
  data() {
    return {
      sk: false
    }
  }
}
</script>

<template>
  <button @click="sk = !sk">CLCL</button><br />
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
    <div class="hanger" v-show="sk">
      <h1>Retrouvez Sheryl M. Optique à la Cité des Arts</h1>
      <p>
        Nous avons hâte de vous acceuillir dans notre espace privilégié, où la qualité des soins et
        l'expérience client sont notre priorité absolue.
      </p>
      <button>Google Maps</button>
      <button>Yango</button>
    </div>
  </div>
  <div style="display: flex; flex-direction: row;">
  <div style="width: 50%;">
    <ul>
      <p>Téléphone</p>
      <li><p>+225 07 11 11 56 86</p></li>
      <li><p>+225 01 01 99 37 33</p></li>
    </ul>
  </div>
  <div style="width: 50%;">
    <ul>
      <p>Email</p>
      <li><p>kouadiobhegnino@gmail.com</p></li>
      <li><p>timmydavidsonkb@gmail.com</p></li>
    </ul>
  </div>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  flex-direction: row;
  gap: 2%;
  width: 100%;
}
.hanger {
  text-align: right;
  width: 40%;
}
.hanger h1 {
  font-family: Outfit;
}
</style>
