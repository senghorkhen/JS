/**
 * Todo Register event
 * @var eventClick
 */
var eventClick = document.getElementById('btn');
eventClick.addEventListener('click',validation);
/**
 * Todo validation form
 * @var username
 * @var password
 */
function validation()
{
    /**
     * @var username string
     */
    var username = document.getElementById('username');
    /**
     * @var password string
     */
    var password = document.getElementById('password');
    /**
     * @var userErrorMessage string
     */
    var userErrorMessage = document.getElementById('userError');
    /**
     * @var userSuccessMessage string
     */
    var userSuccessMessage = document.getElementById('userSuccess');
    /**
     * @var passErrorMessage string
     */
    var passErrorMessage = document.getElementById('passError');
    /**
     * @var passSuccessMessage string
     */
    var passSuccessMessage = document.getElementById('passSuccess');  
    /**
     * Check username if empty field
     */
    if(username.value == "") {
        username.style.borderColor = 'red';
        userErrorMessage.style.display = 'inline';
        userSuccessMessage.style.display = 'none'; 
    } else { // username not empty
        username.style.borderColor = 'green'; 
        userSuccessMessage.style.display = 'inline'; 
        userErrorMessage.style.display = 'none';
    }

    /**
     * Check if password is empty field
     */
    if (password.value == "") {
        password.style.borderColor = 'red';
        passErrorMessage.style.display = 'inline';
        passSuccessMessage.style.display = 'none';   
    }else { // password not empty
        password.style.borderColor = 'green';
        passErrorMessage.style.display = 'none';
        passSuccessMessage.style.display = 'inline';  
    }
}