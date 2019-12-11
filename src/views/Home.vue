<template>
  <div></div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {},
  provide() {},
  mixins: [],
  computed: {},
  watch: {},
  data() {
    return {};
  },
  mounted() {
  },
  // 存储位置
  beforeRouteLeave(to, from, next) {
    const scrollTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    const path = from.path;
    if (scrollTop) this.$ls.set(path, scrollTop);
    else this.$ls.remove(path);
    next();
  },
  beforeDestroy: function() {
    window.removeEventListener('message', this.receiveMsg);
  },
  methods: {}
};
</script>

<style lang="scss"></style>
