// Create a function named “main”. The HTML is already set up to call this function when the “Action!!!” button is clicked.
function main() {
  // Add the "big" class to the "grow-me" paragraph.
  document.getElementById("grow-me").classList.add("big");

  // Remove the "big" class from the "shrink-me" paragraph.
  document.getElementById("shrink-me").classList.remove("big");

  // Find all the <li>s and log their text content to the console.
  let LiItems = document.querySelector("ol").innerText;
  //   let LiItems = document.getElementById("list").innerText;
  console.log(LiItems);

  // Set the href of the link to "https://www.example.com" and update the text to say "somewhere" instead of "nowhere".

  document
    .querySelector(".link")
    .setAttribute("href", "https://www.example.com");
  document.querySelector(".link").innerText = "somewhere";

  // Set the "display" CSS property of the "hide-me" paragraph to "none".
  document.getElementById("hide-me").style.display = "none";
  // Set the "display" CSS property of the "show-me" paragraph to "block".
  document.getElementById("show-me").style.display = "block";
  // Get the text that the user enters into the "name" input box and use it to set a welcome message in the <h1>,
  //    e.g., "Welcome Grant!".
  let greetingName = document.getElementById("name").value;
  document.querySelector("h1").innerText = `Welcome, ${greetingName}`;
}
