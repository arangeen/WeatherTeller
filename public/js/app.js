console.log("Client side javascript side is loaded");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
//targeting id="message-1". To target class name, start with "."
const messageOne = document.querySelector("#message-1");

const messageTwo = document.querySelector("#message-2");
/**
 * Goal: Render content to paragraphs
 *  1. select the second message p from javascript
 *  2. just before fetch, render loading message and empty p
 *  3. if error, render error
 *  4. no error, render location and forecast
 */

// first argument is name of event we want to listen to
// funtion will run everytime form is submitted
weatherForm.addEventListener("submit", event => {
  // browser wont refresh eveytime you submit the form
  event.preventDefault();

  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch("http://localhost:3000/weather?address=" + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
