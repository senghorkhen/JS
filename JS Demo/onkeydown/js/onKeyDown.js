
/* *
* Register event listener
* @ID is username
* @event name is on key down
* @function name: onKeyDown()
*/
document.getElementById('username').addEventListener('keydown',onKeyDown);
/* *
*  function use to background color
* @ID is username
*/
function onKeyDown() {
	document.getElementById('username').style.backgroundColor = "green";
}