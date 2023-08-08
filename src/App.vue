<script>
import NavBar from './components/NavBar.vue'
export default {
  components : { NavBar }
}
</script>

<template>
  <header>
   <NavBar/>
  </header>
  <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </Transition>
    </RouterView>
</template>
