<template>
  <main class="main-color section projects">
    <h1>PORTFOLIO</h1>
    <div class="cards">
      <div class="card" v-for="project in projects">
        <div class="card-right">
          <h2 class="card-title">{{ project.headline }}</h2>
          <div class="card-desc">
            <b>{{ project.subHeadline }}</b>
            <p>{{ project.description }}</p>
            <div class="projcard-tagbox">
              <span class="projcard-tag" v-for="tech in project.tech">{{
                tech
              }}</span>
            </div>
          </div>
          <div class="icons">
            <a :href="project.links.git" target="_blank">
              <Icon name="mdi:github" />
            </a>
            <a
              :href="project.links.youtube"
              target="_blank"
              v-show="project.links.youtube"
              ><Icon name="teenyicons:youtube-outline" />
            </a>
            <a
              :href="project.links.website"
              v-show="project.links.website"
              target="_blank"
            >
              <button class="primary">View Website</button>
            </a>
          </div>
        </div>
        <div class="card-left">
          <NuxtImg :src="project.img" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import projects from "~/data/projects.json";
</script>

<style scoped>
.projects {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  padding: 2rem 0rem 5rem;
}
.cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
}
.card {
  display: flex;
  justify-content: space-around;
  margin: 2rem auto 5rem;
  position: relative;
  max-width: 1050px;
  height: fit-content;
  max-height: 400px;
  min-height: 430px;
  box-shadow: 0 20px 60px -20px black;
  overflow: hidden;
  border-radius: 1rem;
  gap: 1.5rem;
}

h2 {
  color: var(--btn-color);
}
.card-left {
  position: relative;
  order: 1;
  flex-shrink: 0;
  width: 50%;
  -webkit-clip-path: polygon(0 0%, 100% 0%, 100% 93%, 0% 100%);
  clip-path: polygon(0 0%, 100% 0%, 100% 0%, 0% 550%);
}
.card-right {
  position: relative;
  width: 50%;
  min-height: 385px;
  order: 2;
  padding-right: 5rem;
}
.card p {
  word-wrap: break-word;
  line-height: 1.4rem;
}

img {
  width: 100%;
  min-height: 430px;
  overflow: hidden;
}

.projcard-tagbox {
  position: relative;
  bottom: 30%;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: default;
  user-select: none;
}
.projcard-tag {
  display: inline-block;
  background: var(--light-bg-sec);
  color: var(--btn-color);
  border-radius: 3px 0 0 3px;
  line-height: 26px;
  padding: 0 10px 0 23px;
  position: relative;
  margin-right: 1rem;
  margin-bottom: 0.8rem;
  cursor: default;
  user-select: none;
  transition: color 0.2s;
}
.dark .projcard-tag {
  background: var(--dark-bg-sec);
}
.dark .projcard-tag::after {
  border-left-color: var(--dark-bg-sec);
}
.projcard-tag::before {
  content: "";
  position: absolute;
  background: var(--btn-color);
  border-radius: 10px;
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
  height: 6px;
  left: 10px;
  width: 6px;
  top: 10px;
}
.projcard-tag::after {
  content: "";
  position: absolute;
  border-bottom: 13px solid transparent;
  border-left: 10px solid var(--light-bg-sec);
  border-top: 13px solid transparent;
  right: -9px;
  top: 0;
}

.icons {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: right;
  min-width: 10rem;
  gap: 1rem;
  bottom: 0.8rem;
  right: 1rem;
}
.dark svg {
  color: var(--light-bg-main);
}
svg {
  width: 2rem !important;
  height: auto !important;
  color: var(--dark-bg-main);
}
svg:hover {
  cursor: pointer;
  color: var(--btn-color);
}

@media screen and (max-width: 1100px) {
  .card {
    max-width: 90% !important;
    min-height: 430px;
  }
  .card-right {
    padding-right: 1rem;
  }
  .card-desc,
  p {
    font-size: 0.85rem;
    width: 100%;
  }
  img {
    min-height: 430px;
  }
}
@media screen and (max-width: 860px) {
  .card-desc {
    font-size: 1rem !important;
    width: 96% !important;
  }
  p {
    width: 100%;
    font-size: 1rem !important;
  }
  h2 {
    position: relative;
    padding-left: 0;
  }
  .card {
    width: 100%;
    min-height: 560px;
    margin: 2rem auto 4rem;
  }
  .card-left {
    position: absolute;
    -webkit-clip-path: none;
    clip-path: none;
    width: 100%;
    height: 100%;
    transition: 0.8s ease;
    z-index: 6;
  }
  .card-right {
    position: absolute;
    width: 90%;
    padding: 0;
    opacity: 0;
    transition: 0.6s ease;
    min-height: 510px;
    z-index: 6;
  }
  img {
    object-fit: cover !important;
    min-height: 560px;
  }
  .card:hover .card-left {
    opacity: 0;
    z-index: 4 !important;
  }
  .card:hover .card-right {
    opacity: 1;
  }
  .icons {
    gap: 0.5rem;
    right: -0.4rem;
    bottom: -2.5rem;
  }
}
@media screen and (max-width: 640px) {
  .card {
    min-height: 650px;
  }
  img {
    min-height: 650px;
  }
  .card-right {
    min-height: 600px;
  }
}
</style>
