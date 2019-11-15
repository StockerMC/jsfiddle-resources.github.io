function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen(); 
    }
  }
}

let downKeys = {}; // the set of keys currently down
document.addEventListener('keydown', event => {
    downKeys[event.keyCode] = true;
    if (downKeys[18] && downKeys[83]) {
       toggleFullScreen();
    }
});
document.addEventListener('keyup', event => {
    downKeys[event.keyCode] = false;
});

/*Alternative Code

let holdKeyUp = false;
let holdKeyRight = false;

document.addEventListener('keydown', event => {

    if (event.keyCode === 38) {
        holdKeyUp = true;
    }

    if (event.keyCode === 39) {
        holdKeyRight = true;
    }
    
    if (holdKeyUp && holdKeyRight) {
        console.log("Both keys are pressed.");
    }

})

document.addEventListener('keyup', event => {

    if (event.keyCode === 38) {
        holdKeyUp = false;
    }

    if (event.keyCode === 39) {
        holdKeyRight = false;
    }

});
*/
