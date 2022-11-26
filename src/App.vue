<!-- eslint-disable prettier/prettier -->
<template class="entirety">
  <h1 class="mainHeader">ECE Subfield Interactive Display</h1> <!--ECE 2799 Team 3-->
  <div class="container">
    <router-view />
  </div>
  <router-link to="/" class="backBtn">Back Button</router-link>
  <!-- <a class="backBtn" href="./">Back Button</a> should I put this in here or in App.vue?? -->
</template>

<style>
.backBtn {
  color: whitesmoke;
  margin-left: 1em;
  background-color: #2c3e50;
  padding: 5px;
}
.container {
  margin-left: 1em;
  margin-right: 1em;
}
/* .entirety {
} */
.mainHeader {
  display: flex;
  justify-content: center;
  border-color: blue;
  background-color: #ac2b37;
  color: #34383b;
  padding-left: 1.5em;
}
.tabs-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  background: #2c3e50;
  margin: 5px;
}

.tabs {
  display: flex;
  justify-self: center;
  width: 70%;
  padding: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: whitesmoke;
  /* border: solid 3px red; */
  background-color: #696766;
}

.backTab {
  color: blue;
}
</style>
