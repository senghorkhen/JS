/**
 * Register event
 */
var event = document.getElementById('btn');
event.addEventListener('click',submitData);
/**
 * Todo submit data
 * @var username
 * @var email
 * @var gender
 * @var fruit
 * @var subject
 * @var message
 */
function submitData()
{
    /**
     * Declaration variable
     * @var username string
     */
    var username = document.getElementById('username').value;
    /**
     * @var email string
     */
    var email = document.getElementById('email').value;
    /**
     * @var gender string
     */
    var gender = document.getElementsByName('gender');
    /**
     * @var fruit string
     */
    var fruit = document.getElementById('fruit').value;
    /**
     * @var subject string
     */
    var subject = document.getElementsByClassName('subject');
    /**
     * @var message string
     */
    var message = document.getElementById('sms').value;
    /**
     * Get username;
     */
    document.getElementById('getUsername').innerHTML = username;
    /**
     * Get email
     */
    document.getElementById('getEmail').innerHTML = email;
    /**
     * Get gender
     */
    for(var i = 0; i < gender.length; i++) {
        if(gender[i].checked) {
            document.getElementById('getGender').innerHTML = gender[i].value;
            break;
        }
    }
    /**
     * Get subject
     * @var subjects string
     */
    var subjects = "";
    for(var j = 0; j < subject.length; j++) {
        if(subject[j].checked == true) {
           subjects +=  subject[j].value + " ,";
        }
    }
    document.getElementById('getSubject').innerHTML = subjects;

    /**
     * Get fruit
     */
    document.getElementById('getFruit').innerHTML = fruit;
    /**
     * Get Message
     */
    document.getElementById('getMessage').innerHTML = message;
}