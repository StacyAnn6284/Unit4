//go back and look at position absolute (how to position menu and letters/numbers)
//toggle classes on off : display none
//main objective is click listener
//use anchor (a) tags

//popUp change display to flex to show it

document.getElementById("menu").addEventListener("click", (event) => {
  //when working with forms prevent the default behavior
  event.preventDefault();
  document.getElementById("popUp").style.opacity = 1;
});

document.getElementById("numberSelector").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("numbers").style.display = "flex";
  document.getElementById("letters").style.display = "none";
  document.getElementById("popUp").style.opacity = 0;
});

document.getElementById("letterSelector").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("numbers").style.display = "none";
  document.getElementById("letters").style.display = "flex";
  document.getElementById("popUp").style.opacity = 0;
});
