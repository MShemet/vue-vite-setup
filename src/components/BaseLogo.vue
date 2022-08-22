<script setup lang="ts">
// logo
</script>

<template>
  <a class="logo" href="/">
    <img
      class="logo__img"
      src="@/assets/images/logo-main.svg"
      alt="base logo"
      width="32"
      height="32"
    />
  </a>
</template>

<style lang="scss" scoped>
.logo {
  $this: 'logo';
  display: inline-block;
  line-height: 0;

  &__img {
    width: 70px;
    height: 25px;

    @include media('md') {
      width: 91px;
      height: 32px;
    }
  }
}
</style>
