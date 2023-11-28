<script>
import { useAll } from './stores/GeneralStore'
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import LoadingShow from './views/LoadingShow.vue'
export default {
  components: { NavBar, LoadingShow },
  setup() {
    const loader = useAll()
    const fil = ref('all')
    console.log(loader.isLoading)
    return { loader, fil }
  }
}
</script>

<template>
  <header>
    <NavBar />
  </header>
  <RouterView v-slot="{ Component }" v-show="!loader.isLoading">
    <Transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </Transition>
  </RouterView>
  <LoadingShow v-show="loader.isLoading">En chargement...</LoadingShow>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
