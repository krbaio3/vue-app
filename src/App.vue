<template>
  <div id="app">
    <div v-if="processing">
      <BlockUI :message="$t('messages.processing')"></BlockUI>
    </div>
    <b-container>
      <b-nav tabs>
        <b-nav-item to="/todos">Todos</b-nav-item>
        <b-nav-item to="/login">Login</b-nav-item>
        <b-nav-item to="/secret">Secret</b-nav-item>
        <b-nav-item-dropdown right :text="$t('common.language')">
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
      <h1 class="text-center text-muted" v-html="$t('message')"></h1>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<style lang="scss">
</style>
