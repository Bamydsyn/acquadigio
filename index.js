// SIDEBAR TOGGLE ON AND OFF

const sidebarToggle = document.getElementById("navToggle");
const sidebar = document.getElementById("sideBar");

sidebarToggle.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});
