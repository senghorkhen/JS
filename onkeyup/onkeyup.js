/**
 * Todo keyup on input
 * @var barcode
 * @var result
 */

var event = document.getElementById('barcode');
event.addEventListener('keyup',getBarcode)
function getBarcode() 
{
    var barcode = document.getElementById('barcode').value;
    var result = document.getElementById('result');
    result.innerHTML = barcode;
}