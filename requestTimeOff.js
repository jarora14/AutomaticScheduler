function requestTimeOff () {
    document.getElementById('requestTimeOffForm').addEventListener('submit', saveIssue);
  }

function saveIssue (e) {
    var requestStart = document.getElementById('requestStartInput').value;
    var requestEnd = document.getElementById('requestEndInput').value;
    var requestDesc = document.getElementById('requestDescInput').value;
    var submitted = document.getElementById('submitted');

    //need to send these^^ as a requestOff object to firebase to store which then can be accessed
    //by admin page to view requests off
    submitted.innerHTML = '<div class="alert alert-primary" role="alert"> Submitted </div>';

    document.getElementById('requestTimeOffForm').reset();

    requestTimeOff();

    e.preventDefault();

}
  