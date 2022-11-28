<template>
  <div>
    <SearchInput/>

    <v-container>
      <SearchResultsRowLoader/>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchInput from '@/components/SearchInput.vue';
import SearchResultsColumn from '@/components/SearchResultsColumn.vue';
import SearchResultsRowLoader from '@/components/SearchResultsRowLoader.vue';

@Component({ components: { SearchResultsRowLoader, SearchResultsColumn, SearchInput } })
export default class HomeView extends Vue {}
</script>
