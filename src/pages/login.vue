<template>
  <form class="col-4 col-mx-auto">
    <!-- form validation class: has-success -->
    <div class="form-group has-success">
      <label class="form-label" for="input-example-1">Name</label>
      <input
        class="form-input"
        type="text"
        id="input-example-1"
        placeholder="..."
        v-model="login.name"
      />
      <p class="form-input-hint">{{ checkName ? '' : 'invalid input' }}</p>
    </div>

    <!-- form validation class: is-success -->
    <div class="form-group">
      <label class="form-label" for="input-example-1">Password</label>
      <input
        class="form-input is-success"
        type="password"
        id="input-example-1"
        placeholder="..."
        v-model="login.password"
      />
      <p class="form-input-hint">{{ checkPassword ? '' : 'invalid input' }}</p>
    </div>

    <!-- form validation example for checkbox, radio and switch -->
    <div class="form-group">
      <label class="form-checkbox is-error">
        <input type="checkbox" v-model="rememberMe" />
        <i class="form-icon"></i> Remember me
      </label>
    </div>
    <div class="form-group">
      <button
        class="btn btn-success"
        :class="loadingClass"
        @click="handleLogin"
      >
        登陆
      </button>
    </div>
  </form>
</template>

<script>
import { login } from '../lib/account';

export default {
  layout: 'empty',
  name: 'login',
  components: {},
  mixins: [],
  extends: {},
  filters: {},
  provide: {},
  inject: [],
  props: {},
  computed: {
    checkName() {
      return this.login.name === login.name;
    },
    checkPassword() {
      return this.login.password === login.password;
    },
    loadingClass() {
      return this.loading ? 'loading' : '';
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true
    }
  },
  data() {
    return {
      login: {
        name: '',
        password: ''
      },
      rememberMe: false,
      loading: false,
      redirect: undefined,
      otherQuery: {}
    };
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
  methods: {
    handleLogin() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        if (this.checkName && this.checkPassword) {
          if (this.rememberMe) {
            this.$ls.set('login', this.login);
          }
          this.$store.state.login = this.login;
          this.$router.push({
            path: this.redirect || '/',
            query: this.otherQuery
          });
        }
      }, 3000);
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    }
  }
};
</script>

<style lang="scss" scoped></style>
