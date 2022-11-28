<template>
  <div>
    <SearchInput
      class="mb-6"
      @search="search"
    />

    <v-container class="pa-0">
      <SearchResultsRow
        v-show="!loading && items?.length > 0"
        :items="items"
      />
      <SearchResultsRowNoData v-show="!loading && items?.length === 0"/>
      <SearchResultsRowLoader v-show="loading"/>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchInput from '@/components/SearchInput.vue';
import SearchResultsColumn from '@/components/SearchResultsColumn.vue';
import SearchResultsRowLoader from '@/components/SearchResultsRowLoader.vue';
import IBlockParty from '../../../common/interfaces/IBlockParty';
import SearchService from '@/services/SearchService';
import BlockPartyCard from '@/components/BlockPartyCard.vue';
import SearchResultsRow from '@/components/SearchResultsRow.vue';
import SearchResultsRowNoData from '@/components/SearchResultsRowNoData.vue';

@Component({
  components: {
    SearchResultsRowNoData,
    SearchResultsRow,
    BlockPartyCard,
    SearchResultsRowLoader,
    SearchResultsColumn,
    SearchInput
  }
})
export default class HomeView extends Vue {
  // noinspection JSMismatchedCollectionQueryUpdate
  private items: IBlockParty[] = [];
  private loading = false;

  private async search(query?: string) {
    try {
      this.loading = true;
      this.items = await SearchService.search(query);
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  async created() {
    await this.search();
  }
}
</script>

<style scoped>
/*noinspection CssUnusedSymbol*/
.row + .row {
  margin-top: -12px;
}
</style>
