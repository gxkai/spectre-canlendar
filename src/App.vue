<template>
  <div id="app" :data-theme="$store.state.theme">
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    this.$store.state.theme = this.$ls.get('theme') || 'theme1';
  }
};
</script>
<style lang="scss"></style>
