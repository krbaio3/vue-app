<template>
    <b-alert show variant="success" id="secret" v-if="user">
        <h2 class="alert-heading">Bien hecho!</h2>
        <p>
            Bienvenido a la pagina secreta <b>{{ fullUser }}</b>!
        </p>
        <hr>
        <p class="mb-0">
            Puedes cerrar la sesison desde <b @click="logout" class="cursor">aqui</b> o desde la navegacion
        </p>
    </b-alert>
</template>

<style lang="scss">
#secret {
    .cursor {
        cursor: pointer
    }
}
</style>