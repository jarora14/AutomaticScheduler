function createTheEvent() {
    console.log("method is called");
    var name = document.getElementById("eventName").value;
    var date = document.getElementById("eventDate").value;
    var start = document.getElementById("eventStart").value;
    var stop = document.getElementById("eventStop").value;
    var database = firebase.database();
    var eventRef = database.ref('Events');
    var usersRef = database.ref('Uesrs');
    var scheduleRef = database.ref('Schedule');

    var newEvent = eventRef.push({
        eventName: name,
        eventDate: date,
        eventStart: start,
        eventStop: stop,
    });
    

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