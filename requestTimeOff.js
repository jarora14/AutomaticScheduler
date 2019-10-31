function requestTimeOff () {
    document.getElementById('requestTimeOffForm').addEventListener('submit', saveIssue());
  }

function saveIssue (e) {
    var requestStart = document.getElementById('requestStartInput').value;
    var requestEnd = document.getElementById('requestEndInput').value;
    var requestDesc = document.getElementById('requestDescInput').value;

    //need to send these^^ as a requestOff object to firebase to store which then can be accessed
    //by admin page to view requests off

    document.getElementById('requestTimeOffForm').reset();

    requestTimeOff();

    e.preventDefault();

}
  