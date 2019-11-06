<template>
    <div class="about">
        <h1>This is an about page</h1>
        <p>AppName: {{ appName }}</p>
        <p>AppName: {{ appVersion }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
@Component({
    components: {},
})
export default class Home extends Vue {
    @Getter('appName') public appName!: string;
    @Getter('appVersion') public appVersion!: string;
}
</script>

<style scoped>

</style>
