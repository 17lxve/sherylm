<template>
  <div id="bar">
    <div id="left_nav">
      <RouterLink to="/">Sheryl M Optique</RouterLink>
    </div>

    <div id="mid_nav">
      <RouterLink to="/" class="navlink">Acceuil</RouterLink>
      <RouterLink to="/product" class="navlink">Lunettes</RouterLink>
      <RouterLink to="/contact" class="navlink">Contact</RouterLink>
    </div>

    <div id="right_nav">
      <h3>Tel:0505201515</h3>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  font-size: calc(1.3vw + 0.1rem);
}

.navlink {
  font-family: Outfit;
  color: grey;
}

#mid_nav {
  display: flex;
  gap: 20%;
}

#right_nav {
  text-decoration: underline solid brown;
  color: brown;
}
#right_nav h3 {
  font-family: Inika;
}

#bar {
  display: flex;
  flex-direction: row;
  gap: 20%;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
