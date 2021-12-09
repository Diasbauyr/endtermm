// append prepend after
console.log("hello");
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const age = document.getElementById('age')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const error1 = document.getElementById('error1')
const error2 = document.getElementById('error2')
const error3 = document.getElementById('error3')
const error4 = document.getElementById('error4')
const error5 = document.getElementById('error5')
const errorAll = document.getElementById('vError')


function add() {

    console.log("hello");
    if (firstName.value === '' || firstName.value == null) {
      error1.style.display = 'block';
    }
    else {
      error1.style.display = 'none';
    }

    console.log("hello");
    if (lastName.value === '' || lastName.value == null) {
      error2.style.display = 'block';
    }
    else {
      error2.style.display = 'none';
}


    console.log("hello");
    if (age.value === '') {
      error3.style.display = 'block';
    }
    else {
      error3.style.display = 'none';
    }


    var ch = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var mail = document.getElementById('email').value;
    var valid = ch.test(mail);
      if (valid != true || email.value === '') {
        error4.style.display = 'block';
      }
      else {
        error4.style.display = 'none';
      }



    console.log("hello");
    if (password.value.length <= 9 || password.value === '') {
      error5.style.display = 'block';
    }
    else {
      error5.style.display = 'none';
    }



  if (firstName.value === '' || firstName.value == null
      || lastName.value === '' || lastName.value == null
      || age.value === ''
      || valid != true || email.value === ''
      || password.value.length <= 9 && password.value === '') {
    errorAll.style.display = 'block';
  }
  else {
    errorAll.style.display = 'none';
  }

}
