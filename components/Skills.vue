<template>
  <main class="secondary-color section skills">
    <h1>TECH SKILLS</h1>
    <div class="tech-icons">
      <Icon name="logos:vue" />
      <Icon name="logos:nuxt-icon" />
      <Icon name="vscode-icons:file-type-js-official" />
      <Icon name="devicon:nodejs" />
      <Icon name="skill-icons:mongodb" />
      <Icon name="skill-icons:html" />
      <Icon name="devicon:css3" />
      <Icon name="logos:python" />
      <Icon name="skill-icons:flask-light" />
      <Icon name="skill-icons:cpp" />
      <Icon name="skill-icons:c" />
      <Icon name="skill-icons:cs" />
      <Icon name="skill-icons:bootstrap" />
      <Icon name="logos:element" />
      <Icon name="skill-icons:mysql-light" />
      <Icon name="skill-icons:git" />
    </div>
  </main>
</template>

<style scoped>
.skills {
  height: fit-content !important;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 2rem 0 3rem 0;
}
h1 {
  position: relative;
  padding-bottom: 1rem;
  top: 0rem !important;
}
.tech-icons {
  display: grid;
  width: 30rem;
  grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
  grid-gap: 50px;
  justify-content: center;
}
svg {
  justify-self: center;
  width: 4rem !important;
  height: auto !important;
}

@media screen and (max-width: 720px) {
  .skills {
    padding: 1rem 0 3rem 0;
  }
  svg {
    width: 2.5rem !important;
    height: auto !important;
  }
  .tech-icons {
    width: 22rem;
    grid-gap: 30px;
  }
  h1 {
    padding-bottom: 1.5rem !important;
  }
}
</style>
