<template>
  <div id="bar">
    <div id="left_nav">
      <RouterLink to="/" class="ps-logo">Sheryl M. Optique</RouterLink>
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
.ps-logo{
  font-weight: 700;
  font-size: medium;
  height: fit-content;
  color: black;
}
a {
  text-decoration: none;
  /* font-size: calc(1.3vw + 0.1rem); */
  font-size: calc(2vw + 0.1rem);
  height: fit-content;
}
#left_nav{
  margin-left: 2vw ;
}
.navlink {
  font-family: Outfit;
  color: grey;
  height: fit-content;
}
.navlink:hover{
  color: brown;
}
.navlink:active{
  color: red;
}
.navlink-active{
  color: black;
}


#mid_nav {
  display: flex;
  gap: 10%;
  height: fit-content;
}

#right_nav {
  text-decoration: underline solid brown;
  color: brown;
  height: fit-content;
  float: right;
  width: fit-content;
  margin-right: 2vw;
}
#right_nav h3 {
  font-family: Inika;
  height: fit-content;
}

#bar {
  display: flex;
  flex-direction: row;
  gap: 15%;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
}
</style>
