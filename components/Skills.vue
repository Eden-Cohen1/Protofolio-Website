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
    </div>
  </main>
</template>

<style scoped>
.skills {
  height: fit-content !important;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
}
h1 {
  position: relative;
  padding-bottom: 1rem;
  top: 0rem !important;
}
.tech-icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 3rem 0 3rem;
  max-width: 700px !important;
  margin: auto;
  gap: 4.5rem !important;
  padding-bottom: 4rem;
}
svg {
  width: 4rem !important;
  height: auto !important;
}

@media screen and (max-width: 720px) {
  svg {
    width: 2.2rem !important;
  }
  .tech-icons {
    gap: 2rem !important;
    padding: 0 2rem 0 2rem;
    margin-top: 2.5rem !important;
  }
  h1 {
    padding-bottom: 0.5rem !important;
  }
}
</style>
