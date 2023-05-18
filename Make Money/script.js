let counter = 0;

function addNickel(number) {
  for (let i = 1; i <= number; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList = "nickel";
    newCoin.innerHTML = "nickel";
    counter += 5;
    document.getElementById("coinSpot").append(newCoin);
    newCoin.addEventListener("click", (event) => {
      newCoin.remove();
      counter -= 5;
      document.getElementById(
        "counter"
      ).innerHTML = `You have ${counter} cents.`;
    });
  }
}

function addDime(number) {
  for (let i = 1; i <= number; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList = "dime";
    newCoin.innerHTML = "dime";
    counter += 10;
    document.getElementById("coinSpot").append(newCoin);
    newCoin.addEventListener("click", (event) => {
      newCoin.remove();
      counter -= 10;
      document.getElementById(
        "counter"
      ).innerHTML = `You have ${counter} cents.`;
    });
  }
}

function addPenny(number) {
  for (let i = 1; i <= number; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList = "penny";
    newCoin.innerHTML = "penny";
    counter += 1;
    document.getElementById("coinSpot").append(newCoin);
    newCoin.addEventListener("click", (event) => {
      newCoin.remove();
      counter -= 1;
      document.getElementById(
        "counter"
      ).innerHTML = `You have ${counter} cents.`;
    });
  }
}

function addQuarter(number) {
  for (let i = 1; i <= number; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList = "quarter";
    newCoin.innerHTML = "quarter";
    counter += 25;
    document.getElementById("coinSpot").append(newCoin);
    newCoin.addEventListener("click", (event) => {
      newCoin.remove();
      counter -= 25;
      document.getElementById(
        "counter"
      ).innerHTML = `You have ${counter} cents.`;
    });
  }
}

document.getElementById("moneyForm").addEventListener("submit", (event) => {
  //when working with forms prevent the default behavior
  event.preventDefault();
  const quantity = document.getElementById("quantity").value;
  const type = document.getElementById("coins").value;
  if (type === "Penny") {
    addPenny(quantity);
  } else if (type === "Nickel") {
    addNickel(quantity);
  } else if (type === "Dime") {
    addDime(quantity);
  } else if (type === "Quarter") {
    addQuarter(quantity);
  }
  document.getElementById("counter").innerHTML = `You have ${counter} cents.`;
});
