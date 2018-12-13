function validate(){
  event.preventDefault();
  var phoneNumber = document.getElementById('phone-number').value;
  var postalCode = document.getElementById('postal-code').value;

  // Phone pattern: (541) 754-3010
  // The following regular expression represents the phone number pattern
  var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.][0-9]{3}[-\s][0-9]{4}$/;
  var phoneResult = phoneRGEX.test(phoneNumber);

  var postalRGEX = /^[0-9]{1}[1-9]{1}[0-1]{2}$/;
  var postalResult = postalRGEX.test(postalCode);
  // console.log('phone result:' + phoneResult);
  if(phoneResult==false){
    console.log('Please enter a valid phone number');
    return false;
  } else{
    console.log('Phone number correct');
    return true;
  }
  if(postalResult==false){
    console.log('Please enter a valid post code');
    return false;
  }else{
    console.log('Post code correct');
    return true;
  }
}

// document.getElementById("submit").addEventListener("click", function(event){
//     event.preventDefault()
// });

// Username & password validation

function validateUser(form){
  event.preventDefault();
  console.log('running');
  if(form.username.value==''){
    console.log('Error: username cannot be blank.');
    form.username.focus();
    return false;
  }
  re= /^\w+$/;
  if (!re.test(form.username.value)){
    console.log('Error: Username must contain only letters, numbers and underscore.');
    form.username.focus();
    return false;
  }

  if (form.pwdOne.value !='' && form.pwdOne.value==form.pwdTwo.value){
    if (form.pwdOne.value.length<6){
      console.log('Error: Password must contain at least 6 characters.');
      form.pwdOne.focus();
      return false;
    }
    // Error reporting if username is the same as password
    if (form.pwdOne.value==form.username.value){
      console.log('Error: username and password cannot be the same.');
      form.pwdOne.focus();
      return false;
    }
    re=/[a-z]/; // Checks if lower case is present
    if (!re.test(form.pwdOne.value)){
      console.log('Error: Password should contain atleast one lowercase letter.');
      form.pwdOne.focus();
      return false;
    }
    re=/[A-Z]/; // Checks if upper case is present
    if (!re.test(form.pwdOne.value)){
      console.log('Error: Password should contain atleast one capital letter.');
      form.pwdOne.focus();
      return false;
    }
    re=/[0-9]/; // Checks if lower case is present
    if (!re.test(form.pwdOne.value)){
      console.log('Error: Password should contain atleast one number.');
      form.pwdOne.focus();
      return false;
    }
  } else {
    console.log('Error: please chack that you have entered and confirmed your password.');
    form.pwdOne.focus();
    return false;
  }
  console.log('Successful password: ' + form.pwdOne.value);
}
