var attemptLogin = 3; // Variable to count number of attempts.
var adminSetCode = 1234;
var emails = ["test1", "test2", "test3"];
var registered = ["test3"];

// Below function Executes on click of login button.
function validateLogin(){
    var username = document.getElementById("emailLogin").value;
    var password = document.getElementById("passwordLogin").value;
    var form = document.getElementById("form1")
    if ( username == "test1" && password == "test1"){
        //alert ("Login successfully");
        window.location.href = "homeEmpl.html"; // Redirecting to other page.
        return true;
    }
    else{
        attemptLogin --;// Decrementing by one.
        alert("You have left "+attemptLogin+" attempt;");
        // Disabling fields after 3 attempts.
        if( attemptLogin == 0){
            document.getElementById("emailLogin").disabled = true;
            document.getElementById("passwordLogin").disabled = true;
            document.getElementById("submit").disabled = true;
        return false;
        }
    }
}

function validateAdmin(){
    var adminCode = document.getElementById("adminPass").value;
    if (adminCode != adminSetCode){
        alert("Invalid Admin credentials")
        return false;
    }else{
        alert("Welcome, Admin.")
        window.location.href = "homeMng.html"; // Redirecting to other page.
        return true;
    }
}

function validateRegister(){
    var email = document.getElementById("emailRegister").value;
    var password = document.getElementById("passwordRegister").value;
    var password2 = document.getElementById("passwordRegister2").value;

    if ( password2 != password){
        alert ("Passwords do not match.");
        //window.location.href = "homeEmpl.html"; // Redirecting to other page.
        return false;
    }
    else if (!emails.includes(email)){
        alert("Email not verified.")
    }
    else if (registered.includes(email)){
        alert("Email already registered.")
    }
    else{
        alert("Account Created!")
        window.location.href = "index.html"; // Redirecting to other page.
    }
}