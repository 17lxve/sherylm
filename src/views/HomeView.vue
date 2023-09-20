<script>
import HeroSection from '../components/HeroSection.vue'
import ShowOff from '../components/ShowOff.vue'
import CoverImg from '../components/CoverImg.vue'
import GoogleMaps from '../components/GoogleMaps.vue'
import ICTA from '../components/ICTA.vue'
import CTA from '../components/CTA.vue'
export default {
  components: { HeroSection, ShowOff, CoverImg, GoogleMaps, CTA, ICTA }
}
</script>

<template>
  <div>
    <HeroSection
      :company_name="'Sheryl M Optique'"
      :slogan="'Votre référence pour les lunettes à Abidjan'"
      :background_image="'cropped22.jpg'"
    />
    <CTA :back="'38.jpg'" :title="'Un examen de vue précis'">
      Grâce à cette évaluation complète, nous pourrons vous offrir des verres correcteurs
      parfaitement adaptés à vos besoins uniques. Investir dans un examen oculaire de qualité est la
      première étape pour garantir une vision claire et comfortable, vous permettant ainsi de
      profiter pleinement du monde qui vous entoure.
    </CTA>
    <ShowOff :a="'1.webp'" :b="'2.webp'" :c="'3.webp'" :d="'4.webp'" />

    <ICTA :title="'Une paire qui vous embellit'" :back="'39.jpg'">
      Choisir des montures de lunettes adaptées à la forme de votre visage et à votre teint est tout
      aussi crucial que de bénéficier d'un examen oculaire précis. Dans notre magasin d'optique,
      nous comprenons que chaque visage est unique, et c'est pourquoi notre équipe expérimentée est
      là pour vous guider dans votre choix.
    </ICTA>
    <!-- <img src="/general/40.jpg" alt="Cover Picture" /> -->
    <CoverImg :cover="'40.jpg'"/>
    <CTA :back="'27.jpg'" :title="'Votre partenaire pour une meilleure vision'">
      Notre expérience vous apportera bien plus qu'une simple amélioration de votre vue. Dans notre
      magasin d'optique, nous nous engageons à vous offrir des solutions visuelles qui, non
      seulement rehausseront votre acuité visuelle, mais rehausseront également votre charisme.
    </CTA>
    <GoogleMaps />
  </div>
</template>
