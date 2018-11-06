//grab my checkboxes
const checkboxes = document.querySelectorAll('.inbox input[ type="checkbox"]');

//control the checkbox functionality
function handleCheck(e) {
	console.log(e);
}

//add event listeners to each checkbox
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));