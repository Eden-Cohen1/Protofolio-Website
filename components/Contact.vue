<template>
  <main class="main-color section contact">
    <h1>CONTACT ME</h1>
    <a href="https://wa.me/+972536241757" target="_blank">
      <Icon name="ic:twotone-whatsapp" />
      Chat on WhatsApp</a
    >
  </main>
</template>

<style scoped>
.contact {
  height: fit-content;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 3rem;
}
a {
  border: none;
  border-radius: 2rem;
  padding: 1rem;
  text-decoration: none;
  color: white;
  background-color: #2ec452;
}
a:hover {
  background-color: #269b41 !important;
  color: white !important;
  font-weight: 500 !important;
}
</style>
