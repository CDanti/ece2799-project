<!-- eslint-disable prettier/prettier -->
<template>
  <div class="home">
    <h1 class="homeHeader">ECE 2799 Team 3</h1>
  </div>
  <nav class="tabs-container">
    <!-- <router-link to="/about" class="tabs">About</router-link> -->
    <router-link to="/power" class="tabs">Power Systems</router-link>
    <router-link to="/ce" class="tabs">Computer Eng.</router-link>
    <router-link to="/analog" class="tabs">Analog Devices</router-link>
    <router-link to="/signals" class="tabs">Wireless Comms/Signals</router-link>
  </nav>
  <p class="homeText">
    This product was created by Chris Danti, Alberto Flores, and Elisabeth Whittemore for our ECE 2799 project.
    The goal for this project is to create an interactive display that attracts prospective students, their parents, and undecided WPI stuents towards the ECE major.
  </p>
  <p class="homeText">
    We found through our market research that even current WPI ECE Undergraduates did not know most of the subfields of ECE. We saw this as a perfect opportunity to not only educate but entertain and capture the attention of those who view our product.
  </p>
  <p class="homeText">
    This website serves as an avenue for those who saw our display in Atwater Kent and wanted to learn more about the subfields of ECE listed above. All you have to do is select a subfield and the information relevant to each field will show.
  </p>
</template>

<style>
.homeHeader {
  color: #1f2327;
  /* margin-left: 1em; */
  font-size: 24px;
}
.homeText {
  color: #34383b;
  /* margin-left: 1em; */
}
</style>
