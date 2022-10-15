<template>
  <div>
    <TheHeader />
    <div class="container">
      <slot />
    </div>
    <TheFotter></TheFotter>
  </div>
</template>

<style scoped>
footer {
  margin-top: 2rem;
  background-color: #ffffff;
  padding: 1rem;
}

.container {
  margin: 2rem;
}

/*
body {
  display: flex;
  flex-flow: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
*/
</style>
