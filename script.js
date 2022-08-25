let candName = "";
let mobileNumber = "";
let eMail = "";
let at = "@";
let com = ".com";
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let formStatus = false;
let emailStatus=false;
let mobileStatus=false;

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

function validateInputs() {
  if (candName == "" || mobileNumber == "" || eMail == "") {
    // validation for blank inputs
    formStatus = false;
    console.log("fields can not be left blank");
    return formStatus;
  } else {
    // email validation
    if(emailValidation()){
        formStatus=true;
    }else{
        formStatus=false;
    }

    // mobile validation
    if(mobileNumberValidation()){
        formStatus=true;
    }else{
        formStatus=false;
    }
  }
  return formStatus;
}

function emailValidation() {
  if (!eMail.includes(at)) {
    console.log("invalid email:must contain @");
    emailStatus = false;
  } else if (eMail.indexOf(at) == 0) {
    emailStatus = false;
    console.log("@ cant be at begining");
  } else if (!eMail.includes(com)) {
    emailStatus = false;
    console.log("invalid email:must contain .com");
  } else {
    console.log("valid email");
    emailStatus = true;
  }

  return emailStatus;
}

function mobileNumberValidation() {
  if (mobileNumber.length > 10) {
    mobileStatus = false;
    console.log("invalid mobile number:can't exceed 10 digits");
  } else if (mobileNumber.length < 10) {
    mobileStatus = false;
    console.log("invalid mobile number:must be of 10 digits");
  } else {
    for (number of mobileNumber) {
      for (digit of numbers) {
        if (number == digit) {
            mobileStatus = true;
          continue;
        } else {
            mobileStatus = false;
        }
      }
    }
    if (mobileStatus == true) {
      console.log("valid phone number");
    }else{
        console.log("invalid mobile number:characters not allowed");
    }
  }

  return mobileStatus;
}
