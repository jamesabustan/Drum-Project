let numberOfDrumButtons = document.querySelectorAll(".drum").length;

// loop through each button and target inner hmtl to activate method
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    // Detects button pressed 
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

}

// enable keypress on keyboards
document.addEventListener("keydown", (e) => {
  makeSound(e.key);
  buttonAnimation(e.key);
});

// function to enable sound when button is clicked / key is pressed 
// Detects keyboard press
makeSound= (key) => {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      let kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default: console.log(key);

  }
}

buttonAnimation= (currentKey) => {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}