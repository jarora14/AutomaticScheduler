function makeSchedule() {

    var database = firebase.database();
    var usersRef = database.ref('Users');
    var eventsRef = database.ref('Events');
    var scheduleRef = database.ref('Schedule');
    
    var users = [];
    var i = 0;
    usersRef.once("value", function(snapshot){
        snapshot.forEach(function(childSnapshot){
            users[i] = childSnapshot.val();
            i++;
        })
    })
    
    var events = [];
    var j = 0;
    eventsRef.once("value", function(snapshot){
        snapshot.forEach(function(childSnapshot){
            events[i] = childSnapshot.val();
            i++;
        })
    })

    scheduleRef.push({
        //push days and events
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

