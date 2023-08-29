<script>
// import HeroSection from '../components/HeroSection.vue'
// import ContactForm from '../components/ContactForm.vue'
import ContactHero from '../components/ContactHero.vue';
export default{
  components : {
    //HeroSection, ContactForm,
    ContactHero
}
}
</script>
<template>
<!-- 
  <div>
    <HeroSection
    :company_name="'Timmy \'s Devlog'"
    :slogan="'Gay'"
    :background_image="'27.jpg'"
    />
    <ContactForm/>
  </div> -->

  <div>
    <ContactHero
    :company_name="'Timmy \'s Devlog'"
    :slogan="'Gay'"
    :background_image="'27.jpg'"
    />
  </div>
</template>
