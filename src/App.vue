<template>
  <div class="desktop-app" @click="toggleChess" @dblclick="openChess" :class='{ "desktop-app-click": showChess }' v-click-outside="chessClickOut">
    <img src="../public/learn-chess.png">
    <p>Learn Chess</p>
  </div>
  <div class="desktop-app"  @click="toggleRubiks" @dblclick="openRubiks" :class='{ "desktop-app-click": showRubiks }' v-click-outside="rubiksClickOut">
    <img src="../public/rubiks-algo.png">
    <p>Rubiks Algo</p>
  </div>

  <footer>
    <div class="start" @click="toggleBar">
      <img class="os" src="../public/os.png">
    </div>

    <div v-if="showMenu" class="dropup-content" data-aos="fade-right" v-click-outside="menuClickOut" >
      <h3>About Me</h3>
      <h3>Experience</h3>   
      <h3>Projects</h3>
      <h3>Skills</h3>      
    </div>

    <div class="time">
      <p>{{ time }}</p>
      <p>{{ date }}</p>
    </div>
  </footer>
</template>

<script>
import vClickOutside from 'click-outside-vue3';

export default {
  name: 'App',
  data() {
    return {
      intervalTime: null,
      intervalDate: null,
      time: null,
      date: null,
      showMenu: false,
      showChess: false,
      showRubiks: false,
    }
  },
  methods: {
    openChess() {
      window.open("https://learnchess.me");
    },
    openRubiks() {
      window.open("https://rubiksalgo.tech");
    },
    toggleBar() {
      this.showMenu = !this.showMenu;
    },
    toggleChess() {
      this.showChess = true;
    },
    toggleRubiks() {
      this.showRubiks = true;
    },
    menuClickOut() {
      this.showMenu = false;
    },
    chessClickOut() {
      this.showChess = false;
    },
    rubiksClickOut() {
      this.showRubiks = false;
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  beforeUnmount() {
    clearInterval(this.intervalTime);
    clearInterval(this.intervalDate);
  },
  created() {
    this.intervalTime = setInterval(() => {
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
      }).format()
    }, 1000)

    this.intervalDate = setInterval(() => {
      this.date = Intl.DateTimeFormat(navigator.language, {
        month: 'short',
        day: "numeric",
        year: "numeric"
      }).format()
    }, 1000)
    
  },
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
  background-color: purple;
  color: white;
  text-align: center;
  height: 50px;
  border-top: 1px solid rgb(75, 1, 75);

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

.desktop-app-click {
  background-color:rgba(125, 165, 250,0.5);
  border: 1px solid rgb(125, 165, 250);
  box-sizing: border-box;
}

.start {
  height: 50px;
  width: 60px;
  position: relative;
  float: left;
  border-right: 1px solid rgb(75, 1, 75);
}

.dropup-content {
  display: block;
  position: absolute;
  height: 400px;
  width: 300px;
  bottom: 50px;
  background-color: rgb(181, 1, 181);
  z-index: 1;
}


.start:hover {
  background-color: rgb(181, 1, 181);
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
  line-height: 25px;
  border-left: 1px solid rgb(75, 1, 75);
}

.time:hover {
  background-color: rgb(181, 1, 181);
}

</style>
