function createTheEvent() {
    console.log("method is called");
    var name = document.getElementById("eventName").value;
    var date = document.getElementById("eventDate").value;
    var start = document.getElementById("eventStart").value;
    var stop = document.getElementById("eventStop").value;
    var database = firebase.database();
    var eventRef = database.ref('Events');
    var newEvent = eventRef.push({
        eventName: name,
        eventDate: date,
        eventStart: start,
        eventStop: stop,
    });
    return true;
}