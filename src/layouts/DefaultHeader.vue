<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <q-header class="header">
    <div class="header__container container">{{ t('layouts.header') }}</div>
  </q-header>
</template>

<style lang="scss" scoped>
.header {
  $this: 'header';
}
</style>
