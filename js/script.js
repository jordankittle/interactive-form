/*Interactive Form - Treehouse project 3 in the Full Stack Javascript Techdegree
 *Author: Jordan Kittle
*/

/* When the page loads:
 * 1.) Bring the first field of the form into focus and set variables
 * 2.) Hide the other-title input field
 * 3.) Hide the color options and set the Color: field to 'Please select a T-shirt theme'
*/

const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('mail');
const jobRoleInput = document.getElementById('title');
const jobRoleOptions = document.querySelectorAll('#title option');
const otherJobRoleInput = document.getElementById('other-title');
otherJobRoleInput.style.display = 'none';
const tShirtSize = document.getElementById('size');
const themeSelect = document.getElementById('design');
const themeSelectOptions = document.querySelectorAll('#design option');
const colorSelect = document.getElementById('color');
const colorOptions = document.querySelectorAll('#color option');
const activityCheckboxes = document.querySelectorAll('.activities input');
const paymentSelect = document.getElementById('payment');
const paymentOptions = document.querySelectorAll('#payment option');
const creditCardNumber = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const expirationMonth = document.getElementById('exp-month');
const expirationMonthOptions = document.querySelectorAll('#exp-month option');
const expirationYear = document.getElementById('exp-year');
const expirationYearOptions = document.querySelectorAll('#exp-year option');
const creditCard = document.querySelector('#credit-card');
const paypal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');

name.focus();
hideColors();
paypal.style.display = 'none';
bitcoin.style.display = 'none';

/* Validation functions
 * Check that information entered is valid and alert user if not
 * Return true or false that the information is valid
*/
function nameValidator(){
	if(/\w.*/.test(name.value) ){
		name.previousElementSibling.textContent = "Name:";
		name.previousElementSibling.style.color = 'black';
		name.style.cssText = 'color: black; border: 2px solid rgb(111, 157, 220);';
		return true;
	}
	name.previousElementSibling.textContent = "Enter a Name";
	name.previousElementSibling.style.color = 'red';
	name.style.cssText = 'color: red; border: 2px solid red';
	return false;
}

function emailValidator(){
	if(/^\w+(_|.)*?@\w+\.[a-z]+$/.test(email.value) ){
		email.previousElementSibling.textContent = "Email:";
		email.previousElementSibling.style.color = 'black';
		email.style.cssText = 'color: black; border: 2px solid rgb(111, 157, 220);';
		return true;
	} else if ( email.value == "" ) {
		email.previousElementSibling.textContent = "E-mail is blank";
		email.previousElementSibling.style.color = 'red';
		email.style.cssText = 'color: red; border: 2px solid red';
	} else {
		email.previousElementSibling.textContent = "Enter a valid e-mail address";
		email.previousElementSibling.style.color = 'red';
		email.style.cssText = 'color: red; border: 2px solid red';
		return false;
	}
	
}
	
function jobRoleValidator(){
	if( jobRoleInput.value === 'other' ){
		if (/^\w+/.test(otherJobRoleInput.value) ) {
			otherJobRoleInput.style.color = 'black';
			otherJobRoleInput.style.cssText = 'color: black; border: 2px solid rgb(111, 157, 220);';
			return true;
		}
		otherJobRoleInput.setAttribute('placeholder','Enter your job role');
		otherJobRoleInput.style.color = 'red';
		otherJobRoleInput.style.cssText = 'color: red; border: 2px solid red';
		return false;
	}
	return true;
}

function themeSelectValidator(){
	if(themeSelect.selectedIndex !== 0){
	themeSelect.previousElementSibling.textContent = "Design:";
	themeSelect.style.color = 'black';
	themeSelect.previousElementSibling.style.color = 'black';
	themeSelect.style.cssText = 'color: black; border: 2px solid rgb(111, 157, 220)';
		return true;
	}
	themeSelect.previousElementSibling.textContent = "Please select a design";
	themeSelect.style.color = 'red';
	themeSelect.previousElementSibling.style.color = 'red';
	themeSelect.style.cssText = 'color: red; border: 2px solid red';
	return false;
} 

function activityCheckboxesValidator(){
	const activityHeading = document.querySelector('.activities legend');
	if( activityCheckboxes[0].checked || !activityCheckboxes[0].checked ){
		let activitiesAttending = 0;
		for( let i = 0; i < activityCheckboxes.length; i++ ){
			if(activityCheckboxes[i].checked){
				activitiesAttending++;
			}
		}
		if(activitiesAttending >= 1){
			activityHeading.textContent = 'Register for Activities';
			activityHeading.style.color = 'black';
			return true;
		}

	}
	
	activityHeading.textContent = 'Please select at least one activity';
	activityHeading.style.color = 'red';
	return false;
}

function creditCardNumberValidator(){
	if( /^(\d{4})( |-)?(\d{4})( |-)?(\d{4})( |-)?(\d{1,4}) *?$/.test( creditCardNumber.value ) ){
		let oldNumber = creditCardNumber.value;
		creditCardNumber.value = oldNumber.replace(/^(\d{4})( |-)?(\d{4})( |-)?(\d{4})( |-)?(\d{1,4}) *?$/, '$1 $3 $5 $7');
		creditCardNumber.previousElementSibling.textContent = "Card Number:";
		creditCardNumber.previousElementSibling.style.color = 'black';
		creditCardNumber.style.cssText = 'color: black; border: 2px solid rgb(111, 157, 220);';


		return true;
	}
	creditCardNumber.previousElementSibling.textContent = "Enter a Valid Credit Card Number";
	creditCardNumber.previousElementSibling.style.color = 'red';
	creditCardNumber.style.cssText = 'color: red; border: 2px solid red';
	return false;
}

function zipCodeValidator(){
	if( /^(\d{5})(-?| ?)(\d{4})?$/.test( zipCode.value ) ){
		let oldNumber = zipCode.value;
		if ( zipCode.value.length > 5 ) {
			zipCode.value = oldNumber.replace(/^(\d{5})(-?| ?)(\d{4})?$/, '$1-$3');
		}
		zipCode.previousElementSibling.textContent = "Zip Code:";
		zipCode.previousElementSibling.style.color = 'black';
		zipCode.style.cssText = 'color: black; border: 2px solid rgb(111, 157, 220);';


		return true;
	}
	zipCode.previousElementSibling.textContent = "Enter a Valid Zip";
	zipCode.previousElementSibling.style.color = 'red';
	zipCode.style.cssText = 'color: red; border: 2px solid red';
	return false;
}

function cvvValidator(){
	if( /^\d{3}$/.test( cvv.value ) ){
		let oldNumber = cvv.value;
		cvv.previousElementSibling.textContent = "CVV:";
		cvv.previousElementSibling.style.color = 'black';
		cvv.style.cssText = 'color: black; border: 2px solid rgb(111, 157, 220);';


		return true;
	}
	cvv.previousElementSibling.textContent = "Enter a Valid CVV";
	cvv.previousElementSibling.style.color = 'red';
	cvv.style.cssText = 'color: red; border: 2px solid red';
	return false;
}

//Run each validation function and return a true or false if all of them pass
//Only validate credit card field if that is the payment method currently selected
function validateForm(){
	let flags = 0;
	nameValidator()?'' : flags++;
	emailValidator()?'' : flags++;
	jobRoleValidator()?'' : flags++;
	themeSelectValidator()?'' : flags++;
	activityCheckboxesValidator()?'' : flags++;
	if ( paymentSelect.value === 'credit card' ){
		creditCardNumberValidator()?'' : flags++;
		zipCodeValidator()?'' : flags++;
		cvvValidator()?'' : flags++;
	}
	
	return flags > 0? false: true;

}
// Call the validateForm function on submit
form.addEventListener('submit', (e) => {
	
	if( !validateForm() ){
		e.preventDefault();
	}
});

name.addEventListener('keyup', (e) => {
	nameValidator();
});
email.addEventListener('keyup', (e) => {
	emailValidator();
});
otherJobRoleInput.addEventListener('blur', (e) => {
	jobRoleValidator();
});
creditCardNumber.addEventListener('keyup', (e) => {
	creditCardNumberValidator();
});
zipCode.addEventListener('keyup', (e) => {
	zipCodeValidator();
});
cvv.addEventListener('keyup', (e) => {
	cvvValidator();
});



//Set even listener on job role and display other-title input if 'other' is selected
jobRoleInput.addEventListener('change', e => {
	if( event.target.value === 'other' ){
		otherJobRoleInput.style.display = '';
		otherJobRoleInput.value = '';
		otherJobRoleInput.setAttribute('placeholder', 'Your Job Role');
		otherJobRoleInput.focus();
	} else {
		otherJobRoleInput.style.display = 'none';
	}
});


/*Set theme specific color functions and add event listener to theme select input
 *These functions are to be called whenever a user selects a theme
 *
*/
function hideColors(){
	colorSelect.innerHTML = ``;
	document.querySelector('#shirt-colors label').textContent = 'Please select a T-shirt theme';
	colorSelect.style.display = 'none'
}
function displayJsPunsColors(){
	const jsPunsColorOptions = `
	  <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
	  <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
	  <option value="gold">Gold (JS Puns shirt only)</option>
	`;
	colorSelect.style.display = '';
	colorSelect.innerHTML = jsPunsColorOptions;
	document.querySelector('#shirt-colors label').textContent = 'Color:';
}
function displayILoveJsColors(){
	const iLoveJsColorOptions = `
	  <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
	  <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
	  <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> 
	`;
	colorSelect.style.display = '';
	colorSelect.innerHTML = iLoveJsColorOptions;
	document.querySelector('#shirt-colors label').textContent = 'Color:';
}

//Dispplay correct shirt colors in accordance with currently selected theme
themeSelect.addEventListener('change', e => {
	const selectValue = e.target.value;
	const themeOptions = themeSelect.querySelectorAll('option');
	if( selectValue === 'js puns' ){
		displayJsPunsColors();
	} else if ( selectValue === 'heart js' ) {
		displayILoveJsColors();
	} else {
		hideColors();
	}
	themeSelectValidator();
});


/*Set event listener on workshop checkboxes and add a running price total
 *Make sure no workshops with conflicting days and times can be selected at the same time
 *Workshops not available are turned red and also striked for accesibility to users with color blindness
 *Keep a running total of prices
*/

const totalPriceLabel = document.createElement('label');
let totalPrice = 0;
totalPriceLabel.className = 'total-price';
document.querySelector('.activities').append(totalPriceLabel);
totalPriceLabel.innerHTML = `<h2>Total: $0</h2>`;

document.querySelector('.activities').addEventListener('change', e => {
	let costOfActivities = 0;
	const clicked = e.target;
	const clickedDayAndTime = clicked.getAttribute('data-day-and-time');
	for ( let i = 0; i < activityCheckboxes.length; i++ ) {
		const checkBoxDayAndTime = activityCheckboxes[i].getAttribute('data-day-and-time');
		if( checkBoxDayAndTime === clickedDayAndTime && clicked !== activityCheckboxes[i] ){
			if( clicked.checked ){
				activityCheckboxes[i].disabled = true;
				activityCheckboxes[i].parentNode.style.cssText = 'text-decoration: line-through; color: rgba(255,0,0,.5)';
			} else {
				activityCheckboxes[i].disabled = false;
				activityCheckboxes[i].parentNode.style.cssText = 'text-decoration: none; color: rgba(0,0,0,1)';
			}
		}
		const checkBoxPrice = parseInt(activityCheckboxes[i].getAttribute('data-cost') );
		if (activityCheckboxes[i].checked) {
			costOfActivities += checkBoxPrice;
		}
	}
	totalPriceLabel.innerHTML = `<h2>Total: $${costOfActivities}</h2>`;
	totalPrice = costOfActivities;
	activityCheckboxesValidator();
});


/*Set payment default to credit card and hide other payment options
 *Loop through all payment options and select by value to make sure credit card always selected even if options change
 *"Select Payment" option is set to disabled
*/

for (let i = 0; i < paymentOptions.length; i++) {
	if( paymentOptions[i].value === 'credit card' ){
		paymentSelect.selectedIndex = i;
	}
	if( paymentOptions[i].value === 'select method' ){
		paymentOptions[i].disabled = true;
	}
}


/*Set functions to handle payment option changes and set listener on payment select
 *
*/
function payWithCreditCard(){
	creditCard.style.display = '';
	paypal.style.display = 'none';
	bitcoin.style.display = 'none';
}
function payWithPayPal(){
	paypal.style.display = '';
	creditCard.style.display = 'none';
	bitcoin.style.display = 'none';
}
function payWithBitcoin(){
	bitcoin.style.display = '';
	creditCard.style.display = 'none';
	paypal.style.display = 'none';
}
paymentSelect.addEventListener('change', e => {
	const paymentSelected = e.target.value;
	if( paymentSelected === 'credit card' ){
		payWithCreditCard()
	} else if ( paymentSelected === 'paypal' ){
		payWithPayPal();
	} else if ( paymentSelected === 'bitcoin' ){
		payWithBitcoin();
	} else {

	}
});