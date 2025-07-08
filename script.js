const navBar = document.getElementById("nav-bar")

const homeButton = document.getElementById("home-button");
const projectButton = document.getElementById("projects-button");
const aboutButton = document.getElementById("about-button");

function openTab(tabName) {
  const tabs = document.querySelectorAll(".tab");
  const tablink = document.querySelectorAll(".tablink");
  tabs.forEach((tab) => tab.classList.remove("active"));
  tablink.forEach((btn) => btn.classList.remove("active"));
  document.getElementById(tabName).classList.add("active");
  if (tabName == "home") {
    homeButton.classList.add("active");
  } else if (tabName == "projects") {
    projectButton.classList.add("active");
  } else if (tabName == "about") {
    aboutButton.classList.add("active");
  }
}

function changeLanguage() {
  if (document.getElementById("eng")) {
    window.location.href = "indexde.html";
  } else if (document.getElementById("de")) {
    window.location.href = "index.html";
  }
}

navBar.addEventListener("click", (e) => {
  const target = e.target.closest(".tablink");
  if (!target) return;
  e.preventDefault();
  const tabId = target.id.replace("-button", "");
  openTab(tabId);
});