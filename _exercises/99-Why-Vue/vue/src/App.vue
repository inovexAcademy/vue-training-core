<script lang="ts" setup>
import TheCounter from './components/TheCounter.vue';
</script>

<template>
  <div class="root__app">
    <header class="app__header">
      <img
        alt="Vue logo"
        class="header__logo"
        src="./assets/logo.svg"
        width="200"
        height="200"
      />
      <h1>Counter App</h1>
    </header>

    <main class="app__main">
      <TheCounter />
    </main>
  </div>
</template>

<style scoped lang="scss">
.root__app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

  .app__main {
    width: 100%;
  }

  .app__header {
    display: flex;
    flex-direction: column;
    align-items: center;

    .header__logo {
      display: block;
      width: 120px;
      height: 120px;
    }

    h1 {
      margin-block-start: 0;
      margin-block-end: 22px;
      text-align: center;
      font-weight: bold;
      color: #4a90e2;
    }
  }
}
</style>
