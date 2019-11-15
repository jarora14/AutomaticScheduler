var attemptLogin = 3; // Variable to count number of attempts.
var adminSetCode = 1234;
var emails = ["test1", "test2", "test3"];
var registered = ["test3"];
var firebaseConfig = {
    apiKey: "AIzaSyADFcVF0FfSzIyZjCL0T8Wf1jH9NA_tPqM",
    authDomain: "realtimedatabase-d0a3e.firebaseapp.com",
    databaseURL: "https://realtimedatabase-d0a3e.firebaseio.com",
    projectId: "realtimedatabase-d0a3e",
    storageBucket: "realtimedatabase-d0a3e.appspot.com",
    messagingSenderId: "74578194003",
    appId: "1:74578194003:web:302a3001f78fd4ee84a0a6",
    measurementId: "G-QVGMEM66ZC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



// Below function Executes on click of login button.
function validateLogin(){
    var username = document.getElementById("emailLogin").value;
    var password = document.getElementById("passwordLogin").value;
    var form = document.getElementById("form1")
    verifyUserCredentials(username, password, function(bool){
      if (bool){
          alert("Login successful");
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
    });
}

function writeUserData(userEmail, Password) {
    var database = firebase.database();
    var usersRef = database.ref('Users');
    var newUser = usersRef.push({
        user_email: userEmail,
        user_password: Password,
    });
    var key = newUser.key;//unique key
    console.log(key);
}

function checkUserExists(userEmail, Password, callback){
    var database = firebase.database();
    var usersRef = database.ref('Users');
    var exists = false;
    usersRef.once("value", function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var childData = childSnapshot.val();
            var childEmail = childData.user_email;
            if (childEmail == userEmail) {
              exists = true;
            }
        });
        console.log(exists);
        callback(exists);
    });
}

function verifyUserCredentials(userEmail, Password, callback){
    var database = firebase.database();
    var usersRef = database.ref('Users');
    var exists = false;
    usersRef.once("value", function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var childData = childSnapshot.val();
            var childEmail = childData.user_email;
            var childPassword = childData.user_password;
            if (childEmail == userEmail && childPassword == Password) {
              exists = true;
            }
        });
        console.log(exists);
        callback(exists);
    });
}

function validateAdmin(){
    var adminCode = document.getElementById("adminPass").value;
    console.log("TEST");
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
    checkUserExists(email,password, function(bool){
        if ( password2 != password){
            alert ("Passwords do not match.");
            return false;
        }
        //Ignore Email Authentication for now. Will add firebase auth
        /*
        else if (!emails.includes(email)){
            alert("Email not verified.")
            return false;
        }
        */
        else if (bool){
            alert("Email already registered.")
            return false;
        }
        else{
            writeUserData(email,password);
            alert("Account Created!")
            window.location.href = "index.html";
            return true;
        }
    });
}