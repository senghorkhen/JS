
/* *
* Register event listener
* @ID is username
* @event name is on key up
* @function name: onKeyUp()
*/
document.getElementById('username').addEventListener('keyup',onKeyUp);
/* *
*  function use to background color
* @ID is username
*/
function onKeyUp() {
	document.getElementById('username').style.backgroundColor = "green";
}