<script>
import HeroSection from '../components/HeroSection.vue'
import CallToAction from '../components/CallToAction.vue'
import ShowOff from '../components/ShowOff.vue'
import InvertCTA from '../components/InvertCTA.vue'
import GoogleMaps from '../components/GoogleMaps.vue'
export default {
  components: { HeroSection, CallToAction, ShowOff, InvertCTA, GoogleMaps }
}
</script>

<template>
  <div>
    <HeroSection
      :company_name="'Sheryl M Optique'"
      :slogan="'Votre référence pour les lunettes à Abidjan'"
      :background_image="'11.jpg'"
    />

    <CallToAction
      :title="'Un examen de vue précis'"
      :company_name="'Sheryl M Optique'"
      :call="''"
      :clicker="'Prendre rendez-vous maintenant'"
      :background_image="'38.jpg'"
    >
      Grâce à cette évaluation complète, nous pourrons vous offrir des verres correcteurs
      parfaitement adaptés à vos besoins uniques. Investir dans un examen oculaire de qualité est la
      première étape pour garantir une vision claire et comfortable, vous permettant ainsi de
      profiter pleinement du monde qui vous entoure.
    </CallToAction>

    <ShowOff
    :a="'1.webp'"
    :b="'2.webp'"
    :c="'3.webp'"
    :d="'4.webp'"
    />

    <InvertCTA
      :title="'Une paire qui vous embellit'"
      :company_name="'Sheryl M Optique'"
      :call="''"
      :clicker="'Voir nos lunettes'"
      :background_image="'39.jpg'"
    >
      Choisir des montures de lunettes adaptées à la forme de votre visage et à votre teint est tout
      aussi crucial que de bénéficier d'un examen oculaire précis. Dans notre magasin d'optique,
      nous comprenons que chaque visage est unique, et c'est pourquoi notre équipe expérimentée est
      là pour vous guider dans votre choix.
    </InvertCTA>

    <!-- <img src="/general/29.jpg" alt="Cover Picture" /> -->

    <CallToAction
      :title="'Votre partenaire pour une meilleure vision'"
      :company_name="'Sheryl M Optique'"
      :call="''"
      :clicker="'Prendre rendez-vous'"
      :background_image="'29.jpg'"
    >
      Notre expérience vous apportera bien plus qu'une simple amélioration de votre vue. Dans notre
      magasin d'optique, nous nous engageons à vous offrir des solutions visuelles qui, non
      seulement rehausseront votre acuité visuelle, mais rehausseront également votre charisme.
    </CallToAction>
    <GoogleMaps />
  </div>
</template>
