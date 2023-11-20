<template>
  <main class="secondary-color section footer">
    <h2>Social Links</h2>
    <ul>
      <li class="whatsapp">
        <a href="https://wa.me/+972536241757" target="_blank"
          ><Icon name="formkit:whatsapp"
        /></a>
      </li>
      <li class="github">
        <a href="https://github.com/Eden-Cohen1" target="_blank"
          ><Icon name="uiw:github"
        /></a>
      </li>
      <li class="linkdin">
        <a href="https://www.linkedin.com/in/eden-co/" target="_blank"
          ><Icon name="bi:linkedin"
        /></a>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  height: 30vh;
  border-top: 1px solid var(--light-bg-sec);
  position: absolute;
}
.dark .footer {
  border-top: 1px solid var(--dark-bg-sec);
}

ul {
  display: flex;
  gap: 2.5rem;
  min-height: 6rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: none;
}
svg {
  width: 3rem !important;
  height: auto !important;
  color: var(--dark-bg-main);
}
.dark svg {
  color: var(--light-bg-main);
}
.whatsapp svg {
  width: 3.4rem !important;
  height: auto !important;
}
.whatsapp :hover {
  color: #2ec452;
}
.github :hover {
  color: rgb(211, 6, 47);
}
.linkdin :hover {
  color: var(--btn-hover-color);
}
a:hover {
  background-color: transparent !important;
}
</style>
