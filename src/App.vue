<!-- eslint-disable prettier/prettier -->
<template class="entirety">
  <h1 class="mainHeader">ECE 2799 Team 3</h1>
  <div class="container">
    <router-view />
  </div>
  <a class="backBtn" href="./">Back Button</a> <!--should I put this in here or in App.vue??-->
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
.entirety {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainHeader {
  background-color: #ac2b37;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #34383b;
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
  width: 50%;
  padding: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: whitesmoke;
  /* border: solid 3px red; */
  background-color: #696766;
}
</style>
