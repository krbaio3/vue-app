<template>
  <div>
    <ValidationObserver
      ref="observer"
      v-slot="{ invalid }"
      tag="b-form"
      @submit.prevent="validate"
      inline
    >
      <!-- <b-form
        inline
        @submit.prevent="validate"
      > -->
      <ValidationProvider
        name="Todo"
        rules="required|min:3"
        v-slot="{ errors }"
      >
        <label
          for="todo"
          class="sr-only"
          v-html="$t('todo.form.todo')"
        ></label>
        <b-input
          name="todo"
          v-model="todo"
          class="mb-2 mr-sm-2 mb-sm-0"
          :placeholder="$t('todo.form.placeholder')"
        />
        <span style="color: red">{{ errors[0] }}</span>
      </ValidationProvider>
      <b-button
        variant="primary"
        type="submit"
        :disabled="invalid"
        v-html="$t('todo.form.add')"
      >
      </b-button>
      <!-- </b-form> -->
    </ValidationObserver>
  </div>
</template>
<style scoped>

</style>