//fetching and validating input fields
let candName = "";
let mobileNumber = "";
let eMail = "";
let at = "@";
let com = ".com";
let alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*-/++,.\;:";
let formStatus = false;
let emailStatus=false;
let mobileStatus=false;

//setting error msg to blank
let mobileError=document.getElementById("mobile-field-error");
let emailError=document.getElementById("email-field-error");
let nameError=document.getElementById("name-field-error");

function onSubmitClick() {
  candName = document.getElementById("name").value;
  mobileNumber = document.getElementById("mobile").value;
  eMail = document.getElementById("email").value;

  console.log("name :", candName);
  console.log("Mobile :", mobileNumber);
  console.log("Email :", eMail);

  // calling function to validate inputs
  if (validateInputs()) {
    console.log("form is VALID");
  } else {
    console.log("form is IN VALID");
  }
}

//input validation
function validateInputs() {
  if (candName == "" || mobileNumber == "" || eMail == "") {
    // validation for blank inputs
    nameError.innerHTML="fields can not be left blank";
    formStatus = false;
    console.log("fields can not be left blank");
    return formStatus;
  } else {
    nameError.innerHTML="";

    //checking for email validation 
    if(emailValidation() && mobileNumberValidation()){
      formStatus=true;
    }else{
      formStatus=false;
    }
  return formStatus;
  }
}

//function to validate email id
function emailValidation() {
  if (!eMail.includes(at)) {
    emailError.innerHTML="must contain @";
    console.log("invalid email:must contain @");
    emailStatus = false;
  } else if (eMail.indexOf(at) == 0) {
    emailError.innerHTML="@ cant be at begining";
    emailStatus = false;
    console.log("@ cant be at begining");
  } else if (!eMail.includes(com)) {
    emailError.innerHTML="must contain .com";
    emailStatus = false;
    console.log("invalid email:must contain .com");
  } else {
    emailError.innerHTML="";
    console.log("valid email");
    emailStatus = true;
  }
  return emailStatus;
}

function mobileNumberValidation() {
  if (mobileNumber.length > 10) {
    mobileError.innerHTML="can't exceed 10 digits";
    mobileStatus = false;
    console.log("invalid mobile number:can't exceed 10 digits");
  } else if (mobileNumber.length < 10) {
    mobileError.innerHTML="must be of 10 digitsg";
    mobileStatus = false;
    console.log("invalid mobile number:must be of 10 digits");
  } else {
    for(char of alphabets){
      if(mobileNumber.includes(char)){
        mobileStatus = false;
        break;;
      }else{
        mobileStatus = true;
        continue;
      }
    }
    if (mobileStatus == true) {
      console.log("valid phone number");
      mobileError.innerHTML="";
    }else{
      mobileError.innerHTML="characters not allowed";
        console.log("invalid mobile number:characters not allowed");
    }
  }
  return mobileStatus;
}

//adding scroll effect
let toTop;
toTop=document.getElementById("to-top");

window.addEventListener('scroll',()=>{
  scrollFunction();
})

function scrollFunction() {
  if (document.body.scrollTop > 199 || document.documentElement.scrollTop > 199) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}
