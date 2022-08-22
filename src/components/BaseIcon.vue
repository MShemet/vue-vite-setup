<script setup lang="ts">
type IconSize = 'sm' | 'md' | 'lg' | 'xl';

defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String as () => IconSize,
    default: 'md' as IconSize,
  },
});
</script>

<template>
  <svg class="base-icon" :class="`base-icon--${size}`" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<style lang="scss">
.base-icon {
  $this: 'base-icon';
  display: inline-block;
  fill: currentColor;

  &--md {
    width: 24px;
    height: 24px;
  }
}
</style>
