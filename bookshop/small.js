
// register event
var event = document.getElementById('barcode');
event.addEventListener('keyup',bookShop);

var eventClear = document.getElementById('btn');
eventClear.addEventListener('click',clearData);
/**
 * Sale
 * @var barcodes
 * @var barcode
 */
function bookShop()
{
    /**
     * @var barcodes array
     */
    var barcodes = ['6921734970916','6935777695071','6948514750070'];
    /**
     * @var barcodeLength int
     */
    var barcodeLength = barcodes.length;
    /**
     * @var barcode string
     */
    var barcode = document.getElementById('barcode').value;
    // loop
    for(var i = 0; i < barcodeLength; i++)
    { 
        // check barcode
        if(barcodes[i] == barcode) {
            // check individual barcode
            if(barcode == barcodes[0]) {
                document.getElementById('result').innerHTML =2500;
            }else if(barcode == barcodes[1]) {
                document.getElementById('result').innerHTML = 4500;
            }else if(barcode == barcodes[2]) {
                document.getElementById('result').innerHTML = 1500;
            }else {
                document.getElementById('result').innerHTML = "No product in stock";
            }
            break; // break when barcode is correct (finish loop)
        } else { 
            document.getElementById('result').innerHTML = "No product in stock";
        }
    }
}
/**
 * Todo clear data
 * @var clearData 
 */
function clearData() 
{
    /**
     * @var clearData 
     */
    var clearData = document.getElementById('result');
    clearData.innerHTML = "";
}