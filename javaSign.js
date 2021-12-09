// append prepend after
console.log("hello");
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorAll = document.getElementById('vError')

function add() {
    var ch = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var mail = document.getElementById('email').value;
    var valid = ch.test(mail);
      // if (valid != true || email.value === '') {
      //   error4.style.display = 'block';
      // }
      // else {
      //   error4.style.display = 'none';
      // }

    //
    //
    // console.log("hello");
    // if (password.value.length <= 9 || password.value === '') {
    //   error5.style.display = 'block';
    // }
    // else {
    //   error5.style.display = 'none';
    // }

  if (valid != true || email.value === ''
      || password.value.length <= 9 && password.value === '') {
    errorAll.style.display = 'block';
  }
  else {
    errorAll.style.display = 'none';
  }

  if ( email.value === 'admin@mail.ru' && password.value === 'unstoppableAdmin228') {
      alert("You logged in");
      location.href = ""; // link to admin panel
  }
}
