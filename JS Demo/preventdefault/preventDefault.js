/**
* Register event listener
* @variable name: w3Demo
* function name: preventDefaultAction()
* @ID: w3
*/
var w3Demo = document.getElementById('w3');
w3Demo.addEventListener('click',preventDefaultAction);

/**
* Function to prevent default action of element
* @ agument name: event
*/
function preventDefaultAction(event) {
	event.preventDefault();
}