

function signupClick(){
    document.getElementById("formContent").style.display = "none" 
    document.getElementById("signUpContent").style.display = "inline"
    
   
    

}



function backtoLogin(event){
    
    var firstPassword = document.getElementById("password").value
    var confirmPassword = document.getElementById("confirmPassword").value
    event.preventDefault()



    if (firstPassword === confirmPassword) {
        document.getElementById("signUpContent").style.display = "none" 
        document.getElementById("formContent").style.display = "inline" 
  
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
   
}



    