document.addEventListener('contextmenu', event => event.preventDefault());
//        MOBILE MENU
function mobileClick() {
  $('#mobile-menu').toggleClass('mobileAdd');
  $('#mobileOverlay').toggleClass('mobile-overlay');
}
//        MOBILE MENU END
$(window).scroll(function () {
  $('header').toggleClass('scrolled', $(this).fadeIn().scrollTop() > 65);
});
$(window).scroll(function () {
  $('.blog_main_header').toggleClass('scrolled top', $(this).fadeIn().scrollTop() > 65);
});

$('.autoplay').slick({
  slidesToShow: 6,
  slidesToScroll: 3,
  rtl: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: false,
  nextArrow: $('.nxt'),
  prevArrow: $('.prv'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

//----------------------------------------Registration/Login Page------------------------------------
var tempChamberbtn = document.getElementById("tempChamberbtn");
var chamber = document.getElementById("chamber");
chamber.style.display = "none";
tempChamberbtn.addEventListener("click", () => {
  chamber.style.display = "";
  document.getElementById("tempChamber").style.setProperty("display", "none", "important");
});

var patientReg = document.getElementById("patientReg");
var doctorReg = document.getElementById("doctorReg");
//by default doctor registration
patientReg.style.setProperty("display", "none", "important");
doctorReg.style.setProperty("display", "");
//interchange  between doctor and patient registration
document.getElementById("doctorRegBtn").addEventListener("click", () => {
  patientReg.style.setProperty("display", "none", "important");
  doctorReg.style.setProperty("display", "");
})
document.getElementById("patientRegBtn").addEventListener("click", () => {
  doctorReg.style.setProperty("display", "none", "important");
  patientReg.style.setProperty("display", "");
});
//check password
var alert = document.getElementById("alert");
alert.style.setProperty("display", "none", "important");

function CheckPass() {
  var newPassword = document.getElementById("newPassword");
  var confirmPassword = document.getElementById("confirmPassword");
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  var specialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g;

  if (newPassword.value.length < 8) {
    alert.style.display = "";
    alert.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg><p>Please enter at least 8 character in the password</P>`;
  }
  else if (!newPassword.value.match(lowerCaseLetters)) {
    alert.style.display = "";
    alert.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg><p>Please enter at least 1 lowercase character in the password</P>`;
  }
  else if (!newPassword.value.match(upperCaseLetters)) {
    alert.style.display = "";
    alert.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg><p>Please enter at least 1 uppercase character in the password</P>`;
  }
  else if (!newPassword.value.match(numbers)) {
    alert.style.display = "";
    alert.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg><p>Please enter at least 1 number character in the password</P>`;
  }
  else if (!newPassword.value.match(specialCharacter)) {
    alert.style.display = "";
    alert.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg><p>Please enter at least 1 special character in the password</P>`;
  }
  else if (newPassword.value != confirmPassword.value) {
    alert.style.display = "";
    alert.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg><p>Passwords does not match</P>`;
  }
  else {
    alert.innerHTML = ``;
  }
};

//doctor password validation
function doctorCheckPass() {
  var newPassword = document.getElementById("dnewPassword");
  var confirmPassword = document.getElementById("dconfirmPassword");
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  var specialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g;

  if (newPassword.value.length < 8) {
    alert.style.display = "";
    alert.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg><p>Please enter at least 8 character in the password</P>`;
  }
  else if (!newPassword.value.match(lowerCaseLetters)) {
    alert.style.display = "";
    alert.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg><p>Please enter at least 1 lowercase character in the password</P>`;
  }
  else if (!newPassword.value.match(upperCaseLetters)) {
    alert.style.display = "";
    alert.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg><p>Please enter at least 1 uppercase character in the password</P>`;
  }
  else if (!newPassword.value.match(numbers)) {
    alert.style.display = "";
    alert.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg><p>Please enter at least 1 number character in the password</P>`;
  }
  else if (!newPassword.value.match(specialCharacter)) {
    alert.style.display = "";
    alert.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg><p>Please enter at least 1 special character in the password</P>`;
  }
  else if (newPassword.value != confirmPassword.value) {
    alert.style.display = "";
    alert.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg><p>Passwords does not match</P>`;
  }
  else {
    alert.innerHTML = ``;
  }
}
//---------------------------------------------End Registration page------------------------------------
//---------------------------------------------login page-----------------------------------------------

function loginCheckPass() {
  var loginAlert = document.getElementById("loginAlert");
  loginAlert.style.setProperty("display", "none", "important");
  var Password = document.getElementById("Password");
  var phone = document.getElementById("inputPassword4");

  if (phone.value.length < 11) {
    loginAlert.style.display = "";
    loginAlert.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg><p>Please enter the phone number</P>`;
  }
  else if (Password.value.length < 8) {
    loginAlert.style.display = "";
    loginAlert.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg><p>Please enter the correct password</P>`;
  }
  else {
    loginAlert.innerHTML = ``;
  }
};
//-------------------------------------------end login page----------------------------------------------