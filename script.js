

function signupClick(){
    document.getElementById("formContent").style.display = "none" 
    document.getElementById("signUpContent").style.display = "inline"
    
   
    

}



function backtoLogin(){
    document.getElementById("signUpContent").style.display = "none" 
    document.getElementById("formContent").style.display = "inline" 
    var firstPassword = document.getElementById("password").value
    var confirmPassword = document.getElementById("confirmPassword").value



    if (firstPassword === confirmPassword) {
  
      }else {
        alert("Passwords don't match. Please try again.");
      }
  


}



function randomPassword(event) {
    event.preventDefault()

    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    var finalpassword = '';
    for ( var i = 0; i < 12; i++ ) {
        finalpassword += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    console.log(finalpassword)
    document.getElementById("password").value = finalpassword
    document.getElementById("confirmPassword").value = finalpassword
}



    