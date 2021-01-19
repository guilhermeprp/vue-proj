<template>
  <NavBar />
  <HomeBanner />
  <SkillsSection />
</template>

<script>
import NavBar from "./components/navbar.vue";
import HomeBanner from "./components/home-banner.vue";
import SkillsSection from "./components/skills-section.vue";
import "@/assets/scss/main.scss";

export default {
  name: "App",
  components: {
    NavBar,
    HomeBanner,
    SkillsSection,
  },
};
</script>
