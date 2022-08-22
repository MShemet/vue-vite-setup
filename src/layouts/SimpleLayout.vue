<script setup lang="ts">
import SimpleHeader from './SimpleHeader.vue';
</script>

<template>
  <q-layout class="layout" view="hHh lpR fFf">
    <SimpleHeader />

    <q-page-container>
      <router-view> </router-view>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.layout {
  $this: 'layout';
}
</style>
