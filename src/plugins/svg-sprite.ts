const modules = import.meta.glob('@/assets/icons/*.svg');

Object.entries(modules).forEach(async ([, el]) => {
  await el();
});
