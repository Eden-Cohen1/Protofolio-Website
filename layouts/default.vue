<template>
  <main ref="screenSize" v-show="width">
    <div v-if="!isMobile" class="navbar">
      <ul class="main-color horizontal ws-black">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button class="themeBtn" @click="toggleDarkMode">
            <nuxt-icon name="toggle-off"></nuxt-icon>
          </button>
        </li>
      </ul>
    </div>
    <div v-else="isMobile" class="sidebar">
      <ul class="main-color vertical ws-black">
        <li>
          <a href="#home"><nuxt-icon name="home"></nuxt-icon></a>
        </li>
        <li>
          <a href="#about"><nuxt-icon name="about"></nuxt-icon></a>
        </li>
        <li>
          <a href="#projects"><nuxt-icon name="projects"></nuxt-icon></a>
        </li>
        <li>
          <a href="#skills"><nuxt-icon name="skills"></nuxt-icon></a>
        </li>
        <li>
          <a href="#contact"><nuxt-icon name="contact"></nuxt-icon></a>
        </li>
      </ul>
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
@import url("../assets/navbar.css");
</style>
