<template>
  <div class="default-wrap bg-theme">
    <x-navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>
<style lang="scss" scoped>
.default-wrap {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}
</style>
