function setTheAvailability() {
    console.log("method is called");
    var mondayStart = document.getElementById('mondayStart').value;
    var mondayEnd = document.getElementById('mondayStop').value;
    var tuesdayStart = document.getElementById('tuesdayStart').value;
    var tuesdayEnd = document.getElementById('tuesdayStop').value;
    var wednesdayStart = document.getElementById('wednesdayStart').value;
    var wednesdayEnd = document.getElementById('wednesdayStop').value;
    var thursdayStart = document.getElementById('thursdayStart').value;
    var thursdayEnd = document.getElementById('thursdayStop').value;
    var fridayStart = document.getElementById('fridayStart').value;
    var fridayEnd = document.getElementById('fridayStop').value;
    var saturdayStart = document.getElementById('saturdayStart').value;
    var saturdayEnd = document.getElementById('saturdayStop').value;
    var sundayStart = document.getElementById('sundayStart').value;
    var sundayEnd = document.getElementById('sundayStop').value;
    var requestDesired = document.getElementById('numHours').value;
    var database = firebase.database();
    var eventRef = database.ref('Availability');
    var newEvent = eventRef.push({
        mS: mondayStart,
        mE: mondayEnd,
        tS: tuesdayStart,
        tE: tuesdayEnd,
        wS: wednesdayStart,
        wE: wednesdayEnd,
        thS: thursdayStart,
        thE: thursdayEnd,
        fS: fridayStart,
        fE: fridayEnd,
        sS: saturdayStart,
        sE: saturdayEnd,
        suS: sundayStart,
        suE: sundayEnd,
        desiredHours: requestDesired,
    });
    return true;
}