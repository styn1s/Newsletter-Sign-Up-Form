// Retrieve data from localStorage
const storedData = localStorage.getItem("formData");

if (storedData) {
  try {
    // Parse JSON string to JS object
    const data = JSON.parse(storedData);

    // Check if the email element exists
    const emailSpan = document.getElementById("email");
    if (emailSpan && data.email) {
      // Display data on the success page
      emailSpan.textContent = data.email;
    } else {
      console.error("Email element not found or email data is missing.");
    }
  } catch (error) {
    console.error("Failed to parse JSON from localStorage:", error);
  }
} else {
  console.warn("No form data found in localStorage.");
}
