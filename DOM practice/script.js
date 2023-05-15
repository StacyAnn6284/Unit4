//cycle through the rainbow as a background
// setInterval(() => {
//   document.querySelector("body").style.backgroundColor = "red";
//   setTimeout(() => {
//     document.querySelector("body").style.backgroundColor = "blue";
//   }, 500);
//   setTimeout(() => {
//     document.querySelector("body").style.backgroundColor = "yellow";
//   }, 1000);
//   setTimeout(() => {
//     document.querySelector("body").style.backgroundColor = "green";
//   }, 1500);
//   setTimeout(() => {
//     document.querySelector("body").style.backgroundColor = "orange";
//   }, 2000);
//   setTimeout(() => {
//     document.querySelector("body").style.backgroundColor = "purple";
//   }, 2500);
// }, 3000);

function createTodoItem(title) {
  const newItem = document.createElement("li");
  const newInput = document.createElement("input");
  newInput.type = "button";
  newInput.value = "Remove";
  newItem.innerHTML = `<h3>${title}</h3>`;
  newItem.append(newInput);

  newInput.addEventListener("click", () => {
    newItem.remove();
  });

  document.getElementById("container").append(newItem);
}

document.querySelector(".create-btn").addEventListener("click", () => {
  createTodoItem("Clean room");
});
