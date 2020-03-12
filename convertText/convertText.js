/**
 * Todo Register event
 * @eventUpper
 * @eventLower
 */
var eventUpper = document.getElementById('uppercase');
eventUpper.addEventListener('keyup',uppercaseConvertor);

var eventLower = document.getElementById('lowercase');
eventLower.addEventListener('keyup',lowercaseConvertor);

/**
 * Todo convert to upppercase
 * @var uppercase  
 */
function uppercaseConvertor()
{
   /**
    * @var uppercase string
    */
     var uppercase = document.getElementById('uppercase');
     uppercase.style.textTransform = 'uppercase';
}
/**
 * Todo convert to lowercase 
 * @var lowercase
 */
function lowercaseConvertor()
{
    /**
     * @var lowercase string
     */
     var lowercase = document.getElementById('lowercase');
     lowercase.style.textTransform = 'lowercase';
}