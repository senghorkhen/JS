
var container = document.getElementById('container');
var row = document.getElementById('row');
var para = document.getElementById('para');

container.addEventListener('click',divContainer);
row.addEventListener('click',divRow);
para.addEventListener('click',paraText);

function divContainer() {
	alert("I am container div");
}
function divRow() {
	alert("I am row div");
}
function paraText() {
	alert(" I am paragraph text");
}