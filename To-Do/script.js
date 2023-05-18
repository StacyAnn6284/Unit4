document.getElementById("taskForm").addEventListener("submit", (event) => {
  //when working with forms prevent the default behavior
  event.preventDefault();
  const data = new FormData(event.target);
  const task = data.get("task");
  if (task !== "") {
    createTodoItem(task);
  }
  document.getElementById("task").value = "";
});

function createTodoItem(title) {
  const newItem = document.createElement("li");

  const newInput = document.createElement("input");
  newInput.type = "button";
  newInput.value = "remove";

  newItem.innerHTML = `<h3>${title}</h3>`;

  newItem.append(newInput);
  //   newItem.addEventListener("mouseover", (event) => {
  //     console.log(event.target);
  //     if (event.target.tagName === "LI") {
  //       event.target.classList.add("outline");
  //     }
  //   });

  newItem.addEventListener("click", (event) => {
    console.log(event.target);
    console.log("here");
  });

  newInput.addEventListener("click", () => {
    newItem.remove();
  });

  document.getElementById("container").append(newItem);
}

let i = 0;

const createButton = document.querySelector(".create-btn");

// createButton.addEventListener("click", (event) => {
//   console.log(event);
//   createTodoItem("Clean room" + i);
// });

const container = document.getElementById("container");
container.addEventListener("click", (event) => {
  //   console.log(event.target);
  const outlinedItems = document.querySelectorAll("li.outline");

  for (const item of outlinedItems) {
    item.classList.remove("outline");
  }

  if (event.target.tagName === "LI") {
    event.target.classList.add("outline");
  } else if (event.target.parentNode.tagName === "LI") {
    event.target.parentNode.classList.add("outline");
  }
});
