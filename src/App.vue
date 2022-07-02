<template>
  <div class="desktop-app" @click="toggleChess" @dblclick="openChess" :class='{ "desktop-app-click": showChess }' v-click-outside="chessClickOut" ondragstart="return false" ondrop="return false">
    <img src="../public/learn-chess.png">
    <h2>Learn Chess</h2>
  </div>
  <div class="desktop-app"  @click="toggleRubiks" @dblclick="openRubiks" :class='{ "desktop-app-click": showRubiks }' v-click-outside="rubiksClickOut" ondragstart="return false" ondrop="return false">
    <img src="../public/rubiks-algo.png">
    <h2>Rubiks Algo</h2>
  </div>

  <div v-if='windowState == "Open"' class="window animate__fadeInUp" :class='{ "window-full": windowSize == "Full" }' ref="draggableContainer" id="draggable-container">
    <div class="window-menu">
      <div class="window-menu-top" id="draggable-header" @mousedown="dragMouseDown">
        <h2 class="window-tag">{{ fileName }}</h2>
        <h6 class="window-close" @click="closeWindow">×</h6>
        <h6 @click="windowSizing">❑</h6>
        <h6 @click="minimizeWindow">−</h6>
      </div>
      <div class="window-menu-content">
        <div class="window-menu-content-label" :class='{ "window-active-tab": fileName == "AboutMe.txt" }' @click="changeText('AboutMe.txt')">AboutMe.txt</div>
        <div class="window-menu-content-label" :class='{ "window-active-tab": fileName == "Experience.txt" }' @click="changeText('Experience.txt')">Experience.txt</div>
        <div class="window-menu-content-label" :class='{ "window-active-tab": fileName == "Projects.txt" }' @click="changeText('Projects.txt')">Projects.txt</div>
        <div class="window-menu-content-label" :class='{ "window-active-tab": fileName == "Skills.txt" }' @click="changeText('Skills.txt')">Skills.txt</div>
      </div>
    </div>
    <div class="window-content">
      <div v-if="fileName == 'AboutMe.txt'">
        Hello My name is Zeshan Qureshi
       
      </div>
      <div v-else-if="fileName == 'Experience.txt'">
        Experience
      </div>
      <div v-else-if="fileName == 'Projects.txt'">
        Projects
      </div>
      <div v-else-if="fileName == 'Skills.txt'">
        Skills
      </div>
    </div>
  </div>

  <footer>
    <div class="start" @click="toggleBar" ondragstart="return false" ondrop="return false">
      <img class="os" src="../public/os.png">
    </div>

    <div v-if="showMenu" class="dropup-content" 
    data-aos="fade-right" v-click-outside="menuClickOut" >
      <div class="start-icon">
        <div class="start-power" ondragstart="return false" ondrop="return false" @click="closeOS">
          <img class="power-img" src="../public/power.png">
        </div>
      </div>

      <div class="start-application">
        <div class="start-label"><h5>A</h5></div>
        <div class="start-app"  @click="displayWindow('AboutMe.txt')" ondragstart="return false" ondrop="return false">
          <img class="start-app-icon" src="../public/notepad.png">
          <h4>AboutMe.txt</h4>
        </div>
        <div class="start-label"><h5>E</h5></div>
        <div class="start-app" @click="displayWindow('Experience.txt')" ondragstart="return false" ondrop="return false">
          <img class="start-app-icon" src="../public/notepad.png">
          <h4>Experience.txt</h4>
        </div>
        <div class="start-label"><h5>P</h5></div>
        <div class="start-app" @click="displayWindow('Projects.txt')" ondragstart="return false" ondrop="return false">
          <img class="start-app-icon" src="../public/notepad.png">
          <h4>Projects.txt</h4>
        </div>
        <div class="start-label"><h5>S</h5></div>
        <div class="start-app" @click="displayWindow('Skills.txt')" ondragstart="return false" ondrop="return false">
          <img class="start-app-icon" src="../public/notepad.png">
          <h4>Skills.txt</h4>
        </div>
      </div>   
    </div>

    <div class="start-tabs">
      <div class="start-tabs-note" @click="startWindow('AboutMe.txt')" 
      :class='{ "start-tabs-open": windowState == "Open", "start-tabs-minimized": windowState == "Minimized"  }' ondragstart="return false" ondrop="return false">
        <img class="start-tabs-icon" src="../public/notepad.png">
      </div>
    </div>

    <div class="time">
      <h1>{{ time }}</h1>
      <h1>{{ date }}</h1>
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
      windowState: "Close",
      fileName: ".txt",
      windowSize: "Window",
      saveX: undefined,
      saveY: undefined,
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0
      }
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
    },
    displayWindow(tabName) {
      this.showMenu = false;
      this.fileName = tabName;
      this.windowState = "Open";
    },
    closeWindow() {
      this.windowState = "Close";
    },
    minimizeWindow() {
      this.windowState = "Minimized";
    },  
    changeText(tabName) {
      this.fileName = tabName;
    },
    startWindow() {
      if (this.windowState == "Close") {
        this.windowState = "Open";
        this.fileName = "AboutMe.txt";
      } else if (this.windowState == "Minimized") {
        this.windowState = "Open";
      } else {
        this.windowState = "Minimized";
      }
    },
    windowSizing() {
      if(this.windowSize == "Window") {
        this.windowSize = "Full"
        this.saveY = this.$refs.draggableContainer.style.top;
        this.saveX = this.$refs.draggableContainer.style.left;
        this.$refs.draggableContainer.style.top = "0px";
        this.$refs.draggableContainer.style.left = "0px";
      } else {
        this.windowSize = "Window"
        this.$refs.draggableContainer.style.top = this.saveY;
        this.$refs.draggableContainer.style.left = this.saveX;
      }
    },
    closeOS() {
      close();
    },
    dragMouseDown: function (event) {
      if (this.windowSize != "Full") {
        event.preventDefault()
      // get the mouse cursor position at startup:
        this.positions.clientX = event.clientX
        this.positions.clientY = event.clientY
        document.onmousemove = this.elementDrag
        document.onmouseup = this.closeDragElement
      }
    },
    elementDrag: function (event) {
      event.preventDefault()
      if (this.windowSize != "Full") {
        this.positions.movementX = this.positions.clientX - event.clientX
        this.positions.movementY = this.positions.clientY - event.clientY
        this.positions.clientX = event.clientX
        this.positions.clientY = event.clientY
        // set the element's new position:
        this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'
        this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'
      } 
    },
    closeDragElement () {
      if (this.windowSize != "Full") {
        document.onmouseup = null
        document.onmousemove = null
      }
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
  z-index: 100;
}

p {
  white-space: nowrap;
  word-wrap: break-word;
  width: min-content;
}

h2 {
  text-align: center;
  font-weight: normal;
}

h3 {
  font-size: 18px;
  line-height: 100px;
  width: 100%;
}

h4 {
  line-height: 60px;
}

h5 {
  margin-left: 18px;
  line-height: 37px;
}

h6 {
  float: right;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  box-sizing:border-box;
}

h6:hover {
  background-color: blueviolet;
}

.window-close:hover {
  background-color: red;
}

.window {
  height: 50%;
  width: 50%;
  border: 1px solid purple; 
  background-color: purple;
  position: fixed;
  top: 25%;
  left: 25%;
  box-sizing: border-box;
  -moz-box-shadow: 0 0 3px black;
  -webkit-box-shadow: 0 0 3px black;
  box-shadow: 0 0 3px black;
  z-index: 10;
}

.window-full {
  height: 100%;
  width: 100%;
  top: 0%;
  left: 0%;
  border: none;
  position: fixed;
}

.window-tag {
  float: left;
  margin-left: 5px;
}

.window-menu {
  height: 75px;
  width: 100%;
  user-select: none;
}

.window-menu-top {
  height: 25px;
  width: 100%;
  background-color: purple;
  float: left;
  box-sizing:border-box;
}

.window-menu-content-label {
  width: 25%;
  height: 50px;
  float: left;
  text-align: center;
  line-height: 50px;
  box-sizing: border-box;
  background-color: rgb(46, 43, 43);
  border-bottom: 1px black solid;
}

.window-menu-content-label:hover {
  background-color: rgb(60, 57, 57);
}

.window-active-tab {
  background-color: rgb(60, 57, 57);
}

.window-content {
  height: calc(100% - 75px);
  width: 100%;
  background-color: black;
  overflow-y: auto;
  padding: 5px;
  box-sizing:border-box;
  display:inline-block
}

.desktop-app {
  width: 100px;
  height: 120px;
  text-align: center;
  user-select: none;
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

.start-tabs {
  height: 100%;
  width: calc(100% - 182px);
  float: left;
}

.start-tabs-note {
  box-sizing: content-box;
  width: 70px;
  height: 45px;
  margin-left: 5px;
}

.start-tabs-note:hover {
  background-color: rgb(181, 1, 181);
}

.start-tabs-open {
  border-bottom: 5px solid rgb(75, 1, 75);
  background-color: rgb(181, 1, 181);
}

.start-tabs-minimized {
  border-bottom: 5px solid rgb(75, 1, 75);
}

.start-tabs-icon {
  width: 35px;
  height: 35px;
  margin-top: 5px;
}

.dropup-content {
  display: block;
  position: absolute;
  height: 380px;
  width: 300px;
  bottom: 50px;
  background-color: rgb(75, 1, 75);
  border: 1px solid rgb(75, 1, 75);
  border-bottom: none;
  z-index: 1;
}

.start-label {
  width: 100%;
  height: 35px;
  text-align: left;
}

.start-application {
  width: 240px;
  height: 100%;
  float: left;
}

.start-app {
  width: 100%;
  height: 60px;
  text-align: left;
}

.start-app:hover {
  background-color: rgb(181, 1, 181);
}

.start-app-icon {
  height: 30px;
  width: 30px;
  float: left;
  margin-top: 13px;
  padding: 0 10px 0 10px;
}

.start-icon {
  width: 60px;
  height: 100%;
  float: left;
  display: flex;
  box-sizing: border-box;
}

.start-power {
  display: inline-block;
  align-self: flex-end;
  width: 60px;
  height: 60px;
  margin: 0;
}

.start-power:hover {
  background-color: rgb(181, 1, 181);
}

.power-img {
  width: 30px;
  height: 30px;
  margin-top: 15px;
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
  width: 120px;
  float: left;
  text-align: center;
  line-height: 25px;
  border-left: 1px solid rgb(75, 1, 75);
}

.time:hover {
  background-color: rgb(181, 1, 181);
}

</style>
