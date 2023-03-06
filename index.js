const toggleButton = document.getElementById("toggle");

toggleButton.addEventListener("click", function changeMode() {
  document.body.classList.toggle("dark-theme");
});
