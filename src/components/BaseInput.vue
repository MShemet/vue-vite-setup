<script setup lang="ts">
import { ref } from 'vue';
import { QInput } from 'quasar';

type InputSize = 'small' | 'normal';

defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  size: {
    type: String as () => InputSize,
    default: 'small' as InputSize,
  },
});

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | number | null): void;
}>();

const inputHandler = (value: string | number | null) =>
  emit('update:modelValue', value);

const inputRef = ref<QInput | null>(null);
</script>

<template>
  <q-input
    ref="inputRef"
    class="base-input"
    :class="[`base-input--${size}`, { 'base-input--not-empty': modelValue }]"
    :model-value="modelValue"
    lazy-rules
    outlined
    no-error-icon
    hide-bottom-space
    @update:model-value="inputHandler"
  >
    <template #append>
      <slot name="append"> </slot>
    </template>
  </q-input>
</template>

<style lang="scss">
.base-input {
  $this: 'base-input';

  .q-field__label {
    font-size: 14px;
    color: $color-black-500;
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
    // .q-field__control {
    // &:before {
    // background-color: $color-white;
    // border-color: $color-green-900;
    // border-color: $color-dark-blue-600;
    // }
    // }

    .q-field__label {
      // color: $color-green-900;
      color: $color-dark-blue-600;
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
