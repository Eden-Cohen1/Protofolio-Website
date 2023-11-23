<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
onBeforeMount(() => {
  document.querySelector(`#mic-init-access-tool`).remove();
  window.micAccessTool = new MicAccessTool({
    link: "/accessibillity statement.pdf",
    contact:
      "https://mail.google.com/mail/?view=cm&fs=1&to=edencohen.dev@gmail.com",
    buttonPosition: "left",
    forceLang: "en",
  });
});
</script>

<style>
button#mic-access-tool-general-button {
  transform: scale(0.7);
  left: -6.5px !important;
}
</style>
