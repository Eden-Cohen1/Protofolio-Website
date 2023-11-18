<template>
  <main class="main-color section projects">
    <h1>PROTOFOLIO</h1>
    <div class="cards">
      <div class="card">
        <h2 class="card-title">Wave-Cave</h2>
        <img src="waveCave.png" alt="" />
        <div class="card-desc secondary-color">
          <p>
            <b>JS, Express, Mongoose, Html, Css.</b><br /><br />
            Social media website for surfers and waves-forecast service<br /><br />
            This project was made with the purpuse of learning JS, HTML, CSS,
            Mongoose and Nodejs, before advancing to a frontend framework like
            Vue.js.
          </p>
          <div class="icons">
            <Icon name="mdi:github" />
            <Icon name="teenyicons:youtube-outline" />
            <button class="primary">View Website</button>
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-title">Shape-Shift</h2>
        <img
          src="https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt=""
        />
        <div class="card-desc secondary-color">
          <p>
            <b>C#, .NET Windows Froms.</b><br /><br />
            Workout menegment and tracking windows application <br /><br />
            This project was made with the purpuse of learning OOP, C#, and data
            manegment.
          </p>
          <div class="icons">
            <Icon name="mdi:github" />
            <Icon name="teenyicons:youtube-outline" />
          </div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-title">Protofolio Website</h2>
        <img src="protofolio.png" alt="" />
        <div class="card-desc secondary-color">
          <p>
            <b>JS, Vue.js, Nuxt3, Html, Css</b><br /><br />
            The website you are looking at 😉 <br /><br />
            This project was made with the purpuse of learning Vue.js, Nuxt3.<br />
            i've learned how to properly build and orginze a project with a
            frontend framework.
          </p>
          <div class="icons">
            <Icon name="mdi:github" />
            <Icon name="teenyicons:youtube-outline" />
            <button class="primary">View Website</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

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
  justify-content: space-around;
  margin-top: 0.5rem;
}
b {
  color: var(--btn-color);
}
.card {
  margin: 40px;
  position: relative;
  max-width: 350px;
  max-height: 350px;
  min-height: 350px;
  box-shadow: 0 40px 60px -6px black;
  overflow: hidden;
  border-radius: 1rem;
}

.card-title {
  display: block;
  text-align: center;
  color: #fff;
  font-size: 1.2rem;
  background-color: var(--btn-color);
  padding: 2%;
  margin: 0;
}

.card img {
  width: 100%;
  height: 98%;
  object-fit: cover;
  display: block;
  position: relative;
}

.card-desc {
  display: block;
  font-size: 0.9rem;
  position: absolute;
  height: 0;
  top: 0;
  margin: 0;
  opacity: 0;
  padding: 18px 8%;
  color: black;
  overflow-y: hidden;
  transition: 0.8s ease;
}
.dark .card-desc {
  color: white;
}

.card:hover .card-desc {
  opacity: 1;
  height: 100%;
}
.icons {
  position: absolute;
  display: flex;
  gap: 1rem;
  bottom: 3rem;
}
svg {
  width: 2.5rem !important;
  height: auto !important;
}
svg:hover {
  cursor: pointer;
  color: var(--btn-color);
}
</style>
