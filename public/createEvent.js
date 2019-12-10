function createTheEvent() {
    console.log("method is called");
    var name = document.getElementById("eventName").value;
    var date = document.getElementById("eventDate").value;
    var start = document.getElementById("eventStart").value;
    var stop = document.getElementById("eventStop").value;
    var database = firebase.database();
    var eventRef = database.ref('Events');
    var usersRef = database.ref('Users');
    var scheduleRef = database.ref('Schedule');

    var newEvent = eventRef.push({
        eventName: name,
        eventDate: date,
        eventStart: start,
        eventStop: stop,
    });
    

    //var users = [];
    var i = 0;
    usersRef.once("value", function(snapshot){
        i = snapshot.numChildren();
    })

    var users = [i];
    var k = 0;
    usersRef.once("value", function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var userData = childSnapshot.val();
            users[k] = userData.user_name;
            console.log(users[k]);
            k++;
        })
    })

    
    scheduleRef.remove();
    var scheduleRefer  = database.ref('Schedule');

    //var events = [];
    var j = 0;
    var currUser = users[j];
    console.log(users[j]);
    eventRef.once("value", function(snapshot){
        snapshot.forEach(function(childSnapshot){
            if (j == 0) {
                currUser = users[1];
            }
            eventData = childSnapshot.val();
            var newSched = scheduleRefer.push({
                event: eventData.eventName,
                //weekDay: eventData.eventDate.getDay(),
                scheduledEmp: currUser,
                eventDate: eventData.eventDate,
                startTime: eventData.eventStart,
    
                //push days and events
            });
            j++;
            if (j>=(i-1)) {
                j = 0;
            } 
            currUser = users[j];
        })
    })
/*
    var k;
    for (k = 0; k < events.length; k++) {
        var day = events[k].date.getDay();
        var newSched = scheduleRef.push({
            event: events[k].eventName,
            weekDay: day,
            scheduledEmp: users[k].user_name,
            eventDate: events[k].eventDate,
            startTime: events[k].eventStart,

            //push days and events
        });


    return true;
    }
    */
}