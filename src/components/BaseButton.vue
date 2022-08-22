<script setup lang="ts">
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

defineProps({
  size: {
    type: String as () => ButtonSize,
    default: 'md' as ButtonSize,
  },
});
</script>

<template>
  <q-btn
    class="base-button"
    :class="[`base-button--${size}`]"
    unelevated
    :ripple="false"
  >
    <slot> </slot>
  </q-btn>
</template>

<style lang="scss">
.base-button {
  $this: 'base-button';
  font-size: 14px;
  font-weight: 600;
  text-transform: none;
  min-height: 32px;
  padding: 0 16px;
  transition: background-color $anim-primary;

  .q-focus-helper {
    display: none !important;
  }

  &:focus {
    box-shadow: $shadow-btn-inset, 0px 0px 0px 2px #9fe8ff !important;
  }

  &:disabled {
    color: $color-black-400 !important;
    background-color: $color-black-200 !important;
    opacity: 1 !important;
  }

  &--sm {
    min-height: 32px;
    padding: 0 16px;
  }

  &--lg {
    min-height: 48px;
    padding: 0 20px;
  }

  &--xl {
    font-size: 16px;
    min-height: 56px;
    padding: 0 28px;
  }

  &.bg-primary {
    &:hover,
    &:focus,
    &:active,
    &.q-btn--active {
      background-color: $color-primary-900 !important;
    }
  }

  &.bg-secondary {
    &:hover,
    &:focus,
    &:active,
    &.q-btn--active {
      background-color: $color-secondary-900 !important;
    }
  }

  &.bg-white {
    color: $color-secondary-800 !important;
    background-color: $color-secondary-100 !important;

    &:hover,
    &:focus,
    &:active,
    &.q-btn--active {
      background-color: $color-white !important;
    }
  }

  &.q-btn--outline.text-primary {
    &:before {
      border-color: $color-primary-600 !important;
    }

    &:hover,
    &:focus {
      background-color: $color-primary-600 !important;
      color: $color-white !important;
    }

    &.q-btn--active,
    &:active {
      background-color: $color-primary-900 !important;
      color: $color-white !important;

      &:before {
        border-color: $color-primary-900 !important;
      }
    }
  }

  &.q-btn--outline.text-secondary {
    &:before {
      border-color: $color-secondary-600 !important;
    }

    &:hover,
    &:focus {
      background-color: $color-secondary-600 !important;
      color: $color-white !important;
    }

    &.q-btn--active,
    &:active {
      background-color: $color-secondary-900 !important;
      color: $color-white !important;

      &:before {
        border-color: $color-secondary-900 !important;
      }
    }
  }

  &.q-btn--outline.text-white {
    color: $color-secondary-800 !important;

    &:before {
      border-color: $color-secondary-800 !important;
    }

    &:hover,
    &:focus {
      background-color: $color-secondary-800 !important;
      color: $color-white !important;
    }

    &.q-btn--active,
    &:active {
      background-color: $color-secondary-900 !important;
      color: $color-white !important;

      &:before {
        border-color: $color-secondary-900 !important;
      }
    }
  }
}
</style>
