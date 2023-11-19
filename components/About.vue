<template>
  <main class="secondary-color section about">
    <div class="text">
      <h1>ABOUT ME</h1>
      <p>
        Highly motivated and dedicated computer science student pursuing a
        <b>full-stack developer position</b>.<br />
        Committed to continuous learning and adept at embracing challenges.<br />
        Eager to contribute to team success by leveraging my skills and adapting
        to evolving technologies.
      </p>
      <button class="primary">Download CV</button>
    </div>
    <div v-show="!isMobile" class="picture">
      <Img src="full-stack.png" />
    </div>
  </main>
</template>

<script setup>
const isMobile = inject("isMobile");
</script>
<style scoped>
.about {
  height: fit-content;
  display: flex;
  justify-content: space-around;
  padding: 5rem 0rem;
}
.text {
  margin-right: 5%;
  width: 45%;
  order: 2;
}
p {
  text-align: left;
  line-height: 2.5rem;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.picture {
  margin-left: 5%;
  order: 1;
  max-width: 20rem;
  min-width: 20rem;
}
img {
  width: 100%;
  height: auto;
}
@media screen and (max-width: 950px) {
  .text {
    display: flex;
    flex-direction: column;
    margin: 0 !important;
    width: 100% !important;
    justify-content: center !important;
    padding: 2rem;
  }
  button {
    width: 10rem;
  }
}
</style>
