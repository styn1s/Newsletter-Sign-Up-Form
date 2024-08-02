const form = document.querySelector("form");
const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("error-text");

emailInput.addEventListener("input", (event) => {
  if (emailInput.validity.typeMismatch) {
    showError();
  } else {
    hideError();
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const formData = new FormData(this);

  // Convert form data to JS object
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Convert object to JSON string
  const jsonData = JSON.stringify(data);

  // Store data in localStorage
  localStorage.setItem("formData", jsonData);

  // Submit the form
  this.submit();
});

window.addEventListener("resize", function () {
  if (window.innerWidth <= 625) {
    document.querySelector("img").src =
      "./assets/images/illustration-sign-up-mobile.svg";
  } else {
    document.querySelector("img").src =
      "./assets/images/illustration-sign-up-desktop.svg";
  }
});

function showError() {
  emailError.textContent = "Valid email required!";
  emailInput.style.borderColor = "rgba(255,85,114,255)";
  emailInput.style.color = "rgba(255,85,114,255)";
  emailInput.style.backgroundColor = "rgba(255,85,114,0.1)";
}

function hideError() {
  emailError.textContent = "";
  emailInput.style.borderColor = "lightgray";
  emailInput.style.color = "black";
  emailInput.style.backgroundColor = "white";
}
