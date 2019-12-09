var key;
function requestTimeOff() {
    document.getElementById('requestTimeOffForm').addEventListener('submit', saveTheRequest);
    waitForElement();
}

function saveTheRequest() {

    var requestStart = document.getElementById('from_date').value;
    var requestEnd = document.getElementById('to_date').value;
    var timeStart = document.getElementById('start').value;
    var timeEnd = document.getElementById('end').value;

    key = sessionStorage.getItem('key');
    console.log(key);
    
    write(requestStart, requestEnd, timeStart, timeEnd);
    alert('Request Submitted Successfully');
    return true;

}

function write(start, end, tstart, tend) {
    console.log(start + " " + end + " " + tstart + " " + tend + " " + key);
    var database = firebase.database();
    var requestRef = database.ref('Requests');
    var newRequest = requestRef.push({
        date_start: start,
        date_end: end,
        time_start: tstart,
        time_end: tend,
        user: key,
    });
}

