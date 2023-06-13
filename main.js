document.addEventListener("scroll", showScrollDiv);

function showScrollDiv() {
  var scrollDivs = document.querySelectorAll(".scrollDiv");

  scrollDivs.forEach(function(div) {
    if (window.pageYOffset > 100) {
      div.classList.add("show");
    } 
  });
}