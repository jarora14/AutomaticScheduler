//just something to get us started. Don't think this will work

//userEmail = document.getElementById("userEmail").value;
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


function schedule(db, userEmail) {

    var database = db;
    var usersRef = database.ref('Users');
    var eventsRef = database.ref('Events');
    var scheduleRef = database.ref('Schedule');
    
    var userData = getUserData(userEmail, database);

    var updateSchedule = scheduleRef.push({
        schedule_event: userData,
    });
    
    

}


function getUserData(userEmail, db){
    var database = db;
    var usersRef = database.ref('Users');
    usersRef.once("value", function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var childData = childSnapshot.val();
        });
    });
    return childData;
}

module.exports=getUserData;