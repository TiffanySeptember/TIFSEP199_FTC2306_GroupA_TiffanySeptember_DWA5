// scripts.js
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (!dividend || !divider) {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  if (isNaN(dividend) || isNaN(divider)) {
    result.innerText = "Something critical went wrong. Please reload the page";
    console.error("Invalid input. Non-numeric values provided.");
    return;
  }

  if (divider == 0) {
    result.innerText =
      "Division not performed. Division by zero is not allowed. Try again";
    console.error("Division by zero attempted.");
    return;
  }

  const divisionResult = dividend / divider;

  if (Number.isInteger(divisionResult)) {
    result.innerText = divisionResult;
  } else {
    result.innerText = `${Math.floor(divisionResult)} with no decimal`;
  }
});
