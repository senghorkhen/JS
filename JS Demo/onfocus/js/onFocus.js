
/* *
* Register event listener
* @ID is username
* @event name is on focus
* @function name: onFocus()
* @variable name: username
*/
var username = document.getElementById('username');
    username.addEventListener('focus',onFocus);
/* *
*  function use to background color
* @ID is username
*/
function onFocus() {
	document.getElementById('username').style.backgroundColor = "green";
}