
// step -1 add click event handler on submit btn

document.getElementById('btn-submit').addEventListener('click',function(){

    // step -2 get tth email address inside the email input field
    // alwayes remeber to use .value to get text from an input feild

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // step- 3 get password
    // 3.a set id on html elemnet
    // 3.b get the element 
    //  3.c get the value form the element 

    const passwordField = document.getElementById('user-password');
    const passwordValue = passwordField.value ;

    // console.log(email, passwordValue); just check
    // Danger : DON NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE

    // step - 4 verify email and password

    if( email === 'ashimbhowmik239@gmail.com' && passwordValue === '2182000amit'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Please input vaild email & password');
    }



})