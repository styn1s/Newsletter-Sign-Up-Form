const form = document.querySelector("form");
const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("error-text");

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

function updateImg() {
  const imgElement = document.querySelector("img");
  if (window.innerWidth <= 625) {
    imgElement.src = "./assets/images/illustration-sign-up-mobile.svg";
  } else {
    imgElement.src = "./assets/images/illustration-sign-up-desktop.svg";
  }
}

function onSubmitForm(event) {
  // Prevent default form submission
  event.preventDefault();

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
}

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("resize", updateImg);
  form.addEventListener("submit", onSubmitForm);
  emailInput.addEventListener("input", (event) => {
    if (emailInput.validity.typeMismatch) {
      showError();
    } else {
      hideError();
    }
  });
})