<template>
  <main class="navigation" v-show="width">
    <button class="themeBtn" @click="toggleDarkMode">
      <Icon v-if="darkMode" name="uil:moon" />
      <Icon v-else name="uil:sun" />
    </button>
    <div v-if="!isMobile" class="navbar">
      <Navbar />
    </div>
    <div v-else :class="{ sidebar: true, hidden: isScrolling }">
      <Sidebar />
    </div>
    <slot />
    <Footer />
  </main>
</template>

<script setup>
const darkMode = ref(false);
const { width } = screenWidth();
const { scroll } = scrolling();

// hide sidebar
const isScrolling = computed(() => {
  return scroll.value;
});
//sidebar / navbar
const isMobile = computed(() => {
  return width.value <= 680;
});

provide("isMobile", isMobile);

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle("dark", darkMode.value);
};

// dark mode
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
}

.sidebar {
  position: fixed;
  width: 60px;
  z-index: 10;
  top: 150px;
  right: 0px;
  transition: transform 0.4s ease-out;
}
.hidden {
  transform: translateX(100%);
}
button {
  position: fixed;
  left: 10px;
  top: 3px;
  background-color: transparent;
  border: none;
  z-index: 11;
}
.themeBtn {
  color: black;
}
.dark .themeBtn {
  color: white;
}
</style>
