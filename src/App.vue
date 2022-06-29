<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  background: #ececec;
  padding: 50px 0;
  min-height: 100vh;
}
.container {
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
