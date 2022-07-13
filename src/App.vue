<template>
  <div class="desktop-app" @click="toggleChess" @dblclick="openChess" :class='{ "desktop-app-click": showChess }' v-click-outside="chessClickOut" ondragstart="return false" ondrop="return false">
    <img src="../public/learn-chess.png">
    <h2>Learn Chess</h2>
  </div>
  <!--
  <div class="desktop-app"  @click="toggleRubiks" @dblclick="openRubiks" :class='{ "desktop-app-click": showRubiks }' v-click-outside="rubiksClickOut" ondragstart="return false" ondrop="return false">
    <img src="../public/rubiks-algo.png">
    <h2>Rubiks Algo</h2>
  </div>
  -->

  <div v-show='windowState == "Open"' class="window animate__fadeInUp" :class='{ "window-full": windowSize == "Full" }' ref="draggableContainer" id="draggable-container">
    <div @mousedown="resizeWindow($event, 'ne')" class="window-resizer ne"></div>
    <div @mousedown="resizeWindow($event, 'nw')" class="window-resizer nw"></div>
    <div @mousedown="resizeWindow($event, 'sw')" class="window-resizer sw"></div>
    <div @mousedown="resizeWindow($event, 'se')" class="window-resizer se"></div>
    <div class="window-menu">
      <div class="window-menu-top" id="draggable-header" @mousedown="dragMouseDown" @dblclick="windowSizing">
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
        <div class="window-text-header">
          About Me
        </div> 
        <div class="window-image">
          <img class="window-image-me" src="../public/me.jpg">
        </div>
        <div class="window-text">
          <ul class="window-align-list">
            <li>👋 Hi, I’m Zeshan</li>
            <li>🗺️ I live in Toronto, Ontario</li>
            <li>🏫 I'm a Mechanical Engineering student at the University of Waterloo</li>
            <li>📚 I will be entering my 3rd year in January 2023</li>
            <li>💼 I am currently working at AutoVerify as a Software Developer</li>
            <li>🌱 I am currently learning Object Oriented Programming</li>
            <li>📫 I can be contacted at <a href="mailto:z22qures@gmail.com?subject=Hello!" target="_blank">z22qures@gmail.com</a></li>
          </ul>
        </div>

        <div class="window-text">
          <ul class="window-align-list">
            <li>LinkedIn: <a href="https://www.linkedin.com/in/zeshanq/" target="_blank">LinkedIn.com/in/ZeshanQ</a></li>
            <li>GitHub: <a href="https://github.com/ZeshanQureshi" target="_blank">GitHub.com/ZeshanQureshi</a></li>
          </ul> 
        </div>
      </div>
      <div v-else-if="fileName == 'Experience.txt'">
        <div class="window-text-header">
          Experience
        </div>
        <div class="window-experience-block">
          <div class="window-experience-header"><b>Software Developer</b></div>
          <div class="window-experience-time">May 2022 - Current</div>
          <div class="window-experience-header">AutoVerify</div>
          <div class="window-experience-time">London, Ontario</div>
          <ul class="experience-list">
            <li>Designed and implemented an Image Processing program in Python to extract and store image metadata</li>
            <li>Performed routine back-end testing using PHPUnit to increase code converage by over 17 percent</li>
            <li>Developed REST API using Node.js and MySQL to manage dealership data and improve retrieval time by 7 percent</li>
          </ul>
        </div>
        <div class="window-experience-block">
          <div class="window-experience-header"><b>Full Stack Developer</b></div>
          <div class="window-experience-time">Jan 2022 - May 2022</div>
          <div class="window-experience-header">Caribou Contests</div>
          <div class="window-experience-time">St Catharines, Ontario</div>
          <ul class="experience-list">
            <li>Maintained phpMyAdmin account information database and set up an SQL index to reduce data retrieval time</li>
            <li>Successfully set up and validated an eCommerce web page with PayPal integration to automate licensing purchases</li>
            <li>Fixed bugs on existing web pages and implemented user interface enhancements that increased click-through rate</li>
          </ul>
        </div>
        <div class="window-experience-block">
          <div class="window-experience-header"><b>Systems Design Engineer</b></div>
          <div class="window-experience-time">May 2021 - Sep 2021</div>
          <div class="window-experience-header">Toyota Motor Manufacturing Canada</div>
          <div class="window-experience-time">Cambridge, Ontario</div>
          <ul class="experience-list">
            <li>Optimized path layout for Automatic Guided Vehicles using root cause analysis to reduce delivery times by 18 percent</li>
            <li>Developed pressure monitoring program for sealer sensors using Toyopuc PLC to reduce material usage by 4 percent</li>
          </ul>
        </div>
        <div class="window-experience-block">
          <div class="window-experience-header"><b>Teaching Assistant</b></div>
          <div class="window-experience-time">Sep 2020 - Dec 2020</div>
          <div class="window-experience-header">University of Waterloo</div>
          <div class="window-experience-time">Waterloo, Ontario</div>
          <ul class="experience-list">
            <li>Collaborated with professors and fellow teaching assistants to deliver more than 80 virtual lectures and tutorials</li>
          </ul>
        </div>
        <div class="window-experience-block">
          <div class="window-experience-header"><b>Database Developer</b></div>
          <div class="window-experience-time">Jan 2020 - May 2020</div>
          <div class="window-experience-header">University of Waterloo</div>
          <div class="window-experience-time">Waterloo, Ontario</div>
          <ul class="experience-list">
            <li>Created and populated tables in a Microsoft Access database to store more than 300 employee records</li>
            <li>Developed 12 SQL queries that filter and display employee records to reduce fetching time by 80 percent</li>
          </ul>
        </div>
      </div>
      <div v-else-if="fileName == 'Projects.txt'">
        <div class="window-text-header">
          Projects
        </div>
        <div class="window-experience-block">
          <div class="window-image">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zWz1zb5ZZ9g?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="window-image">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/KePRS9G74m4?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="window-projects-header" ><b>Learn Chess</b> | HTML, CSS, JavaScript, Vue.js, Node.js</div>
          <div class="window-projects-header"><a href="https://learnchess.me" target="_blank">LearnChess.me</a></div>
          <ul class="experience-list">
            <li>A multi-page site to learn chess and purchase chess sets developed with HTML, CSS, Vue.js, and Node.js</li>
            <li>Maintained a responsive web design and implemented smooth page animations to enchance the user experience </li>
            <li>Checkout page authenticates credit cards via Stripe API and account information is handled by Google Firebase</li>
          </ul>
        </div>
        <div class="window-experience-block">
          <div class="window-image">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BTnPpAaOpI4?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="window-projects-header"><b>Daily Crossword</b> | HTML, CSS, JavaScript</div>
          <div class="window-projects-header"><a href="https://zeshanqureshi.github.io/daily-crossword/" target="_blank">ZeshanQureshi.GitHub.io/Daily-Crossword</a></div>
          <ul class="experience-list">
            <li>Designed a single-page crossword puzzle using HTML5 and CSS3 with JavaScript functionality</li>
            <li>Maintained a responsive web design by using HTML grid layout to improve the user interface</li>
            <li>Developed an interactive crossword puzzle by writing multiple JavaScript functions to improve user experience</li>
          </ul>
        </div>
        <div class="window-experience-block">
          <div class="window-image">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gaM1Fq9zVsw?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="window-projects-header"><b>Sketch Board</b> | HTML, CSS, JavaScript</div>
          <div class="window-projects-header"><a href="https://zeshanqureshi.github.io/sketch-board/" target="_blank">ZeshanQureshi.GitHub.io/Sketch-Board</a></div>
          <ul class="experience-list">
            <li>Designed a single-page dynamic sketch board using HTML5 and CSS3 with JavaScript functionality</li>
            <li>Wrote code using JavaScript Document Object Model (DOM) manipulation to create smooth drawing animations</li>
            <li>Utilized multiple JavaScript functions to create game features that enhanced the user interface</li>
          </ul>
        </div>
        <div class="window-experience-block">
          <div class="window-image">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vF5Xn58rdIo?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="window-projects-header"><b>Online Calculator</b> | HTML, CSS, JavaScript</div>
          <div class="window-projects-header"><a href="https://zeshanqureshi.github.io/online-calculator/" target="_blank">ZeshanQureshi.GitHub.io/Online-Calculator</a></div>
          <ul class="experience-list">
            <li>Designed a single-page calculator using HTML5 and CSS3 with JavaScript functionality</li>
            <li>Wrote code using JavaScript Document Object Model (DOM) manipulation to create responsive buttons</li>
            <li>Wrote multiple JavaScript functions to ensure correct computational logic was followed </li>
          </ul>
        </div>
      </div>
      <div v-else-if="fileName == 'Skills.txt'">
        <div class="window-text-header">
          Skills
        </div>
        <div class="window-text">
          <ul class="window-align-list">
            <li><b>Languages</b>: HTML, CSS, JavaScript, SQL, PHP, Python, C++</li>
            <li><b>Frameworks</b>: Vue.js, Node.js (Express), PHPUnit</li>
            <li><b>Developer Tools</b>: Git, AWS, Docker, phpMyAdmin, Jira</li>
          </ul>
        </div>
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
      },
      sizeX: undefined,
      sizeY: undefined,
      sizing: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0
      },
      dragSide: undefined
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
        this.sizeX = document.getElementById('draggable-container').offsetWidth;
        this.sizeY = document.getElementById('draggable-container').offsetHeight;
        this.saveY = this.$refs.draggableContainer.style.top;
        this.saveX = this.$refs.draggableContainer.style.left;
        this.windowSize = "Full"
        this.$refs.draggableContainer.style.top = "0px";
        this.$refs.draggableContainer.style.left = "0px";
        document.getElementById('draggable-container').style.width = screen.width + 'px';
        document.getElementById('draggable-container').style.height = (screen.height - 50) + 'px';
      } else {
        this.windowSize = "Window"
        this.$refs.draggableContainer.style.top = this.saveY;
        this.$refs.draggableContainer.style.left = this.saveX;
        document.getElementById('draggable-container').style.width = this.sizeX + 'px';
        document.getElementById('draggable-container').style.height = this.sizeY + 'px';
      }
    },
    closeOS() {
      close();
    },
    dragMouseDown: function (event) {
      if (this.windowSize != "Full") {
        event.preventDefault()
        //get the mouse cursor position at startup:
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
        if ((this.$refs.draggableContainer.offsetTop - this.positions.movementY) > 0 && (this.$refs.draggableContainer.offsetTop - this.positions.movementY + document.getElementById('draggable-container').offsetHeight ) < (window.innerHeight - 50)) {
          this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'   
        } 
        
        if ((this.$refs.draggableContainer.offsetLeft - this.positions.movementX) > 0 && (this.$refs.draggableContainer.offsetLeft - this.positions.movementX + document.getElementById('draggable-container').offsetWidth) < window.innerWidth) {
          this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'
        }
      } 
    },
    closeDragElement () {
      if (this.windowSize != "Full") {
        document.onmouseup = null
        document.onmousemove = null
      }
    },
    resizeWindow: function (event, type)  {
      if (this.windowSize != "Full") {
        event.preventDefault()
        //get the mouse cursor position at startup:
        this.sizing.clientX = event.clientX;
        this.sizing.clientY = event.clientY;
        document.onmousemove = this.elementResize;
        document.onmouseup = this.closeDragElement;
        this.dragSide = type;
      }
    },
    elementResize: function (event) {
      event.preventDefault()
      if (this.windowSize != "Full") {
        this.sizing.movementX = this.sizing.clientX - event.clientX
        this.sizing.movementY = this.sizing.clientY - event.clientY
        this.sizing.clientX = event.clientX
        this.sizing.clientY = event.clientY
        let currentWidth = document.getElementById('draggable-container').offsetWidth
        let currentHeight = document.getElementById('draggable-container').offsetHeight
        // set the element's new size:
        if (this.dragSide == "se") {
          document.getElementById('draggable-container').style.width = (currentWidth - this.sizing.movementX) + 'px'  
          document.getElementById('draggable-container').style.height = (currentHeight - this.sizing.movementY) + 'px'
        } else if (this.dragSide == "ne") {
          this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.sizing.movementY) + 'px'
          document.getElementById('draggable-container').style.width = (currentWidth - this.sizing.movementX) + 'px'  
          document.getElementById('draggable-container').style.height = (currentHeight + this.sizing.movementY) + 'px'
        } else if (this.dragSide == "sw") {
          this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.sizing.movementX) + 'px'
          document.getElementById('draggable-container').style.width = (currentWidth + this.sizing.movementX) + 'px'  
          document.getElementById('draggable-container').style.height = (currentHeight - this.sizing.movementY) + 'px'
        } else if (this.dragSide == "nw") {
          this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.sizing.movementY) + 'px'
          this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.sizing.movementX) + 'px'
          document.getElementById('draggable-container').style.width = (currentWidth + this.sizing.movementX) + 'px'  
          document.getElementById('draggable-container').style.height = (currentHeight + this.sizing.movementY) + 'px'
        }
      } 
    },
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
  background-image: url("../public/background.jpg");
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
  background-color: skyblue;
  color: white;
  text-align: center;
  height: 50px;
  border-top: 1px solid rgb(101, 172, 200);

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
  background-color: rgb(101, 172, 200);
}

ul {
  list-style-type: square;
}

.window-close:hover {
  background-color: red;
}

.window {
  height: 50%;
  width: 50%;
  border: 1px solid skyblue; 
  background-color: skyblue;
  position: absolute;
  top: 25%;
  left: 25%;
  box-sizing: border-box;
  -moz-box-shadow: 0 0 3px black;
  -webkit-box-shadow: 0 0 3px black;
  box-shadow: 0 0 3px black;
  z-index: 2;
}

.window-resizer {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  z-index: 100;
}

.nw {
  top: -1px;
  left: -1px;
  cursor: nw-resize;
}

.ne {
  top: -1px;
  right: -1px;
  cursor: ne-resize;
}

.sw {
  bottom: -1px;
  left: -1px;
  cursor: sw-resize;
}

.se {
  bottom: -1px;
  right: -1px;
  cursor: se-resize;
}

.window-text-header {
  width: 100%;
  line-height: 50px;
  text-align: center;
}

.window-image {
  width: 100%;
  padding: 0 40px 0 40px;
  box-sizing: border-box;
}

.window-text {
  margin-top: 30px;
  width: 100%;
  text-align: center;
}

.window-image-me {
  max-height: 400px;
  max-width: 400px;

  display: block;
  margin-left: auto;
  margin-right: auto;
}

.window-align-list {
  display: inline-block;
  text-align: left;
}

.window-full {
  height: calc(100vh - 50px);
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
  background-color: skyblue;
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
  text-overflow: "----"; 
  white-space: nowrap; 
  overflow: hidden;
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

.window-experience-block {
  padding: 0 0 20px 0;
}

.window-experience-header {
  width: 50%;
  float: left;
  text-align: left;
}

.window-experience-time {
  width: 50%;
  float: left;
  text-align: right;
}

.experience-list {
  margin-left: 0.75em;
  text-align: left;
  padding-left: 5px;
}

.window-projects-header {
  width: 100%;
}

.window-project-block {
  padding: 0 0 60px 0;
}

iframe {
  max-height: 80%;
  max-width: 80%;

  display: block;
  margin-left: auto;
  margin-right: auto;
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
  border-right: 1px solid rgb(101, 172, 200);
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
  background-color: rgb(101, 172, 200);
}

.start-tabs-open {
  border-bottom: 5px solid rgb(101, 172, 200);
  background-color: rgb(186, 223, 238);
}

.start-tabs-minimized {
  border-bottom: 5px solid rgb(101, 172, 200);
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
  background-color: rgb(101, 172, 200);
  border: 1px solid rgb(101, 172, 200);
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
  background-color: rgb(159, 217, 240);
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
  background-color: rgb(159, 217, 240);
}

.power-img {
  width: 30px;
  height: 30px;
  margin-top: 15px;
}

.start:hover {
  background-color: rgb(101, 172, 200);
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
  border-left: 1px solid rgb(101, 172, 200);
}

.time:hover {
  background-color: rgb(101, 172, 200);
}

@media only screen and (max-width: 600px) {
  
}

</style>
