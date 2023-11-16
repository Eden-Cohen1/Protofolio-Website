<template>
  <main class="main-color" ref="screenSize" v-show="width">
    <button class="themeBtn" @click="toggleDarkMode">
        <Icon v-if="darkMode" name="uil:moon" />
        <Icon v-else="" name="uil:sun" />
    </button>
    <div v-if="!isMobile" class="navbar">
      <Navbar />
    </div>
    <div v-else="isMobile" class="sidebar">
      <Sidebar/>
    </div>
    <slot />
  </main>
</template>

<script setup>
const { width } = screenWidth();
const isMobile = computed(() => {
  return width.value <= 680;
});
const darkMode = ref(false);
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle("dark", darkMode.value);
};
</script>

<style>
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
  right: 0px
}

button{
  position: fixed;
  right: 10px;
  top: 10px;
  background-color: transparent;
  border: none;
  z-index: 11;
}
</style>
