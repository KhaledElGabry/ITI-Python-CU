function getLocation() {
     if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showMap);
     } else {
          alert("Geolocation is not supported by this browser.");
     }
}

function redirectToShoppingPage() {
     window.location.href = "../html/index.html";
}

var backToTopBtn = document.getElementById("backToTopBtn");
window.addEventListener("scroll", function () {
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          backToTopBtn.style.display = "block";
     } else {
          backToTopBtn.style.display = "none";
     }
});

backToTopBtn.addEventListener("click", function () {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
});
