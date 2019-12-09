function makeSchedule() {

    var database = firebase.database();
    var usersRef = database.ref('Users');
    var eventsRef = database.ref('Events');
    var availRef = database.ref('Availability');

    
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

    var i;
    var j;
    for (i = 0; i < events.length; i++) {
        var employee;
        var weekDay = events[i].date.getDay();
        for (j = 0; j < users.length; j++) {
            if (users[i])
        }
        scheduleRef.push({
            event: events[i].eventName,
            scheduledEmp: 

            //push days and events
        });
    }

    
    
    

}
