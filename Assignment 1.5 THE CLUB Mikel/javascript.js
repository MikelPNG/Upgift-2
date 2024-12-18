var vip = true;
let age = 17;

function myFunction1(vip) {
  if ((vip = true)) {
    alert("Welcome in my best VIP customer :)");
  } else {
    alert("You are not VIP");
  }
}

function myFunction2(event) {
  var charCode = evt.which ? evt.which : evt.keycode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}

function myFunction3(age) {
  {
    console.log(age.target.value);
  }
  if (input === null) {
    return "1";
  }
}

function myFunction4(adult) {
  if (age > 17) {
    alert("Access granted");
  } else {
    alert("Access denied");
  }
}
