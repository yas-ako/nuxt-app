<template>
  <div class="wrapper">
    <TheHeader />
    <main class="container">
      <slot />
    </main>
    <TheFotter></TheFotter>
  </div>
</template>

<style scoped>
.wrapper {
  /* margin: 2rem; */
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  min-height: 100dvh;
}

.container {
  max-width: 1220px;
  margin: 10px auto;
  width: 85%;
}


@media (min-width: 520px) {
  .container {
    width: 90%;
  }
}

@media (min-width: 960px) {
  .container {
    width: 894px;
  }
}
</style>
