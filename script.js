//grab my checkboxes
const checkboxes = document.querySelectorAll('.inbox input[ type="checkbox"]');

let lastChecked;

//control the checkbox functionality
function handleCheck(e) {
	
	//check to see if the shift key is held down and the box is being checked and not unchecked
	if(e.shiftKey && this.checked){
		//functionality enabling users to shift-click multiple checkboxes goes here
	}
	lastChecked = this;
}

//add event listeners to each checkbox
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));