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
const otherJobRoleInput = document.getElementById('other-title').style.display = 'none';
const colorOptions = document.querySelectorAll('#color option');
const colorSelect = document.querySelector('#color');
hideColors();




const iLoveJsColorOptions = `
  <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
  <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
  <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> 
`;

/*Set theme specific color functions and add event listener to Theme select
 *These functions are to be called whenever a user selects a theme
 *
*/
function hideColors(){
	colorSelect.innerHTML = `
	<option value="Please select a color theme">Please Select a color theme</option>
`;
}
function displayJsPunsColors(){
	const jsPunsColorOptions = `
	  <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
	  <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
	  <option value="gold">Gold (JS Puns shirt only)</option>
	`;
	colorSelect.innerHTML = jsPunsColorOptions;
}
function displayILoveJsColors(){
	const iLoveJsColorOptions = `
	  <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
	  <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
	  <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> 
	`;
	colorSelect.innerHTML = iLoveJsColorOptions;
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
/*	for( let i = 0; i < themeOptions.length; i++ ){
		if( themeOptions ){

		} else {

		}
	}*/
});