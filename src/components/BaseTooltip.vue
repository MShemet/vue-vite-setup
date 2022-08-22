<script setup lang="ts">
import { QTooltipProps } from 'quasar';

defineProps({
  anchor: {
    type: String as () => QTooltipProps['anchor'],
    default: 'top middle',
  },
  self: {
    type: String as () => QTooltipProps['self'],
    default: 'bottom middle',
  },
  offset: {
    type: Array as () => QTooltipProps['offset'],
    default: () => [4, 4],
  },
});
</script>

<template>
  <q-tooltip
    class="base-tooltip"
    :anchor="anchor"
    :self="self"
    :offset="[4, 4]"
    :delay="300"
    max-width="320px"
  >
    <slot> </slot>
  </q-tooltip>
</template>

<style lang="scss">
.base-tooltip {
  $this: 'base-tooltip';
  padding: 8px 12px;
  background-color: $color-black-900;
  border: 1px solid $color-black-500;
  font-size: 14px;
  line-height: 24px;
  color: $color-white;
}
</style>
