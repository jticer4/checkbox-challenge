//grab my checkboxes
const checkboxes = document.querySelectorAll('.inbox input[ type="checkbox"]');

let lastChecked;

//control the checkbox functionality
function handleCheck(e) {
	//marks the checkboxes in between the last checked and checked boxes
	let inBetween = false;

	//check to see if the shift key is held down and the box is being checked and not unchecked
	if(e.shiftKey && this.checked){
		//functionality enabling users to shift-click multiple checkboxes goes here
		//select all checkboxes between the last checked and checked boxes
		checkboxes.forEach(checkbox =>{
			console.log(checkbox);
			if (checkbox === this || checkbox === lastChecked) {
				//flag variable
				inBetween = !inBetween;
				console.log("starting to check them in between")
			}
			if(inBetween){
				checkbox.checked = true;
			}
		});
	}
	lastChecked = this;
}

//add event listeners to each checkbox
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));