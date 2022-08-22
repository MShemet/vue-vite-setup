<script setup lang="ts">
import { ValidationRule } from 'quasar';

defineProps({
  modelValue: {
    type: Boolean,
    default: null,
  },
  rules: {
    type: Array as () => ValidationRule<unknown>[],
    default: () => [],
  },
});

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void;
}>();

const selectHandler = (value: boolean) => emit('update:modelValue', value);
</script>

<template>
  <q-field
    class="base-checkbox-wrap"
    :model-value="modelValue"
    :rules="rules"
    borderless
    dense
    hide-bottom-space
    lazy-rules
    no-error-icon
  >
    <template #control>
      <q-checkbox
        class="base-checkbox"
        color="secondary"
        :model-value="modelValue"
        @update:model-value="selectHandler"
      />
    </template>
  </q-field>
</template>

<style lang="scss">
.base-checkbox {
  $this: 'base-checkbox';

  .q-checkbox__inner {
    width: auto;
    min-width: auto;
    height: auto;
    color: $color-black-400;

    &:before {
      display: none;
    }
  }

  .q-checkbox__bg {
    position: static;
    width: 20px;
    height: 20px;
    border-width: 1px;
    border-radius: $border-radius-small;
    transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1),
      background-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .q-checkbox__truthy,
  .q-checkbox__indet {
    transform-origin: center;
    transform: scale(0.6);
    transition: stroke-dashoffset 0.18s cubic-bezier(0.4, 0, 0.6, 1) 0ms;
  }

  &.disabled {
    .q-checkbox__inner {
      color: $color-black-300 !important;

      &--truthy {
        .q-checkbox__truthy {
          stroke: $color-black-400;
        }
      }
    }

    .q-checkbox__bg {
      background-color: $color-black-100;
    }
  }

  &:not(.disabled) .q-checkbox__inner {
    .q-checkbox__indet {
      transform: scale(0);
    }

    &--indet {
      .q-checkbox__indet {
        transform: scale(0.6);
      }

      .q-checkbox__truthy {
        transform: scale(0);
      }

      &:hover {
        .q-checkbox__bg {
          border-color: $color-secondary-400;
          background-color: $color-secondary-400;
        }
      }
    }

    &--truthy {
      &:hover {
        .q-checkbox__bg {
          border-color: $color-secondary-400;
          background-color: $color-secondary-400;
        }

        .q-checkbox__truthy {
          stroke: $color-white;
        }
      }

      .q-checkbox__indet {
        transform: scale(0);
      }
    }

    &:hover {
      .q-checkbox__bg {
        border-color: $color-secondary-800;
      }

      .q-checkbox__truthy {
        stroke: $color-secondary-200;
        stroke-dashoffset: 0;
      }
    }
  }
}

.q-item:hover .base-checkbox,
.q-manual-focusable--focused:hover .base-checkbox {
  &:not(.disabled) .q-checkbox__inner {
    .q-checkbox__bg {
      border-color: $color-secondary-800;
    }

    .q-checkbox__truthy {
      stroke: $color-secondary-200;
      stroke-dashoffset: 0;
    }

    &--truthy {
      .q-checkbox__bg {
        border-color: $color-secondary-400;
        background-color: $color-secondary-400;
      }

      .q-checkbox__truthy {
        stroke: $color-white;
      }
    }

    &--indet {
      .q-checkbox__bg {
        border-color: $color-secondary-400;
        background-color: $color-secondary-400;
      }
    }
  }
}

.base-checkbox-wrap.q-field--error {
  /* stylelint-disable-next-line no-descending-specificity */
  .q-checkbox__bg {
    border-color: $color-red-600;
  }
}
</style>
