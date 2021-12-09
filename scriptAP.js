
window.onload = function() {
 
    myform = document.getElementById('myform')
    firstName = document.getElementById('firstName')
    lastName = document.getElementById('lastName')
    age = document.getElementById('age')
    email = document.getElementById('email')
    password = document.getElementById('password')

    tbody = document.getElementById('tbody')
    formDiv = document.getElementsByClassName('form_div')[0]
    table = document.querySelector('table')

    myform.addEventListener('submit', (e) => {
        e.preventDefault();

        firstNameTxtValue = document.getElementById('firstName').value
        lastNameTxtValue = document.getElementById('lastName').value
        ageTxtValue = document.getElementById('age').value
        emailTxtvalue = document.getElementById('email').value
        passwordTxtvalue = document.getElementById('password').value

        if (firstNameTxtValue === '' || lastNameTxtValue === '' || ageTxtValue === '' || emailTxtvalue === '' || passwordTxtvalue === ''
      || passwordTxtvalue <= 10  ) {
            UI.messages('Insert All Text Fields or is not correct', 'danger');
            return
        } else {
            var info = new Info(firstNameTxtValue, lastNameTxtValue, ageTxtValue, emailTxtvalue, passwordTxtvalue);

            UI.clearFields();
            UI.displayData(info)
            Store.setStored(info)
            UI.messages('Data Inserted', 'success')
        }
    })


    tbody.addEventListener('click', (e) => {
        if (e.target.classList.contains('RemoveIt')) {
            UI.removeRow(e.target)
        }
    })



    class Info {
        constructor(firstNameTxtValue, lastNameTxtValue, ageTxtValue, emailTxtvalue, passwordTxtvalue) {
            this.firstName = firstNameTxtValue;
            this.lastName = lastNameTxtValue;
            this.age = ageTxtValue;
            this.email = emailTxtvalue;
            this.password = passwordTxtvalue;
        }
    }

    class UI {

        static clearFields() {
            document.getElementById('firstName').value = ''
            document.getElementById('lastName').value = ''
            document.getElementById('age').value = ''
            document.getElementById('email').value = ''
            document.getElementById('password').value = ''
        }

        static displayData(obj) {
            let Info = Store.getStored()
            Info.push(obj);
            UI.populateTR(Info);
        }

        static populateTR(Info) {
            Info.forEach(function(onebyone) {
                tbody.innerHTML += ` <tr>
                <td>${onebyone.firstName} </td>
                <td>${onebyone.lastName}</td>
                <td>${onebyone.age}</td>
                <td>${onebyone.email}</td>
                <td>${onebyone.password}</td>
                <td><button class='btn btn-danger RemoveIt'>Delete</button></td>

            </tr>`

            })
        }

        static messages(txt, className) {
            let divs = '';
            divs = document.createElement('div')
            divs.classList = `alert alert-${className}`
            divs.innerText = txt;
            formDiv.insertBefore(divs, myform)
            setTimeout(() => {
                divs.remove()
            }, 2000)
        }

        static removeRow(element) {
            age = element.parentElement.parentElement.firstElementChild.innerText
            element.parentElement.parentElement.remove()
            Store.removeStored(age)
        }
    }


    class Store {
        static getStored() {
            let info = ''
            if (localStorage.getItem('lastName') == null) {
                info = []
            } else {
                info = JSON.parse(localStorage.getItem('lastName'))
            }
            return info
        }

        static setStored(x) {
            let info = Store.getStored()
            console.log(info)
            info.push(x)
            localStorage.setItem('lastName', JSON.stringify(info))
        }
        static removeStored(age) {
            let Allvalues = Store.getStored()
            Allvalues.forEach((onebyone, index) => {
                if (onebyone.age == age) {
                    Allvalues.splice(index, 1);
                }
            })
            localStorage.setItem('lastName', JSON.stringify(Allvalues))
        }
    }
    UI.populateTR(Store.getStored())
}
