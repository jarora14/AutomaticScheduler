function setAvail () {
    document.getElementById('setAvailabilityForm').addEventListener('submit', saveIssue);
  }

function saveIssue (e) {
    var mondayStart = document.getElementById('mondaytStartInput').value;
    var mondayEnd = document.getElementById('mondayEndInput').value;
    var tuesdayStart = document.getElementById('tuesdayStartInput').value;
    var tuesdayEnd = document.getElementById('tuesdayEndInput').value;
    var wednesdayStart = document.getElementById('wednesdayStartInput').value;
    var wednesdayEnd = document.getElementById('wednesdayEndInput').value;
    var thursdayStart = document.getElementById('thursdayStartInput').value;
    var thursdayEnd = document.getElementById('thursdaydayEndInput').value;
    var fridayStart = document.getElementById('fridayStartInput').value;
    var fridayEnd = document.getElementById('fridayEndInput').value;
    var saturdayStart = document.getElementById('saturdayStartInput').value;
    var saturdayEnd = document.getElementById('saturdayEndInput').value;
    var sundayStart = document.getElementById('sundayStartInput').value;
    var sundayEnd = document.getElementById('sundayEndInput').value;
    var requestDesired = document.getElementById('requestDesiredInput').value;
    var requestNotes = document.getElementById('requestNoteInput').value;
    var submitted = document.getElementById('submitted');
    var x = 1;
    

    submitted.innerHTML = '<div class="alert alert-primary" role="alert"> Submitted </div>';
    if (x==1) {
        setInterval(function(){submitted.innerHTML = '<div class="alert alert-primary" role="alert"></div>';}, 3000);
        x = 0;
    }
    //sendData(mondayStart, mondayEnd, tuesdayStart, tuesdayEnd, wednesdayStart, wednesdayEnd, thursdayStart, thursdayEnd, fridayStart, fridayEnd, saturdayStart, saturdayEnd, sundayStart, sundayEnd, requestDesired, requestNotes);

    document.getElementById('setAvailabilityForm').reset();

    setAvail();

    e.preventDefault();

}

function sendData(mondayStart, mondayEnd, tuesdayStart, tuesdayEnd, wednesdayStart, wednesdayEnd, thursdayStart, thursdayEnd, fridayStart, fridayEnd, saturdayStart, saturdayEnd, sundayStart, sundayEnd, requestDesired, requestNotes) {

    var monS = monStart;
    var monE = monEnd;
    var tueS = tueStart;
    var tueE = tueEnd;
    var wedS = wedStart;
    var wedE = wedEnd;
    var thuS = thuStart;
    var thuE = thuEnd;
    var friS = friStart;
    var friE = friEnd;
    var satS = satStart;
    var satE = satEnd;
    var sunS = sunStart;
    var sunE = sunEnd;
    var reqD = reqDesired; 
    var reqN = reqNotes;

    //Firebase implementation
}

module.exports = setAvail;