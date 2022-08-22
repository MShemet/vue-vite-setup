<script setup lang="ts">
type SelectSize = 'small' | 'normal';

defineProps({
  modelValue: {
    type: Object,
    default: null,
  },
  size: {
    type: String as () => SelectSize,
    default: 'small' as SelectSize,
  },
});

const emit = defineEmits<{
  (event: 'update:modelValue', value: unknown): void;
}>();

const selectHandler = (value: unknown) => emit('update:modelValue', value);
</script>

<template>
  <q-select
    class="base-select"
    :class="[
      `base-select--${size}`,
      {
        'base-select--not-empty': Array.isArray(modelValue)
          ? modelValue.length !== 0
          : modelValue,
      },
    ]"
    outlined
    lazy-rules
    no-error-icon
    hide-bottom-space
    :menu-offset="[0, 4]"
    :model-value="modelValue"
    @update:model-value="selectHandler"
  >
  </q-select>
</template>

<style lang="scss">
body .base-select {
  $this: 'base-select';

  .q-select__dropdown-icon {
    color: transparent;
    background: url('@/assets/images/arrow-down.svg') no-repeat center;
  }

  .q-field__label {
    color: $color-black-500;
    font-size: 14px;
    line-height: 24px;
    top: 15px;
  }

  .q-field__marginal {
    position: relative;
  }

  .q-field__bottom {
    padding: 8px 0 0 0;
  }

  .q-field__messages {
    font-size: 14px;
    line-height: 20px;
    color: $color-black-500;
  }

  .q-field__control {
    padding: 0 15px;

    &:before {
      border-color: $color-dark-blue-100;
      background-color: $color-dark-blue-100;
    }

    &:after {
      border-width: 1px;
    }

    &:hover {
      &:before {
        border-color: $color-dark-blue-600;
        background-color: $color-dark-blue-100;
      }
    }
  }

  &.q-field--disabled {
    .q-field__control {
      &:before {
        background-color: $color-black-200;
      }
    }
  }

  &.q-field--focused {
    .q-field__control {
      &:before {
        background-color: $color-white;
      }

      &:after {
        border-width: 1px;
        border-color: $color-dark-blue-600;
      }
    }
  }

  &.#{$this}--not-empty {
    .q-field__control {
      &:before {
        border-color: $color-dark-blue-600;
        background-color: $color-white;
      }
    }
  }

  &.q-field--error {
    .q-field__control {
      &:before {
        background-color: $color-red-200;
      }

      &:after {
        border-width: 1px;
        border-color: $color-red-800;
      }
    }

    .q-field__messages {
      color: $color-red-800;
    }
  }

  &.q-field--focused.q-field--error {
    .q-field__control {
      &:before {
        background-color: $color-white;
      }
    }

    .q-field__label {
      color: $color-red-800;
    }
  }

  &.#{$this}--not-empty.q-field--error {
    .q-field__label {
      color: $color-red-800;
    }
  }

  &.#{$this}--small {
    .q-field__control {
      height: 48px;
      min-height: 48px;
    }

    .q-field__label {
      top: 12px;
    }

    .q-field__marginal {
      height: 48px;
    }
  }
}
</style>
