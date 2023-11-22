<template>
  <main class="main-color section contact">
    <h1>CONTACT ME</h1>
    <form name="contact" class="contact-form" data-netlify="true">
      <input
        name="name"
        type="text"
        class="feedback-input"
        placeholder="Name"
        required
      />
      <input
        name="email address"
        type="email"
        class="feedback-input"
        placeholder="Email"
        required
      />
      <input
        name="email address"
        type="email"
        class="feedback-input hidden"
        placeholder="Email"
        required
      />
      <textarea
        v-model="message"
        name="text"
        class="feedback-input"
        placeholder="Message"
        @focus="isFocused = true"
        @blur="isFocused = false"
      ></textarea>
      <div class="error-msg">
        <small v-show="!rule && isFocused"
          >*must be between <b>10</b> and <b>200</b> characters</small
        >
      </div>
      <input type="submit" value="SEND" :disabled="!rule" />
    </form>
  </main>
</template>

<script setup>
const message = ref();
const isFocused = ref(false);
const rule = computed(() => {
  const msgLength = message.value?.trim().length;
  return msgLength >= 10 && msgLength <= 200;
});
</script>
<style scoped>
.contact {
  height: fit-content;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 3rem;
  padding: 5rem 2rem 5rem 0rem;
}
.contact-form {
  max-width: 70vw;
  min-width: 60vw;
  display: flex;
  flex-direction: column;
}
small {
  position: relative;
  padding-bottom: 1rem;
  left: 15px !important;
  top: -10px !important;
  color: rgb(194, 0, 0);
}
.hidden {
  display: none;
  opacity: 0;
}
.error-msg {
  min-height: 1.1rem;
}
[type="submit"]:disabled {
  cursor: not-allowed;
  opacity: 0.8;
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
.feedback-input {
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 18px;
  border-radius: 2rem;
  line-height: 22px;
  background-color: transparent;
  border: 2px solid var(--light-bg-sec);
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;
}
.dark .feedback-input {
  border-color: var(--dark-bg-sec);
}

.feedback-input:focus {
  border: 2px solid var(--btn-color);
}

textarea {
  height: 150px;
  line-height: 150%;
  resize: vertical;
}

[type="submit"] {
  width: 100%;
  border-radius: 2rem;
  border: 0;
  background-color: var(--btn-color);
  color: white;
  cursor: pointer;
  font-size: 1rem;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.3s;
  margin-top: -4px;
  font-weight: 700;
}
[type="submit"]:hover {
  background: var(--btn-hover-color);
}
@media screen and (max-width: 950px) {
  .contact-form {
    min-width: 90vw !important;
  }
  h1 {
    margin-bottom: 2.5rem !important;
  }
  .contact {
    padding-top: 2.5rem;
  }
}
</style>
