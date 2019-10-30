function requestTimeOff () {
    document.getElementById('requestTimeOffForm').addEventListener('submit', saveIssue);
  }

function saveIssue (e) {
    var requestStart = document.getElementById(requestStartInput).value;
    var requestEnd = document.getElementById(requestEndInput).value;
    var requestDesc = document.getElementById(requestDescInput).value;

    document.getElementById('requestTimeOffForm').reset();

    requestTimeOff();

    e.preventDefault();
}
  