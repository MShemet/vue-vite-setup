import { ref } from 'vue';

export default () => {
  const isFetching = ref<boolean>(false);

  return {
    isFetching,
  };
};
