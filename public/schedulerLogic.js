function makeSchedule() {

    var database = firebase.database();
    var usersRef = database.ref('Users');
    var eventsRef = database.ref('Events');
    var availRef = database.ref('Availability');
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
    eventsRef.once("value", function(snapshot){
        snapshot.forEach(function(childSnapshot){
            events[i] = childSnapshot.val();
            i++;
        })
    })

    var i;
    for (i = 0; i < events.length; i++) {
        var weekDay = events[i].date.getDay();
        var newSched = scheduleRef.push({
            event: events[i].eventName,
            weekDay: weekDay,
            scheduledEmp: users[i].user_name,
            eventDate: events[i].eventDate,
            startTime: events[i].eventStart,

            //push days and events
        });

        return true;
    }

}
