<template>
  <section class="skills-section">
    <div class="wrapper" data-aos="fade-right" data-aos-duration="1000">
      <h1>Skills</h1>
      <h5>Pass the mouse over the cards and discover my skills:</h5>
      <div class="container">
        <div
          class="card"
          v-tilt="{
            perspective: 400,
            transition: true,
            glare: 1,
            'max-glare': 0.1,
          }"
        >
          <div class="content">
            <div>
              <img src="../assets/images/logo-react.png" />
              <h2>
                REACT
              </h2>
              <br />
              <p>
                Ahusahudh iasodhoash hjashijdha ii asiuhas dhsai diuas huiasdh
                iuashdi
              </p>
            </div>
          </div>
        </div>
        <div
          class="card"
          v-tilt="{
            perspective: 400,
            transition: true,
            glare: 1,
            'max-glare': 0.1,
          }"
        >
          <div class="content">
            <div>
              <img src="../assets/images/logo-vuejs.png" />
              <h2>
                VUE JS
              </h2>
              <br />
              <p>
                Ahusahudh iasodhoash hjashijdha ii asiuhas dhsai diuas huiasdh
                iuashdi
              </p>
            </div>
          </div>
        </div>
        <div
          class="card"
          v-tilt="{
            perspective: 400,
            transition: true,
            glare: 1,
            'max-glare': 0.1,
          }"
        >
          <div class="content">
            <div>
              <h2>
                TERCEIRO
              </h2>
              <br />
              <p>
                Ahusahudh iasodhoash hjashijdha ii asiuhas dhsai diuas huiasdh
                iuashdi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
