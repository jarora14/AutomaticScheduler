function requestTimeOff() {
    console.log("1");
    document.getElementById('requestTimeOffForm').addEventListener('submit', saveTheRequest);
    console.log(userKey);
}

function saveTheRequest() {
    var requestStart = document.getElementById('from_date').value;
    var requestEnd = document.getElementById('to_date').value;
    //var requestDesc = document.getElementById('requestDescInput').value;
    var timeStart = document.getElementById('start').value;
    var timeEnd = document.getElementById('end').value;
    //var submitted = document.getElementById('submitted');
    //var x = 1;
    console.log(userKey);
    write(requestStart, requestEnd, timeStart, timeEnd);

    //var sendData = checkDate(requestStart) && checkDate(requestEnd);

    // if (requestDesc == "") {
    //     requestDesc = "No reason given";
    // }

    // if (sendData == true) {
    //     submitted.innerHTML = '<div class="alert alert-primary" role="alert"> Submitted </div>';

    //     if (x == 1) {
    //         setInterval(function() { submitted.innerHTML = '<div class="alert alert-primary" role="alert"></div>'; }, 3000);
    //         x = 0;
    //     }
    //     //sendData(requestStart, requestEnd, requestDesc);
    // } else {
    //     submitted.innerHTML = '<div class="alert alert-primary" role="alert"> Input Not Valid </div>';

    //     if (x == 1) {
    //         setInterval(function() { submitted.innerHTML = '<div class="alert alert-primary" role="alert"></div>'; }, 3000);
    //         x = 0;
    //     }
    // }

    // document.getElementById('requestTimeOffForm').reset();

    // requestTimeOff();

    // e.preventDefault();
    return true;

}

function write(start, end, tstart, tend) {
    console.log(start + " " + end + " " + tstart + " " + tend + " " + userKey);
    var database = firebase.database();
    var requestRef = database.ref('Requests');
    //var key = getKey();
    var newRequest = requestRef.push({
        date_start: start,
        date_end: end,
        time_start: tstart,
        time_end: tend,
       // user: key,
    });
}

/*
function sendData(reqStart, reqEnd, reqDesc) {

    var reqS = reqStart;
    var reqE = reqEnd;
    var reqD = reqDesc;

    //ToDo: send data to firebase
}
*/
/*
function checkDate(date) {

    var dates = date.split("/");

    var month;
    var day;
    var year;

    if (dates.length != 3) {
        return false;
    }
    try {
        month = parseInt(dates[0], 10);
        day = parseInt(dates[1], 10);
        year = parseInt(dates[2], 10);
    } catch (err) {
        return false;
    }
    if (month > 12 || month < 1) {
        return false;
    }
    if (day > 31 || day < 1) {
        return false;
    }
    if (year > 2100 || year < 2019) {
        return false;
    }

    return true;
}
*/