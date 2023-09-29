<script>
// import HeroSection from '../components/HeroSection.vue'
import ContactForm from '../components/ContactForm.vue'
import ContactHero from '../components/ContactHero.vue'
export default {
  components: {
    ContactForm,
    ContactHero
  }
}
</script>
<template>
  <div>
    <ContactHero :background_image="'27.jpg'" />
    <ContactForm />
  </div>
</template>
