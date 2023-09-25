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
    <ContactHero :company_name="'Timmy \'s Devlog'" :slogan="'Gay'" :background_image="'27.jpg'" />
    <ContactForm />
  </div>
</template>
