<script setup lang="ts">
import DefaultHeader from './DefaultHeader.vue';
import DefaultFooter from './DefaultFooter.vue';
</script>

<template>
  <q-layout class="layout" view="hHh lpR fff">
    <DefaultHeader />

    <q-page-container>
      <router-view> </router-view>
    </q-page-container>

    <DefaultFooter />
  </q-layout>
</template>

<style lang="scss" scoped>
.layout {
  $this: 'layout';
}
</style>
