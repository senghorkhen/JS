
/* *
* Register event listener
* @ID is para
* @event name is mouse over
* @function name: onMouseOver()
*/
document.getElementById('para').addEventListener('mouseover',onMouseOver);
/* *
*  function use to display text
* @ID is para
*/
function onMouseOver() {
	document.getElementById('para').innerHTML = "Banteaymeanchey province is good for live when I am old";
}