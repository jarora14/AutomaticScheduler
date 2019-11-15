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