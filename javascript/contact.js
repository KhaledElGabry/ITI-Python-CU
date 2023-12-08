var myForm = document.getElementById("contactForm");
myForm.addEventListener('submit', function (event) {
     event.preventDefault();
     console.log("Click");

     var fullName = document.getElementById('fullName');
     var email = document.getElementById('email');
     var phone = document.getElementById('phone');

     if (fullName.value.trim() === '') {
          alert('Full Name is required');
          return;
     } else {
          alert('Full Name Done');
     }

     if (!isValidEmail(email.value)) {
          alert('Invalid Email');
          return;
     } else {
          alert('Valid Email');
     }

     if (!isValidPhone(phone.value)) {
          // setInvalid(phone);
          alert('Invalid Phone. Must be 11 digits.');
          return;
     } else {
          alert('Phone is Done');
     }
     contactForm.submit();

     // Clear the form
     contactForm.reset();

});

function isValidEmail(email) {
     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
}

function isValidPhone(phone) {
     return /^\d{11}$/.test(phone);
}





var backToTopBtn = document.getElementById("backToTopBtn");
window.addEventListener("scroll", function () {
     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          backToTopBtn.style.display = "block";
     } else {
          backToTopBtn.style.display = "none";
     }
});

backToTopBtn.addEventListener("click", function () {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
});

