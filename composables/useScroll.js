export function scrolling() {
  const scroll = ref();
  let scrollTimer;
  function update() {
    scroll.value = true;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      scroll.value = false;
    }, 1500);
  }

  onMounted(() => {
    document.addEventListener("scroll", update);
    update();
  });
  onUnmounted(() => {
    document.addEventListener("scroll", update);
    update();
  });
  return { scroll };
}
