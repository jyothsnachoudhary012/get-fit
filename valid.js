function myfunction(){

var email = document.forms['form']['email'];
var Password = document.forms['form']['Password'];
}

function func(){
    var email = document.getElementById("email").value;
    var Password = document.getElementById('password').value;
    if(email.value.length >= 8)
    {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        window.location.assign("bmiindex.html")       
        alert("Login Succesfull");
       
    }
   else
    {
        Password.style.border = "1px solid red";
        Pass_error.style.display = "block";
        Password.focus();
        alert("Login Failed");
        return;
    }
}
