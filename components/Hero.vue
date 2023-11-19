<template>
  <main class="main-color my-hero">
    <div class="avatar">
      <Img src="me-big.png" alt="" />
    </div>
    <div class="headline-container">
      <h1 v-if="isMobile">Hi, I'm <span>Eden</span></h1>
      <h1 v-else="">Hello, I'm <span>Eden</span></h1>
      <h2>{{ heroText.line1 }}</h2>
      <h3>
        B.S.c Computer Science Student. <br />
        Currently seeking a dynamic role as a Full-Stack Developer.
      </h3>
      <div class="social-links">
        <a href="https://github.com/Eden-Cohen1" target="_blank"
          ><Icon name="uiw:github"
        /></a>
        <a href="https://www.linkedin.com/in/eden-co/" target="_blank"
          ><Icon name="bi:linkedin"
        /></a>
      </div>
    </div>
  </main>
</template>

<script setup>
const isMobile = inject("isMobile");
const heroText = reactive({
  headline: "Full-Stack Web Developer. \n",
  line1: "",
});

const typeText = () => {
  for (let i = 0; i < heroText.headline.length; i++) {
    setTimeout(
      () => {
        heroText.line1 += heroText.headline[i];
      },
      65 * i,
      i
    );
  }
};

onMounted(() => {
  typeText();
});
</script>

<style scoped>
.my-hero {
  display: flex;
  justify-content: space-around;
  height: 80vh;
  width: 100%;
  padding-left: 5rem;
  align-items: center;
  -webkit-clip-path: polygon(0 0%, 100% 0%, 100% 93%, 0% 100%);
  clip-path: polygon(0 0%, 100% 0%, 100% 93%, 0% 100%);
  overflow: hidden;
}

.avatar {
  position: relative;
  order: 1;
  bottom: -5.7rem;
}

.avatar img {
  width: 39rem;
  height: auto;
}
.headline-container {
  position: relative;
  height: 132px;
  margin-bottom: 5rem;
  z-index: 10;
}

h1,
h2,
h3 {
  text-align: left;
  font-family: "Playpen Sans", cursive;
  margin: 0;
}
h1 {
  position: relative;
  font-size: 5.5rem;
  word-spacing: -1rem;
  font-weight: bold;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.616);
  margin-bottom: 0.5rem;
}
h1 span {
  color: var(--btn-color);
  font-family: "Playpen Sans", cursive;
}
.dark h1 {
  text-shadow: 1px 1px 2px rgba(175, 175, 175, 0.267);
}
h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-left: 0.5rem;
}
h3 {
  margin-top: 0.5rem;
  line-height: 1.5rem;
  font-weight: 100;
  font-size: 1rem;
  margin-left: 0.5rem;
}
.social-links {
  display: flex;
  justify-content: left;
  margin-top: 2rem;
  margin-left: 1rem;
  gap: 1.5rem;
}
svg {
  color: black;
  width: 1.6rem !important;
  height: auto !important;
}
a:hover {
  background-color: transparent !important;
}
.dark a:hover {
  background-color: transparent !important;
}
.dark svg {
  color: white;
}
svg:hover {
  color: var(--btn-color);
}
@media screen and (max-width: 1350px) {
  h1 {
    font-size: 4.8rem !important;
  }
  h2 {
    font-size: 1.4rem !important;
  }
  h3 {
    font-size: 0.9rem !important;
  }
}
@media screen and (max-width: 990px) {
  .my-hero {
    flex-direction: column;
    justify-content: center;
    position: relative;
    top: -2rem;
    gap: 2rem;
    padding: 0rem;
    padding-bottom: 8rem !important;
  }
  h1 {
    font-size: 3rem !important;
    text-align: center;
    word-spacing: -0.2rem;
  }
  h2 {
    font-size: 1.4rem !important;
    text-align: center;
  }
  h3 {
    font-size: 0.9rem !important;
    text-align: center;
  }
  .headline-container {
    display: flex;
    flex-direction: column;
    order: 2;
    margin-bottom: 0;
  }
  .avatar {
    order: 1;
  }
  .avatar img {
    position: relative;
    border-radius: 50%;
    top: -4rem;
    width: 17rem;
    animation: 2s dropImage;
  }
  .social-links {
    position: relative;
    justify-content: center;
    top: -1rem;
  }
}
</style>
