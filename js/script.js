/*Interactive Form - Treehouse project 3 in the Full Stack Javascript Techdegree
 *Author: Jordan Kittle
*/

/* When the page loads:
 * 1.) Bring the first field of the form into focus and set variables
 * 2.) Hide the other-title input field
 * 3.) Hide the color options and set the Color: field to 'Please select a T-shirt theme'
*/

const name = document.getElementById('name').focus();
const email = document.getElementById('email');
const themeSelect = document.getElementById('design');
const jobRoleInput = document.getElementById('title');
const otherJobRoleInput = document.getElementById('other-title');
otherJobRoleInput.style.display = 'none';
const colorOptions = document.querySelectorAll('#color option');
const colorSelect = document.querySelector('#color');
hideColors();

//Set even listener on job role and display other-title input if 'other' is selected
jobRoleInput.addEventListener('change', e => {
	if( event.target.value === 'other' ){
		otherJobRoleInput.style.display = '';
	} else {
		otherJobRoleInput.style.display = 'none';
	}
});




const iLoveJsColorOptions = `
  <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
  <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
  <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> 
`;

/*Set theme specific color functions and add event listener to theme select input
 *These functions are to be called whenever a user selects a theme
 *
*/
function hideColors(){
	colorSelect.innerHTML = ``;
	document.querySelector('#shirt-colors label').textContent = 'Please select a T-shirt theme';
}
function displayJsPunsColors(){
	const jsPunsColorOptions = `
	  <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
	  <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
	  <option value="gold">Gold (JS Puns shirt only)</option>
	`;
	colorSelect.innerHTML = jsPunsColorOptions;
	document.querySelector('#shirt-colors label').textContent = 'Color:';
}
function displayILoveJsColors(){
	const iLoveJsColorOptions = `
	  <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
	  <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
	  <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> 
	`;
	colorSelect.innerHTML = iLoveJsColorOptions;
	document.querySelector('#shirt-colors label').textContent = 'Color:';
}

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
});


/*Set event listener on workshop checkboxes and add a running price total
 *Make sure no workshops with conflicting days and times can be selected at the same time
 *Keep a running total of prices
*/
const activityCheckboxes = document.querySelectorAll('.activities input');
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
			} else {
				activityCheckboxes[i].disabled = false;
			}
		}
		const checkBoxPrice = parseInt(activityCheckboxes[i].getAttribute('data-cost') );
		if (activityCheckboxes[i].checked) {
			costOfActivities += checkBoxPrice;
		}
	}
	totalPriceLabel.innerHTML = `<h2>Total: $${costOfActivities}</h2>`;
	totalPrice = costOfActivities;
});


/*Set payment default to credit card and hide other payment options
 *Loop through all payment options and select by value to make sure credit card always selected even if options change
 *"Select Payment" option is set be disabled
*/
const paymentSelect = document.querySelector('#payment');
const paymentOptions = document.querySelectorAll('#payment option');
for (let i = 0; i < paymentOptions.length; i++) {
	if( paymentOptions[i].value === 'credit card' ){
		paymentSelect.selectedIndex = i;
	}
	if( paymentOptions[i].value === 'select method' ){
		paymentOptions[i].disabled = true;
	}
}
const creditCard = document.querySelector('#credit-card');
const paypal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');
paypal.style.display = 'none';
bitcoin.style.display = 'none';


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