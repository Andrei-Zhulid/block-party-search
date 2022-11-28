<template>
  <v-row>
    <SearchResultsColumn
      v-for="item in items"
      :key="item.id"
    >
      <BlockPartyCard :place="item"/>
    </SearchResultsColumn>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IBlockParty from '../../../common/interfaces/IBlockParty';
import SearchResultsColumn from '@/components/SearchResultsColumn.vue';
import BlockPartyCard from '@/components/BlockPartyCard.vue';

@Component({ components: { BlockPartyCard, SearchResultsColumn } })
export default class SearchResultsRow extends Vue {
  @Prop({ type: Array, required: true }) items!: IBlockParty[];
}
</script>