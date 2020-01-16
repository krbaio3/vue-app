<template>
    <div class="about">
        <h1 v-html="$t('about.title')" v-once/>
        <p>
            <span v-html="$t('about.name')" v-once/>
            <span v-html="name" v-once/>
        </p>
        <p>
            <span v-html="$t('about.appName')" v-once/>
            <span v-html="appName" v-once/>
        </p>
        <p>
            <span v-html="$t('about.appVersion')" v-once/>
            <span v-html="appVersion" v-once/>
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
@Component({
    name: 'About',
})
export default class About extends Vue {
    @Getter('appName') public appName!: string;
    @Getter('appVersion') public appVersion!: string;
    @Getter('name') public name!: string;
}
</script>

<style scoped>

</style>
