/**
 * Todo validation
 * @var username 
 * @var password
 */
var event = document.getElementById('btn');
event.addEventListener('click',validation);
function validation()
{
    // declare variable
    /**
     * @var username string
     */
    var username = document.getElementById('username');
    username.value;
    /**
     * @var password string
     */
    var password = document.getElementById('password');
    password.value;
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
    // username
    if(username.value == "") {
        username.style.borderColor = 'red';
        userErrorMessage.style.display = 'inline';
        userSuccessMessage.style.display = 'none';
    }else {  
        username.style.borderColor = 'green';
        userErrorMessage.style.display = 'none';
        userSuccessMessage.style.display = 'inline';
        username.style.textTransform = 'uppercase';
    }
    // password
    if(password.value == "") {
        password.style.borderColor = 'red';
        passErrorMessage.style.display = 'inline';
        passSuccessMessage.style.display = 'none';
    }else {
        password.style.borderColor = 'green';
        passErrorMessage.style.display = 'none';
        passSuccessMessage.style.display = 'inline';
    }

}