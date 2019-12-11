<template>
  <header class="navbar bg-theme p-2" :data-theme="$ls.get('theme') || 'light'">
    <section class="navbar-section">
      <span class="text-secondary text-bold">{{ diffTime }}</span>
    </section>
    <section class="navbar-section">
      <div class="form-group">
        <label class="form-switch">
          <input type="checkbox" v-model="isDark" />
          <i class="form-icon"></i>
          <span class="">{{ isDark ? '深色模式' : '浅色模式' }}</span>
        </label>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  components: {},
  mixins: [],
  extends: {},
  filters: {},
  provide: {},
  inject: [],
  props: [],
  computed: {},
  watch: {
    isDark(n) {
      this.$ls.set('theme', n === true ? 'dark' : 'light');
    }
  },
  data() {
    return {
      isDark: this.$ls.get('theme') === 'dark',
      timer: null,
      diffTime: null
    };
  },
  beforeCreate() {},
  created() {
    this.timer = setInterval(() => {
      this.diffTime = this.getDiffTime();
    }, 1000);
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {
    clearInterval(this.timer);
  },
  destroyed() {},
  methods: {
    getDiffTime() {
      let diff = Math.floor(new Date() - new Date('2019/02/09'));
      let day = Math.floor(diff / 3600000 / 24);
      let nowDiff = diff - day * 3600000 * 24;
      let hour = Math.floor(nowDiff / 3600000);
      let minute = Math.floor((nowDiff - hour * 3600000) / 60000);
      let minus = Math.floor(
        (nowDiff - hour * 3600000 - minute * 60000) / 1000
      );
      this.toDouble(day, hour, minute, minus);
      return `${day}:${hour}:${minute}:${minus}`;
    },
    toDouble(...params) {
      Object.keys(params).forEach(key => {
        let num = params[key];
        num = num < 10 ? `0${num}` : num;
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
