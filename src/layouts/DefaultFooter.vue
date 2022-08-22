<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <q-footer bordered class="footer">
    <div class="footer__container container">{{ t('layouts.footer') }}</div>
  </q-footer>
</template>

<style lang="scss" scoped>
.footer {
  $this: 'footer';
}
</style>
