function makeSchedule() {

    var database = firebase.database();
    var usersRef = database.ref('Users');
    var eventsRef = database.ref('Events');
    var scheduleRef = database.ref('Schedule');

    
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

    

    var scheduleRefer  = database.ref('Schedule');
    scheduleRef.remove();

    var j = 0;
    var currUser = users[j];
    console.log(users[j]);
    eventsRef.once("value", function(snapshot){
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

    
}
