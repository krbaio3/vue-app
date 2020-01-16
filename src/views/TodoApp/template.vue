<template>
  <div v-if="!errorLoadingObj.error">
    <b-row class="muy-5">
      <todo-form class="mx-auto" />
    </b-row>
    <b-row>
      <b-col>
        <h2 class="text-center text-muted" v-html="$t('todo.app.pending')"/>
        <todo-list :todos="todos" />
      </b-col>

      <b-col>
        <h2 class="text-center text-muted" v-html="$t('todo.app.finish')"/>
        <todo-list :todos="done" />
      </b-col>
    </b-row>
  </div>
  <div
    v-else
    class="alert alert-danger text-center"
  >
    <h4 v-html="$t('todo.app.error')"/>
    <h5 v-html="errorLoadingObj.errorMessage" />
  </div>
</template>