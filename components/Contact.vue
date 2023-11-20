<template>
  <main class="main-color section contact">
    <h1>CONTACT ME</h1>
    <form name="contact" class="contact-form" data-netlify="true">
      <input
        name="name"
        type="text"
        class="feedback-input"
        placeholder="Name"
      />
      <input
        name="email"
        type="email"
        class="feedback-input"
        placeholder="Email"
      />
      <textarea
        name="text"
        class="feedback-input"
        placeholder="Comment"
      ></textarea>
      <input type="submit" value="SEND" />
    </form>
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
  padding: 5rem 2rem 5rem 0rem;
}
.contact-form {
  max-width: 70vw;
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
</style>
