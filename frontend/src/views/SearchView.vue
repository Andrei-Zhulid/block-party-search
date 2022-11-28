<template>
  <div>
    <SearchInput/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchInput from '@/components/SearchInput.vue';

@Component({ components: { SearchInput } })
export default class HomeView extends Vue {}
</script>
