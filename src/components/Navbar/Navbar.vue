<template>
  <header class="navbar p-2">
    <section class="navbar-section">
      <span class="text-secondary text-bold">{{ diffTime }}</span>
    </section>
    <div class="form-group">
      <select class="form-select" v-model="theme">
        <option
          :value="item.value"
          v-for="(item, index) in themeList"
          :key="index"
          >{{ item.label }}</option
        >
      </select>
    </div>
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
  computed: {
    theme: {
      get() {
        return this.$store.state.theme;
      },
      set(n) {
        this.$store.state.theme = n;
        this.$ls.set('theme', n);
      }
    }
  },
  watch: {},
  data() {
    return {
      timer: null,
      diffTime: null,
      themeList: [
        {
          value: 'theme1',
          label: '主题1'
        },
        {
          value: 'theme2',
          label: '主题2'
        },
        {
          value: 'theme3',
          label: '主题3'
        }
      ]
    };
  },
  beforeCreate() {},
  created() {
    // window.document.documentElement.setAttribute(
    //   'data-theme',
    //   this.$ls.get('theme')
    // );
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
