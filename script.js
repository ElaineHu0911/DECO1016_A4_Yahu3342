function goSignUp() {
  location.href = "signup.html";
}
/*Back to Home or Go to Sign up page*/
function goHome() {
  location.href = "home.html";
}
/* Get value that the user title for the first question*/
var obj = {};
function next1() {
  var s1 = document.getElementById("s1").value;
  if (s1 == "0") {
    /*Define the first option is 0, therefore if the user didnt enter any value there will comes up a error reminder */
    alert("please complete the form"); /*Comes up a window alert*/
    return;
  }
  /* Get the user enter value*/
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var birth = document.getElementById("birth").value;
  var email1 = document.getElementById("email1").value;
  var email2 = document.getElementById("email2").value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; /*Using regular expressions to validate an email addrss from other resource: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript*/
  if (!reg.test(email1) || !reg.test(email2)) {
    alert("The email format is incorrect"); /* validate the correct formate*/
    return;
  }
  if (email1 != email2) {
    alert("Mailbox is inconsistent");
    return; /* if the first emaili entered not as same as the second one, comes up error reminder*/
  }

  /* Get the gernder selected*/
  var g = "";
  var genders = document.getElementsByName("gender");
  for (var i = 0; i < genders.length; i++) {
    if (genders[i].checked) {
      g = genders[i].value;
    }
  }
  /* Any of the options not be filled in therefore is an error reminder*/
  if (
    firstName == "" ||
    lastName == "" ||
    birth == "" ||
    email1 == "" ||
    email2 == "" ||
    g == ""
  ) {
    alert("please complete the form");
    return;
  } /*Get selected element for the last confirmation step*/
  obj.name = firstName;
  obj.gender = g;
  document.getElementById("a").innerHTML = firstName;
  document.getElementById("b").innerHTML = g;
  document.getElementsByClassName("one")[0].style.display =
    "none"; /*Hide the first sign up section, Go to the next page*/
  document.getElementsByClassName("two")[0].style.display = "block";
}
/* Get the State selector, same to the s1-title*/

function next2() {
  var s2 = document.getElementById("s2").value;
  if (s2 == "0") {
    alert("please complete the form");
    return;
  }
  var phone = document.getElementById("phone").value;
  var streetNumber = document.getElementById("streetNumber").value;
  var streetName = document.getElementById("streetName").value;
  var suburb = document.getElementById("suburb").value;
  var postCode = document.getElementById("postCode").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  if (
    phone == "" ||
    streetNumber == "" ||
    streetName == "" ||
    suburb == "" ||
    postCode == "" ||
    phoneNumber == ""
  ) {
    alert("please complete the form");
    return;
  }
  /* obj.unit=phone suppose to be unit, because I write wrong id in HTML file, therefore, I didnt change it*/
  obj.phone = phoneNumber;
  obj.unit = phone;
  obj.streetNumber = streetNumber;
  obj.streetName = streetName;
  obj.suburb = suburb; /*Same to what I explain above*/
  document.getElementById("c").innerHTML = phoneNumber;
  document.getElementById("d").innerHTML = phone;
  document.getElementById("e").innerHTML = streetNumber;
  document.getElementById("f").innerHTML = streetName;
  document.getElementById("g").innerHTML = suburb;
  document.getElementsByClassName("two")[0].style.display = "none";
  document.getElementsByClassName("three")[0].style.display = "block";
}
/*Option selected part. Get the element if not being selected, then, error alert*/
function next3() {
  var q1 = "";
  var q1s = document.getElementsByName("q1");
  for (var i = 0; i < q1s.length; i++) {
    if (q1s[i].checked) {
      q1 = q1s[i].value;
    }
  }
  var q2 = "";
  var q2s = document.getElementsByName("q2");
  for (var i = 0; i < q2s.length; i++) {
    if (q2s[i].checked) {
      q2 = q2s[i].value;
    }
  }
  if (q1 == "" || q2 == "") {
    alert("please  complete the form");
    return;
  }
  document.getElementsByClassName("three")[0].style.display =
    "none"; /*Hide section3, showing section4*/
  document.getElementsByClassName("four")[0].style.display = "block";
}

function back1() {
  document.getElementsByClassName("one")[0].style.display = "block"; /*oppsite*/
  document.getElementsByClassName("two")[0].style.display = "none";
}
function back2() {
  document.getElementsByClassName("two")[0].style.display = "block";
  document.getElementsByClassName("three")[0].style.display = "none";
}

function back3() {
  document.getElementsByClassName("three")[0].style.display = "block";
  document.getElementsByClassName("four")[0].style.display = "none";
}
/*Up To the submit step*/
function sub() {
  var password = document.getElementById("password").value;
  obj.password = password;
  document.getElementById("h").innerHTML = password;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var s3 = document.getElementById("s3").value; /* Read the policy*/
  var s4 = document.getElementById("s4").value;
  if (password != confirmPassword) {
    alert("Inconsistent password"); /*consist to the password*/
    return;
  }
  var isok = document.getElementById("isOk").checked;
  if (!isok || s3 == "0" || s4 == "0") {
    alert(
      "please complete the form"
    ); /*Ensure user read both policy or error alert*/
    return;
  }
  /*Restore the information by transfering it to string. Resource: W3shools*/
  localStorage.objs = JSON.stringify(obj);
  document.getElementById("open").click();
}

function go() {
  location.href = "endpoint.html";
}
