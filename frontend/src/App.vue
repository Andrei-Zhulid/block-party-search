<template>
  <v-app>
    <v-main>
      <v-container class="layout-width pa-4">
        <v-row>
          <v-col>
            <SearchView/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchView from '@/views/SearchView.vue';

@Component({ components: { SearchView } })
export default class App extends Vue {}
</script>

<style scoped>
.layout-width {
  min-width: 300px;
  max-width: 900px
}
</style>