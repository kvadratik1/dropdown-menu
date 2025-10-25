const dropBtn = document.querySelector(".drop-btn");
const dropdownContent = document.querySelector(".dropdown-content");

dropBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});
