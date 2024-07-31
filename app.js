document.addEventListener("DOMContentLoaded", function () {
  const defaultButton = document.getElementById("btn-daily");
  updateContent("Daily", defaultButton);
});

async function fetchFunctionalities() {
  try {
    const response = await fetch("./assets/functionalities.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return {};
  }
}

async function updateContent(feature, button) {
  const functionalities = await fetchFunctionalities();
  const { title, description, image } = functionalities[feature] || {};

  if (title && description && image) {
    document.getElementById("feature-title").textContent = title;
    document.getElementById("feature-description").textContent = description;
    document.getElementById("feature-image").src = image;
  } else {
    document.getElementById("feature-title").textContent = "Feature not found";
    document.getElementById("feature-description").textContent = "";
    document.getElementById("feature-image").src = "";
  }

  const buttons = document.querySelectorAll(".button-group button");
  buttons.forEach((btn) => btn.classList.remove("selected"));

  button.classList.add("selected");
}

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const notification = document.getElementById("notification");
    notification.classList.remove("hidden");

    setTimeout(function () {
      notification.classList.add("hidden");
    }, 3000);
  });
