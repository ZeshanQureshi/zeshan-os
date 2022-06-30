<template>
  <div class="desktop-app" @dblclick="openChess">
    <img src="../public/learn-chess.png">
    <p>Learn Chess</p>
  </div>
  <div class="desktop-app" @dblclick="openRubiks">
    <img src="../public/rubiks-algo.png">
    <p>Rubiks Algo</p>
  </div>

  <footer>
    <div class="start" @click="toggleBar">
      <img class="os" src="../public/os.png">
    </div>
    <div v-if="showMenu" class="dropup-content" v-click-outside-element="close">
      <h3>About Me</h3>
      <h3>Experience</h3>   
      <h3>Projects</h3>
      <h3>Skills</h3>      
    </div>

    <div class="time">
      <p>{{ time }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      interval: null,
      time: null,
      showMenu: false
    }
  },
  methods: {
    toggleBar() {
      this.showMenu = !this.showMenu;
    },
    openChess() {
      window.open("https:learnchess.me");
    },
    openRubiks() {
      window.open("https:rubiksalgo.tech");
    },
    close(){
      console.log("yop")
    }
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  created() {
    this.interval = setInterval(() => {
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
    }, 1000)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  color: lightgray;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  vertical-align: baseline;
  background: transparent;
  font-family: 'Open Sans', sans-serif;
}

html {
  height: 100%;
}

body {
  background-image: url("../public/background.png");
  height: 100%;
  width: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

img {
  width: 100%;
  max-height: 100px;
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #FFAE42;
  opacity: 0.7;
  color: white;
  text-align: center;
  height: 50px;
  border-top: 1px solid rgb(154, 100, 0);

  box-sizing: border-box;
  user-select: none;
}

h3 {
  font-size: 30px;
  line-height: 100px;
  width: 100%;
}

.desktop-app {
  width: 100px;
  height: 120px;
  text-align: center;
  user-select: none;
}

.desktop-app:hover {
  background-color:rgba(125, 165, 250,0.5);
  border: 1px solid rgb(125, 165, 250);
  box-sizing: border-box;
}

.start {
  height: 50px;
  width: 60px;
  position: relative;
  float: left;
}

.dropup-content {
  display: block;
  position: absolute;
  height: 400px;
  width: 300px;
  bottom: 50px;
  background-color: rgb(154, 100, 0);
  z-index: 1;
}


.start:hover {
  background-color: rgb(154, 100, 0);
}

.os {
  height: 40px;
  width: 50px;

  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.time {
  height: 50px;
  width: 100px;
  float: right;
  text-align: center;
  line-height: 50px;
}

.time:hover {
  background-color: rgb(154, 100, 0);
}

</style>
