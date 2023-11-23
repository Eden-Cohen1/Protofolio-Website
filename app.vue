<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
onMounted(() => {
  window.onload = function () {
    window.micAccessTool = new MicAccessTool({
      link: "https://eden-cohen.netlify.app/",
      contact: "edenfortesting@gmail.com",
      buttonPosition: "right", // default is 'left'
      forceLang: "ru-RU", // default is 'en' may be 'he-IL', 'ru-RU', or 'fr_FR'
    });
  };
});
</script>
