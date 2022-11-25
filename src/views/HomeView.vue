<template>
  <div class="home">
    <h1 class="homeHeader">Home</h1>
    <p class="homeText">text!</p>
  </div>
  <nav class="tabs-container">
    <!-- <router-link to="/" class="tabs">Home</router-link> -->
    <!-- <router-link to="/about" class="tabs">About</router-link> -->
    <router-link to="/power" class="tabs">Power Systems</router-link>
    <router-link to="/ce" class="tabs">Computer Eng.</router-link>
    <router-link to="/analog" class="tabs">Analog Devices</router-link>
    <router-link to="/signals" class="tabs">Wireless Comms/Signals</router-link>
  </nav>
</template>

<style>
.homeHeader {
  color: #1f2327;
  /* margin-left: 1em; */
}
.homeText {
  color: #34383b;
  /* margin-left: 1em; */
}
</style>
