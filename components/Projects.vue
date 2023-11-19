<template>
  <main class="main-color section projects">
    <h1>PROTOFOLIO</h1>
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
          <img :src="project.img" alt="" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const projects = {
  waveCave: {
    headline: "Wave Cave",
    subHeadline: "Social media website for surfers and waves-forecast service.",
    description:
      "This project was made with the purpuse of learning JS, HTML, CSS, Mongoose and Nodejs, before advancing to a frontend framework like Vue.js.",
    tech: ["Javascript", "HTML", "CSS", "Express", "MongoDB"],
    img: "waveCave.png",
    links: {
      git: "https://github.com/Eden-Cohen1/Wave-Cave",
      youtube: false,
      website: "https://wave-cave.onrender.com/",
    },
  },
  shapeShift: {
    headline: "Shape Shift",
    subHeadline: "Workout menegment and tracking windows application.",
    description:
      "This project was made with the purpuse of learning OOP, C#, and data manegment.",
    tech: ["C#", ".NET Win-Forms"],
    img: "shapeShift.jpg",
    links: {
      git: "https://github.com/Eden-Cohen1/Workout-Manager",
      youtube: false,
      website: false,
    },
  },
  protoWebsite: {
    headline: "Protofolio Website",
    subHeadline: "The website you are looking at 😉",
    description:
      "This project was made with the purpuse of learning Vue.js, Nuxt3. i've learned how to properly build and orginze a project with a frontend framework.",
    tech: ["Javascript", "Vue.js", "Nuxt3", "HTML", "CSS"],
    img: "protofolio.png",
    links: {
      git: "https://github.com/Eden-Cohen1/Protofolio-Website",
      youtube: false,
      website: false,
    },
  },
};
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
  margin-top: 0.5rem;
}
.card {
  display: flex;
  justify-content: space-around;
  margin: 3.5rem auto;
  position: relative;
  max-width: 1050px;
  max-height: 350px;
  min-height: 350px;
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
  min-height: 350px;
  order: 2;
  padding-right: 5rem;
}
.card p {
  word-wrap: break-word;
  line-height: 1.4rem;
}

img {
  width: 100%;
  min-height: 350px;
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
  right: -10px;
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
  }
  .card-right {
    padding-right: 1rem;
  }
  .card-desc,
  p {
    font-size: 0.85rem;
    width: 100%;
  }
}
@media screen and (max-width: 750px) {
  .card-desc {
    font-size: 1rem !important;
    width: 90% !important;
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
    min-height: 400px;
    margin: 5rem auto;
  }
  .card-left {
    position: absolute;
    -webkit-clip-path: none;
    clip-path: none;
    width: 100%;
    height: 100%;
    transition: 0.8s ease;
  }
  .card-right {
    position: absolute;
    width: 90%;
    padding: 0;
    opacity: 0;
    transition: 0.8s ease;
    z-index: 10;
  }
  img {
    object-fit: cover !important;
    min-height: 400px;
  }
  .card:hover .card-left {
    opacity: 0;
  }
  .card:hover .card-right {
    opacity: 1;
  }
  .icons {
    gap: 0.5rem;
    right: -0.7rem;
    bottom: -2.5rem;
  }
}
</style>
