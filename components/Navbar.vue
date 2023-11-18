<template>
  <ul class="main-color horizontal ws-black">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <h4>Eden Cohen</h4>
</template>

<style>
ul {
  border-bottom: 1px solid #b0b19c13;
  display: flex;
  justify-content: right;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

.horizontal li a {
  display: block;
  font-size: 0.9rem;
  text-align: center;
  padding: 17px 26px;
  text-decoration: none;
  color: #111111;
}
.dark .horizontal {
  background-color: rgba(26, 34, 34, 0.699) !important;
}
h4 {
  position: fixed;
  z-index: 11;
  left: 60px;
  top: -2px;
  font-size: 0.9rem;
}
</style>
