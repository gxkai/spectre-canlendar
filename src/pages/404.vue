<template>
  <div class="empty">
    <div class="empty-icon">
      <i class="icon icon-people"></i>
    </div>
    <p class="empty-title h5">404</p>
    <p class="empty-subtitle">网页不存在</p>
    <div class="empty-action">
      <button class="btn btn-primary" @click="$router.push('/')">去首页</button>
    </div>
  </div>
</template>

<script>
export default {
  name: '404',
  layout: 'empty',
  components: {},
  mixins: [],
  extends: {},
  filters: {},
  provide: {},
  inject: [],
  props: {},
  computed: {},
  watch: {},
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // access to component instance via `vm`
    });
  },
  beforeRouteUpdate(to, from, next) {
    // just use `this`
    next();
  },
  beforeRouteLeave(to, from, next) {
    next();
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {}
};
</script>

<style lang="scss" scoped></style>
