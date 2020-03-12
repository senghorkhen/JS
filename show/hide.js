/**
 * Todo hide and show images
 * @var img1 
 * @var img2
 */
function imgDisplay() 
{
    var img1 = document.getElementById("ps1");
    var img2 = document.getElementById("ps");
    if(img1.style.display === "none") {
        img1.style.display = "block";
        img2.style.display = "none";
    }else {    
        img1.style.display = "none";
        img2.style.display = "block";
    }
}