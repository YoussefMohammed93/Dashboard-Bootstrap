// Sidebar + Sidebar Icon
const barsIcon = document.querySelector(".bars-icon");
const sidebar = document.querySelector(".sidebar");

barsIcon.addEventListener("click", function () {
  const isSidebarHidden =
    sidebar.style.width === "0px" || sidebar.style.width === "";
  if (isSidebarHidden) {
    sidebar.style.width = "225px"; // Open Sidebar To 225px
  } else {
    sidebar.style.width = "0px"; // Close Sidebar
  }
});

// Scroll To Top Button //
let scrollToTopBtn = document.querySelector(".scrollToTop");

window.onscroll = function () {
  if (this.scrollY >= 200) {
    scrollToTopBtn.classList.add("showBtn");
  } else {
    scrollToTopBtn.classList.remove("showBtn");
  }
};

scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
