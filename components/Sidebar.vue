<template>
  <ul class="main-color vertical ws-black">
    <li>
      <a href="#home"><Icon name="uil:home-alt" /></a>
    </li>
    <li>
      <a href="#about"><Icon name="fluent:person-info-24-filled" /></a>
    </li>
    <li>
      <a href="#projects"
        ><Icon name="material-symbols:lab-profile-outline-sharp"
      /></a>
    </li>
    <li>
      <a href="#skills"><Icon name="mdi:code-tags" /></a>
    </li>
    <li>
      <a href="#contact"><Icon name="mdi:email-arrow-right-outline" /></a>
    </li>
  </ul>
</template>

<style scoped>
.vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #86885b79;
  border-radius: 1rem;
  top: 150px;
  background-color: #dcdcf0a6;
}
.dark .vertical {
  background-color: rgba(26, 34, 34, 0.699) !important;
}
.vertical li {
  width: 100%;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  color: #111111;
}

li a:hover {
  background-color: #b0b19c13;
  font-weight: 600;
}
</style>
