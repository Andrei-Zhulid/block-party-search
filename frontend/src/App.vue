<template>
  <v-app>
    <v-main>
      <SearchView/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchView from '@/views/SearchView.vue';

@Component({ components: { SearchView } })
export default class App extends Vue {}
</script>