<template>
  <div v-if="todos.length > 0">
    <b-table
      striped
      hover
      :items="todos"
      :fields="fields"
    >
      <template>
        <b-button
          size="sm"
          @click.prevent="updateTodoStatus(row.item)"
          class="mr-1"
          v-html="$t('todo.list.update')"
        ></b-button>
        <b-button
          variant="danger"
          size="sm"
          @click.prevent="deleteTodo(row.item)"
          class="mr-1"
          v-html="$t('todo.list.delete')"
        ></b-button>
      </template>
    </b-table>
  </div>
  <div v-else>
      <div class="alert alert-danger text-center">
          <h2 v-html="$t('todo.list.nothing')"></h2>
      </div>
  </div>
</template>

<style lang="scss" scoped>

</style>