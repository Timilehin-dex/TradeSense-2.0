window.addEventListener("scroll", function () {
  const header = document.getElementById("head");
  if (window.scrollY > 30) {
    // You can adjust the scroll threshold as needed
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});
// window.addEventListener("scroll", function () {
//   var element = document.getElementById("element");
//   // Change the background color based on scroll position
//   if (window.scrollY > 100) {
//     element.style.backgroundColor = "red";
//   } else {
//     element.style.backgroundColor = "blue";
//   }
// });
window.addEventListener("scroll", function () {
  var elements = document.querySelectorAll("header");
  // Loop through each element with the class and apply changes
  elements.forEach(function (element) {
    if (window.scrollY > 30) {
      element.style.padding = "15px 0px";
    } else {
      element.style.padding = "30px 0px";
    }
  });
});
// function toggleDiv() {
//   var div = document.getElementById('myDiv');
//   // Check if the div is currently visible or hidden
//   if (div.style.display === 'none') {
//     // If it's hidden, show it
//     div.style.display = 'block';
//   } else {
//     // If it's visible, hide it
//     div.style.display = 'none';
//   }
// }
function toggleDiv() {
  const menu = document.querySelector(".menu-list");
  menu.style.display = "flex";
  const open = document.querySelector(".menu-open");
  open.style.display = "none";
}
function toggleClose() {
  const menu = document.querySelector(".menu-list");
  menu.style.display = "none";
  const open = document.querySelector(".menu-open");
  open.style.display = "block";
}
