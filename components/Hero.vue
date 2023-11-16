<template>
  <main class="main-color section my-hero wave">
    <div class="overlay"></div>
    <div class="avatar">
      <NuxtImg src="me.jpg" alt="" />
    </div>
    <div class="headline-container">
      <h1>{{ heroText.line1 }}</h1>
      <h2>{{ heroText.line2 }}</h2>
    </div>
  </main>
</template>

<script setup>
const heroText = reactive({
  headline: "Hello, i'm Eden\n A CS student and a Full-stack developer.",
  line1: "",
  line2: "",
});

const typeText = () => {
  for (let i = 0; i < heroText.headline.length; i++) {
    setTimeout(
      () => {
        if (i <= heroText.headline.indexOf("\n")) {
          heroText.line1 += heroText.headline[i];
        } else {
          heroText.line2 += heroText.headline[i];
        }
      },
      40 * i,
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
  flex-direction: column;
  height: 75vh;
}

.avatar {
  width: 150px;
  height: 150px;
  box-sizing: border-box;
  border: 5px white solid;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  transform: translatey(0px);
  animation: float 4.5s ease-in-out infinite, dropImage 3s;
  animation-delay: 3s, 0s;
  margin-bottom: 1rem;
}
img {
  width: 100%;
  height: auto;
}
.dark .avatar {
  box-shadow: 0 5px 15px 0px rgba(255, 255, 255, 0.322) !important;
}
.headline-container {
  height: 132px;
  z-index: 10;
}
h1,
h2 {
  text-align: center;
  line-height: 2;
  margin: 0;
}
.overlay {
  position: absolute;
  top: 19rem;
  left: 5rem;
  width: 100%;
  height: 100%;
  background-size: 20rem;
  opacity: 30%;
  background-repeat: no-repeat;
  background-image: url(programmer.png);
  z-index: 0; /* Ensure it's above the image */
  overflow: hidden;
}
</style>
