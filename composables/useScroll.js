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
    window.addEventListener("scroll", update);
    update();
    console.log(scroll.value);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", update);
  });
  return { scroll };
}
