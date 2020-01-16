<template>
  <div>
    <h3 class="text-center text-mutted">
      Iniciar Sesion
    </h3>

    <b-alert
      show
      variant="danger"
      v-if="error"
    >
      {{errorMessage}}
    </b-alert>
    <b-form @submit.prevent="signIn">
      <b-form-group
        label="Email"
        description="Los datos son privados"
      >
        <b-form-input
          type="email"
          v-model="user.email"
          required
          placeholder="Introduce admin@vue.com"
        />

      </b-form-group>
      <b-form-group
        label="Password"
        description="Los datos son privados"
      >
        <b-form-input
          type="password"
          v-model="user.password"
          required
          placeholder="Introduce 'secret'"
        />

      </b-form-group>
      <b-button type="submit" variant="primary">Iniciar Sesion</b-button>
    </b-form>
  </div>
</template>