<template>
  <div class="boxer">
    <p><slot /></p>
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
.spinner {
  --clr0: black;
  --clr1: white;
  --clr2: green;
  --clr9: #white;
}
.spinner {
  width: 10%;
  aspect-ratio: 1/1;
  background: var(--clr9);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1% auto;
  position: relative;
  font-size: xx-large;
  border-radius: 50%;
}
.boxer {
  color: black;
  align-items: center;
  display: flex;
  flex-direction: column;
}
p {
  font-size: larger;
}
.spinner::before,
.spinner::after {
  content: '';
  position: absolute;
  inset: -0.2rem;
  z-index: -1;
  border-radius: 50%;
  background: conic-gradient(from var(--gradient-angle), var(--clr1), var(--clr2));
  animation: rotation 3s linear infinite;
}

.spinner::after {
  filter: blur(3.5rem);
}

/* Animations */

@keyframes rotation {
  0% {
    --gradient-angle: 0deg;
  }
  100% {
    --gradient-angle: 360deg;
  }
}

/* Custom property*/

@property --gradient-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
</style>
