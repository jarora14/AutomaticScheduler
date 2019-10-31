function requestTimeOff () {
    document.getElementById('requestTimeOffForm').addEventListener('submit', saveIssue);
  }

function saveIssue (e) {
    var requestStart = document.getElementById('requestStartInput').value;
    var requestEnd = document.getElementById('requestEndInput').value;
    var requestDesc = document.getElementById('requestDescInput').value;
    var submitted = document.getElementById('submitted');
    var x = 1;

    sendData(requestStart, requestEnd, requestDesc);

    submitted.innerHTML = '<div class="alert alert-primary" role="alert"> Submitted </div>';
    if (x==1) {
        setInterval(function(){submitted.innerHTML = '<div class="alert alert-primary" role="alert"></div>';}, 3000);
        x = 0;
    }
    document.getElementById('requestTimeOffForm').reset();

    requestTimeOff();

    e.preventDefault();

}

function sendData() {

    var reqS = arguments[0];
    var reqE = arguments[1];
    var reqD = arguments[2];
    
    

}
  