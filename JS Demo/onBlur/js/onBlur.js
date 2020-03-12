
/* *
* Register event listener
* @ID is username
* @event name is on blur
* @function name: onBlur()
*/
document.getElementById('username').addEventListener('blur',onBlur);
/* *
*  function use to background color
* @ID is username
*/
function onBlur() {
	document.getElementById('username').style.backgroundColor = "green";
}
