<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This proyect has installed:
      <ul>
        <li v-for="(item, index) in installed" :key="index">
          <a  href="">{{item}}</a>
        </li>
      </ul>
      <small>* Installed but not configured</small>
    </p>
    <h3>Ecosystem</h3>
    <ul>
      <li><a
          href="https://router.vuejs.org"
          target="_blank"
          rel="noopener"
        >vue-router</a></li>
      <li><a
          href="https://vuex.vuejs.org"
          target="_blank"
          rel="noopener"
        >vuex</a></li>
      <li><a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
        >vue-devtools</a></li>
      <li><a
          href="https://vue-loader.vuejs.org"
          target="_blank"
          rel="noopener"
        >vue-loader</a></li>
      <li><a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
        >awesome-vue</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  private installed: any = [
    'fortawesome',
    'vue-axios',
    'bootstrap-vue',
    'vee-validate',
    'vue-blockui',
    'vue-loading-overlay*',
    'vue-class-component',
    'vue-property-decorator',
    'vue-i18n',
    'vuejs-logger',
    'vuex-persist',
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
