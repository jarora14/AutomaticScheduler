function requestTimeOff () {
    document.getElementById('requestTimeOffForm').addEventListener('submit', saveIssue);
  }

function saveIssue (e) {
    var requestStart = document.getElementById('requestStartInput').value;
    var requestEnd = document.getElementById('requestEndInput').value;
    var requestDesc = document.getElementById('requestDescInput').value;
    var submitted = document.getElementById('submitted');
    var x = 1;

    var sendData = checkDate(requestStart) && checkDate(requestEnd);

    if (sendData == true) {
        sendData(requestStart, requestEnd, requestDesc);

        submitted.innerHTML = '<div class="alert alert-primary" role="alert"> Submitted </div>';

        if (x==1) {
            setInterval(function(){submitted.innerHTML = '<div class="alert alert-primary" role="alert"></div>';}, 2000);
            x = 0;
        }
    }
    else {
        submitted.innerHTML = '<div class="alert alert-primary" role="alert"> Input Not Valid </div>';

        if (x==1) {
            setInterval(function(){submitted.innerHTML = '<div class="alert alert-primary" role="alert"></div>';}, 2000);
            x = 0;
        }
    }

    document.getElementById('requestTimeOffForm').reset();

    requestTimeOff();

    e.preventDefault();

}

function sendData() {

    var reqS = arguments[0];
    var reqE = arguments[1];
    var reqD = arguments[2];

    //ToDo: send data to firebase
}

function checkDate(date) {

    var dates = date.split("/");

    var month;
    var day;
    var year;

    if (dates.length != 3){
        return false;
    }
    try {
        month = parseInt(dates[0], 10);
        day = parseInt(dates[1], 10);
        year = parseInt(dates[2], 10);
    }
    catch (err) {
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
  