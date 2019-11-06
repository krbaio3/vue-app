<template>
  <div id="app">
    <div v-if="processing">
      <BlockUI
        :message="$t('messages.processing')"
        :url="url"
      ></BlockUI>
    </div>
    <!-- <loading :active.sync="isLoading"></!-->
    <b-container>
      <b-nav tabs>
        <b-nav-item to="/todos">Todos</b-nav-item>
        <b-nav-item to="/login">Login</b-nav-item>
        <b-nav-item to="/secret">Secret</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item-dropdown
          right
          :text="$t('common.language')"
        >
          <b-dropdown-item
            href="#"
            @click="changeLanguage('en')"
          ><img
              src="./assets/en.jpg"
              alt="english"
            > EN</b-dropdown-item>
          <b-dropdown-item
            href="#"
            @click="changeLanguage('es')"
          ><img
              src="./assets/es.jpg"
              alt="spain"
            > ES</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item>
          <font-awesome-icon icon="user-secret" />
        </b-nav-item>
        <b-nav-item>
          <font-awesome-icon
            class="ml-2"
            icon="key"
          />
        </b-nav-item>
      </b-nav>
      <h1
        class="text-center text-muted"
        v-html="$t('message')"
      ></h1>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { Getter, Action } from 'vuex-class';
import loadingImage from '@/assets/logo.png';
import {changeLanguage} from '@/helpers/changeLanguage';

@Component({
    name: 'app',
})
export default class App extends Vue {
    public isloading: boolean = false;
    public url: any = loadingImage;
    @Getter('processing') public processing!: boolean;
    @Action('changeLanguage') public setLanguage!: any;
    @Getter('language') public getLanguage!: string;

    public changeLanguage(lang: string) {
        Vue.$log.debug('entra con ', lang);
        this.setLanguage({lang}).then(() => {
          changeLanguage();
          Vue.$log.debug(this.getLanguage);
        });
    }
}
</script>

<style lang="scss">

</style>
