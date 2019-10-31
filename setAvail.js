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

    sendData(mondayStart, mondayEnd, tuesdayStart, tuesdayEnd, wednesdayStart, wednesdayEnd, thursdayStart, thursdayEnd, fridayStart, fridayEnd, saturdayStart, saturdayEnd, sundayStart, sundayEnd, requestDesired, requestNotes);

    submitted.innerHTML = '<div class="alert alert-primary" role="alert"> Submitted </div>';
    if (x==1) {
        setInterval(function(){submitted.innerHTML = '<div class="alert alert-primary" role="alert"></div>';}, 3000);
        x = 0;
    }
    document.getElementById('setAvailabilityForm').reset();

    setAvail();

    e.preventDefault();

}
