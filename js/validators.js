var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')


function addClass(elem, style) {
    elem.classList.add(style)
}

function removeClass(elem, style) {
    elem.classList.remove(style)
}

function trueClass(elem) {
    removeClass(elem, 'is-invalid')
    addClass(elem, 'is-valid')
}

function falseClass(elem) {
    removeClass(elem, 'is-valid')
    addClass(elem, 'is-invalid')
}

document.querySelector('#submitBtn').onclick = () => {
    let validation = []

    function addTrueAndClass(elem) {
        trueClass(elem)
        validation = [...validation, true]
    }

    function addFalseAndClass(elem) {
        falseClass(elem)
        validation = [...validation, false]
    }

    // Reg Expressions
    const regMail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const regName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    const regPhone = /^[0-9\+]{1,}[0-9\-]{3,15}$/;
    const regVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const regMasterCard = /^(?:5[1-5][0-9]{14})$/;
    const regCvv = /^[0-9]{3,4}$/

    // Company name Validation

    function companyNameValidate() {
        const companyName = document.querySelector('#company-name')

        if (hiddenBlock.classList.value === 'invis' && companyName.value.trim() !== '') {
            addTrueAndClass(companyName)
        } else if (hiddenBlock.classList.value !== 'invis' && companyName.value.trim() === '') {
            companyName.setAttribute("title", "Назва компанії є обов'язковим полем")
            addFalseAndClass(companyName)
        }
    }
    companyNameValidate()

    // Email Validation

    function emailValidate() {
        const emailInp = document.querySelector('#email')

        if (emailInp.value.match(regMail) && emailInp.value.trim() !== '') {
            addTrueAndClass(emailInp)
        } else if (emailInp.value.trim() === '' || !emailInp.value.match(regMail)) {
            emailInp.setAttribute("title", "Будь ласка вкажіть адресу електронної пошти правильно")
            addFalseAndClass(emailInp)
        }

    }
    emailValidate()

    // Name Validation

    const firstName = document.querySelector('#first-name')
    const lastName = document.querySelector('#last-name')

    function validateFirstAndLastName(name, checkFirstOrLastName) {
        if (name.value.match(regName)) {
            addTrueAndClass(name)
        } else if (name.value === '' || !name.value.match(regName)) {
            name.setAttribute("title", checkFirstOrLastName ? "Ім'я є обов'язковим полем" : "Прізвище є обов'язковим полем")
            addFalseAndClass(name)
        }
    }
    validateFirstAndLastName(firstName, true)
    validateFirstAndLastName(lastName, false)

    // Adress validation 

    const city = document.querySelector('#city')
    const adress = document.querySelector('#adress')

    function checkAddressAndCity(elem, checkAdressOrCity) {
        if (elem.value.trim() !== '') {
            trueClass(elem)
        } else if (!elem.value.trim() !== '') {
            falseClass(elem)
            elem.setAttribute("title", checkAdressOrCity ? "Будь ласка, вкажіть адресу для виставлення рахунку." : "Будь ласка, вкажіть місто для виставлення рахунку.")
            validation = [...validation, false]
        }
    }
    checkAddressAndCity(city, false)
    checkAddressAndCity(adress, true)


    // Phone number Validation

    function phoneValidate() {
        const phoneNumber = document.querySelector('#phone')

        if (phoneNumber.value.match(regPhone)) {
            addTrueAndClass(phoneNumber)
        } else {
            addFalseAndClass(phoneNumber)
        }
    }
    phoneValidate()

    // Other Person license Validation

    const otherLastName = document.querySelector('#other-last-name')
    const otherFirstName = document.querySelector('#other-first-name')

    function otherPersonValidate(elem, checkEmailOrName) {
        if (elem.value.match(regName) || otherPersLicense.classList.value === 'invis') {
            addTrueAndClass(elem)
        } else if (otherPersLicense.classList.value === 'invis' || !elem.value.match(regName)) {
            elem.setAttribute("title", checkEmailOrName ? "Email ліцензіата вказано не вірно" : "Ім'я ліцензіата вказано не вірно.")
            addFalseAndClass(elem)
        }
    }
    otherPersonValidate(otherFirstName, false)
    otherPersonValidate(otherLastName, true)

    // Payment methods Validation

    function creditCardValidate() {
        const cardNumber = document.querySelector('#card-number')

        if (creditCardSection.classList.value === 'invis' || (cardNumber.value.match(regVisa) || cardNumber.value.match(regMasterCard))) {
            addTrueAndClass(cardNumber)
        } else {
            cardNumber.setAttribute("title", "Номер кредитної картки є обов'язковим полем.")
            addFalseAndClass(cardNumber)
        }

    }

    function paypalValidate() {
        const paypalSection = document.querySelector('#paypal-section')
        const paypalMail = document.querySelector('#paypal-email')
        if (paypalSection.classList.value === 'invis' || (paypalMail.value.match(regMail) && paypalMail.value.trim() !== '')) {
            addTrueAndClass(paypalMail)
        } else {
            paypalMail.setAttribute("title", "Адреса електронної пошти PayPal є обов'язковим полем.")
            addFalseAndClass(paypalMail)
        }
    }

    function cvvValidate() {
        const cvv = document.querySelector('#cvv')
        if (creditCardSection.classList.value === 'invis' || cvv.value.match(regCvv)) {
            addTrueAndClass(cvv)
        } else {
            cvv.setAttribute("title", "Невірний код безпеки кредитної картки")
            addFalseAndClass(cvv)
        }
    }
    creditCardValidate()
    paypalValidate()
    cvvValidate()

    const modTitle = document.querySelector('.mod-title')
    const modalBody = document.querySelector('.modal-body')
    const ind1 = document.querySelector('#ind1')
    const ind2 = document.querySelector('#ind2')
    const indLine = document.querySelector('#ind-line')
    const errorMessage = document.querySelector('#error-message')
    if (!validation.includes(false)) {
        addClass(errorMessage, 'invis')
        modTitle.innerHTML = `<h2>Your payment was successful !!!</h2>`
        modalBody.innerHTML = `<img src="../assets/icons/deal_done_partnership_agreement_icon_192421.png" alt="">`
        removeClass(ind1, 'active-indicator')
        addClass(ind1, 'disabled-indicator')
        addClass(ind2, 'active-indicator')
        addClass(indLine, 'active-indicator')

    } else {
        removeClass(errorMessage, 'invis')
        modTitle.innerHTML = `<h2>Your payment was not successful !!!</h2>`
        modalBody.innerHTML = `<h4>Please contact your manager to resolve the issue.</h4><br/><img src="../assets/icons/customer_support_help_service_icon_192442.png" alt="">`
    }
}