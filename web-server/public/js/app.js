// const { response } = require("express");

console.log("javascript from client side");
// fetch("https://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log("response", data);
//   });
// });

// console.log("2");

const weatherForm = document.querySelector("form");
const searchElement = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loc = searchElement.value;
  messageOne.textContent = "loading...";
  messageTwo.textContent = " ";
  fetch("/weather?address=" + loc).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
        // messageTwo.textContent = "";
      } else {
        console.log("data", data);
        messageOne.textContent = data.location;
        messageTwo.textContent = data.temperature;
        console.log("messageOne11", messageOne.textContent);
      }
    });
  });
});
