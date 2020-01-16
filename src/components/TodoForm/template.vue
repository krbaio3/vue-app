<template>
  <div>
    <ValidationObserver
      ref="observer"
      v-slot="{ invalid }"
      @submit.prevent="validate"
    >
      <b-form inline>
        <ValidationProvider
          name="Todo"
          rules="required|min:3"
          v-slot="{ errors }"
        >
          <label
            for="todo"
            class="sr-only"
            v-html="$t('todo.form.todo')"
          />
          <b-input
            name="todo"
            v-model="todo"
            class="mb-2 mr-sm-2"
            :placeholder="$t('todo.form.placeholder')"
          />
          <b-button
            variant="primary"
            type="submit"
            :disabled="invalid"
            v-html="$t('todo.form.add')"
            class="mb-2"
          >
          </b-button>
          <br>
          <span style="color: red">{{ errors[0] }}</span>
        </ValidationProvider>
      </b-form>
    </ValidationObserver>
  </div>
</template>
<style scoped>

</style>