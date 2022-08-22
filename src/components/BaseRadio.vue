<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
});

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const inputHandler = (value: string) => emit('update:modelValue', value);
</script>

<template>
  <q-radio
    class="base-radio"
    :val="value"
    :label="label"
    :model-value="modelValue"
    @update:model-value="inputHandler"
  />
</template>

<style lang="scss">
.base-radio {
  $this: 'base-radio';

  .q-radio__inner {
    font-size: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 8px;
    color: $color-black-400;

    &::before {
      display: none;
    }
  }

  .q-radio__bg {
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
  }

  .q-radio__inner--truthy {
    color: $color-secondary-800;
    background-color: $color-secondary-800;

    .q-radio__check {
      transform: scale3d(0.8, 0.8, 1);
      color: $color-white;
    }
  }

  &:hover {
    .q-radio__inner--truthy {
      color: $color-secondary-400;
      background-color: $color-secondary-400;
    }

    .q-radio__inner--falsy {
      color: $color-secondary-800;

      .q-radio__check {
        transform: scale3d(0.8, 0.8, 1);
        color: $color-secondary-200;
      }
    }
  }

  &.disabled {
    .q-radio__inner--falsy {
      color: $color-black-300;
      background-color: $color-black-100;
    }

    .q-radio__inner--truthy {
      color: $color-black-300;
      background-color: $color-black-100;

      .q-radio__check {
        transform: scale3d(0.8, 0.8, 1);
        color: $color-black-400;
      }
    }
  }
}
</style>
