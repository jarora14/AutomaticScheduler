var list = document.getElementById('output');
var names = [];

function pullRequests() {
    var d = {};
    var database = firebase.database();
    var usersRef = database.ref('Users');
    usersRef.once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            var id = childSnapshot.key;
            var name = childData.user_name;
            d[id] = name;
        });
    });
    var requestsRef = database.ref('Requests');
    requestsRef.once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var dict = {};
            var childData = childSnapshot.val();
            var dateStart = childData.date_start;
            var dateEnd = childData.date_end;
            var timeStart = childData.time_start;
            var timeEnd = childData.time_end;
            var user = childData.user;
            var username = d[user];

            var entry = document.createElement('li');
            entry.appendChild(document.createTextNode(username));

            var subEntry = document.createElement('li');
            subEntry.appendChild(document.createTextNode("Break Start Date:  "));
            subEntry.appendChild(document.createTextNode(dateStart));
            subEntry.appendChild(document.createTextNode("  --  "));
            subEntry.appendChild(document.createTextNode("Break End Date:  "));
            subEntry.appendChild(document.createTextNode(dateEnd));
            subEntry.appendChild(document.createTextNode("  --  "));
            subEntry.appendChild(document.createTextNode("Break Start Time:  "));
            subEntry.appendChild(document.createTextNode(timeStart));
            subEntry.appendChild(document.createTextNode("  --  "));
            subEntry.appendChild(document.createTextNode("Break End Time:  "));
            subEntry.appendChild(document.createTextNode(timeEnd));



            entry.appendChild(subEntry);
            list.appendChild(entry);
            elem = document.createElement("hr"); //this will create a new element

            /* Use setAttribute to define the property and values you'd like give the element */

            elem.setAttribute("width", "fit-content");

            /* Then you'll need to add the element to the page */

            list.appendChild(elem);
        });
    });
    return names;
}
