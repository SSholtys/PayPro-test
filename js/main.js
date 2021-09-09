// Adding input for corp clients

const corpBuy = document.querySelector('#corp-buy')
const hiddenBlock = document.querySelector('#hiddenBlock')


corpBuy.addEventListener('change', () => {
    if (!corpBuy.checked) {
        hiddenBlock.classList.add('invis')
    } else {
        hiddenBlock.classList.remove('invis')
    }
})

// Adding input for other clients

const otherPersCheckbox = document.querySelector('#other-pers-checkbox')
const otherPersLicense = document.querySelector('#other-pers-wrapper')

otherPersCheckbox.addEventListener('change', () => {
    if (!otherPersCheckbox.checked) {
        otherPersLicense.classList.remove('inp-section'),
            otherPersLicense.classList.add('invis')
    } else {
        otherPersLicense.classList.add('inp-section')
        otherPersLicense.classList.remove('invis')
    }
})

// Credit card check-box

const paymentSelect = document.querySelectorAll('.payment-select')


// Coupon code

const couponCheckbox = document.querySelector('#coupon-code-checkbox')
const couponCodeInput = document.querySelector('#coupon-wrapper')

couponCheckbox.addEventListener('change', () => {
    if (couponCheckbox.checked) {
        couponCodeInput.classList.remove('invis')
    } else {
        couponCodeInput.classList.add('invis')
    }
})

// Payment method section

const paymentMethod = document.querySelector('#payment-select')
const creditCardSection = document.querySelector('#credit-card-section')
const paypalSection = document.querySelector('#paypal-section')
const moneyTransferSection = document.querySelector('#money-transfer-section')
const buyOrderSection = document.querySelector('#buy-order-section')

paymentMethod.addEventListener('change', () => {

    switch (paymentMethod.value) {
        case 'card':
            addOrRemoveInvis(creditCardSection, moneyTransferSection, paypalSection, buyOrderSection);
            break;
        case 'paypal':
            addOrRemoveInvis(paypalSection, moneyTransferSection, creditCardSection, buyOrderSection);
            break;
        case 'money-transfer':
            addOrRemoveInvis(moneyTransferSection, paypalSection, creditCardSection, buyOrderSection);
            break;
        case 'buy-order':
            addOrRemoveInvis(buyOrderSection, paypalSection, creditCardSection, moneyTransferSection);
            break;
        default:
            addOrRemoveInvis()
    }
})

function addOrRemoveInvis(removeMethod, addOne, addTwo, addThree) {
    if (removeMethod) {
        removeClass(removeMethod, 'invis')
        addClass(addOne, 'invis')
        addClass(addTwo, 'invis')
        addClass(addThree, 'invis')
    } else {
        addClass(paypalSection, 'invis')
        addClass(creditCardSection, 'invis')
        addClass(moneyTransferSection, 'invis')
        addClass(buyOrderSection, 'invis')
    }
}

// Tool-tips

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})