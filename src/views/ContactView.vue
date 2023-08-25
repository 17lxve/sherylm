<script>
import HeroSection from '../components/HeroSection.vue'
import ContactForm from '../components/ContactForm.vue'
export default{
  components : {
    HeroSection, ContactForm
  }
}
</script>
<template>
  <div>
    <HeroSection
    :company_name="'Timmy \'s Devlog'"
    :slogan="'Gay'"
    :background_image="'27.jpg'"
    />
    <ContactForm/>
  </div>
</template>
