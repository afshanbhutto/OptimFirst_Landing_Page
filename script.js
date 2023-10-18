// Responsive nav
document.getElementById("hamburger").addEventListener("click", function () {
  var nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
});

// forms
function validateForm() {
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var email = document.getElementById("email");

  var isValid = true;

  if (fname.value === "") {
    fname.classList.add("error");
    document.getElementById("fname-error").textContent = "First Name is empty";
    isValid = false;
  } else {
    fname.classList.remove("error");
    document.getElementById("fname-error").textContent = "";
  }

  if (lname.value === "") {
    lname.classList.add("error");
    document.getElementById("lname-error").textContent = "Last Name is empty";
    isValid = false;
  } else {
    lname.classList.remove("error");
    document.getElementById("lname-error").textContent = "";
  }

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (email.value === "") {
    email.classList.add("error");
    document.getElementById("email-error").textContent = "Email is empty";
    isValid = false;
  } else if (!email.value.match(emailPattern)) {
    email.classList.add("error");
    document.getElementById("email-error").textContent = "Invalid Email format";
    isValid = false;
  } else {
    email.classList.remove("error");
    document.getElementById("email-error").textContent = "";
  }

  return isValid;
}

// Add event listeners to clear error messages on input interaction
document.getElementById("fname").addEventListener("input", function () {
  this.classList.remove("error");
  document.getElementById("fname-error").textContent = "";
});

document.getElementById("lname").addEventListener("input", function () {
  this.classList.remove("error");
  document.getElementById("lname-error").textContent = "";
});

document.getElementById("email").addEventListener("input", function () {
  this.classList.remove("error");
  document.getElementById("email-error").textContent = "";
});

// Contact form
function validateContactForm() {
  var contactFname = document.getElementById("contact-fname");
  var contactLname = document.getElementById("contact-lname");
  var contactEmail = document.getElementById("contact-email");
  var contactMessage = document.getElementById("contact-message");

  var isValid = true;

  if (contactFname.value === "") {
    contactFname.classList.add("error");
    document.getElementById("contact-fname-error").textContent =
      "First Name is empty";
    isValid = false;
  } else {
    contactFname.classList.remove("error");
    document.getElementById("contact-fname-error").textContent = "";
  }

  if (contactLname.value === "") {
    contactLname.classList.add("error");
    document.getElementById("contact-lname-error").textContent =
      "Last Name is empty";
    isValid = false;
  } else {
    contactLname.classList.remove("error");
    document.getElementById("contact-lname-error").textContent = "";
  }

  if (contactEmail.value === "") {
    contactEmail.classList.add("error");
    document.getElementById("contact-email-error").textContent =
      "Email is empty";
    isValid = false;
  } else {
    contactEmail.classList.remove("error");
    document.getElementById("contact-email-error").textContent = "";
  }

  if (contactMessage.value === "") {
    contactMessage.classList.add("error");
    document.getElementById("contact-message-error").textContent =
      "Message is empty";
    isValid = false;
  } else {
    contactMessage.classList.remove("error");
    document.getElementById("contact-message-error").textContent = "";
  }

  return isValid;
}
