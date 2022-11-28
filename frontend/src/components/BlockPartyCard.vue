<template>
  <v-card outlined class="fill-height">
    <v-card-title class="">{{ place.description }}</v-card-title>
    <v-card-subtitle>{{ place.district }}, {{ place.address }}, {{ place.postcode }}</v-card-subtitle>
    <v-card-text>
      <div>
        <strong>Days: </strong>{{ place.days }}
      </div>

      <div>
        <strong>Time: </strong>{{ place.time }}
      </div>

      <div v-if="place.url">
        <strong>Site: </strong>
        <a
          :href="place.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ place.url }}
        </a>
      </div>

      <div v-if="place.remarks" class="mt-4">{{ place.remarks }}</div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IBlockParty from '../../../common/interfaces/IBlockParty';

@Component
export default class BlockPartyCard extends Vue {
  @Prop({ type: Object, required: true }) place!: IBlockParty;
}
</script>