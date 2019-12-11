var list = document.getElementById('demo');
var names = [];

function firstFunction(_callback){
    var database = firebase.database();
    var usersRef = database.ref('Events');
    list.innerHTML = '';
  
    var i = 0;
    usersRef.once("value", function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            var eventName = childData.eventName;
            var eventDate= childData.eventDate;
            var eventStart= childData.eventStart;
            var eventStop = childData.eventStop;


            var entry = document.createElement('li');  
            entry.appendChild(document.createTextNode(eventName));
            
            var subEntry = document.createElement('li');  
            subEntry.appendChild(document.createTextNode("Date:  "));
            subEntry.appendChild(document.createTextNode(eventDate));
            subEntry.appendChild(document.createTextNode("--"));
            subEntry.appendChild(document.createTextNode("Start:  "));
            subEntry.appendChild(document.createTextNode(eventStart));
            subEntry.appendChild(document.createTextNode("--"));
            subEntry.appendChild(document.createTextNode("Stop:  "));
            subEntry.appendChild(document.createTextNode(eventStop));
            
          
            
            entry.appendChild(subEntry);
            list.appendChild(entry);
            elem = document.createElement("hr"); //this will create a new element

            /* Use setAttribute to define the property and values you'd like give the element */

            elem.setAttribute("width", "fit-content");

            /* Then you'll need to add the element to the page */

            list.appendChild(elem);
            
        });
       
    });
    
    _callback();  
    return names;  
}

function getEvents(){
    // call first function and pass in a callback function which
    // first function runs when it has completed
   
    firstFunction(function() {
        console.log('huzzah, I\'m done!');
    });  
}

