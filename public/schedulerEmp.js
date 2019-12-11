// Replace schedule with data we get from our database and then format into an array like schedule below.

var database = firebase.database();
    var scheduleRef = database.ref('Schedule');
    var usersRef = database.ref('Users');

    var users = [];
    var q = 0;
    usersRef.once("value", function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var userData = childSnapshot.val();
            users[q] = userData.user_name;
            q++;
        })
    })

    var empScheduled = [];
    var eventStart = [];
    var eventDate = [];
    var k = 0;
    scheduleRef.once("value", function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var userData = childSnapshot.val();
            empScheduled[k] = userData.scheduledEmp;
            eventStart[k] = userData.startTime;
            eventDate[k] = userData.eventDate;
            console.log(empScheduled[k]);
            k++;
        })

    var schedule = [];
    var willSchedule1 = "--";
    var willSchedule2 = "--";
    var willSchedule3 = "--";
    var willSchedule4 = "--";
    var willSchedule5 = "--";
    var willSchedule6 = "--";
    var willSchedule7 = "--";
    var i;
    var z;
    for (i = 0; i < users.length; i ++) {
        for (z = 0; z < empScheduled.length; z++) {
            if (users[i] ==  empScheduled[z]) {
                switch(eventDate[z]) {
                    case "2020-01-01":
                        willSchedule1 = eventStart[z];
                        break;
                    case "2020-01-02":
                        willSchedule2 = eventStart[z];
                        break;
                    case "2020-01-03":
                        willSchedule3 = eventStart[z];
                        break;
                    case "2020-01-04":
                        willSchedule4 = eventStart[z];
                        break;
                    case "2020-01-05":
                        willSchedule5 = eventStart[z];
                        break;
                    case "2020-01-06":
                        willSchedule6 = eventStart[z];
                        break;
                    case "2020-01-07":
                        willSchedule7 = eventStart[z];
                        break;
                        
                }
            }
        }
        schedule[i] = {Employee: users[i], "1/1": willSchedule1, "1/2": willSchedule2, "1/3": willSchedule3, "1/4": willSchedule4, "1/5": willSchedule5, "1/6": willSchedule6, "1/7": willSchedule7};
        willSchedule1 = "--";
        willSchedule2 = "--";
        willSchedule3 = "--";
        willSchedule4 = "--";
        willSchedule5 = "--";
        willSchedule6 = "--";
        willSchedule7 = "--";
    }
/*
let schedule = [
    { Employee: users[1], Monday: "5:30pm - 7:00pm", Tuesday: "Unavailable", Wednesday: "Unavailable", Thursday: "Unavailable", Friday: "Available", Saturday: "11:00am - 1:00pm", Sunday: "8:00am - 12:00pm", },
    { Employee: "Michael Phelps", Monday: "Unavailable", Tuesday: "3:00pm - 8:00pm", Wednesday: "Unavailable", Thursday: "2:00pm - 12:00am", Friday: "8:00am - 11:00am", Saturday: "12:00pm - 5:00pm", Sunday: "7:00am - 9:00am", },
    { Employee: "Babe Ruth", Monday: "Available", Tuesday: "Unavailable", Wednesday: "1:00pm - 4:00pm", Thursday: "8:00am - 4:00pm", Friday: "Unavailable", Saturday: "8:00am - 5:00pm", Sunday: "Available", },
    { Employee: "Muhammad Ali", Monday: "5:00pm - 10:00pm", Tuesday: "12:00pm - 8:00pm", Wednesday: "Available", Thursday: "2:00pm - 5:00pm", Friday: "8:00am - 6:00pm", Saturday: "10:00am - 12:00pm", Sunday: "8:00pm - 12:00am", },
    { Employee: "Tiger Woods", Monday: "7:00am - 4:00pm", Tuesday: "Available", Wednesday: "8:00am - 3:00pm", Thursday: "Unavailable", Friday: "Unavailable", Saturday: "Unavailable", Sunday: "Unavailable", },
    { Employee: "Diego Maradona", Monday: "5:30pm - 7:00pm", Tuesday: "Unavailable", Wednesday: "Unavailable", Thursday: "Unavailable", Friday: "Available", Saturday: "11:00am - 1:00pm", Sunday: "8:00am - 12:00pm", },
    { Employee: "Tony Hawk", Monday: "Unavailable", Tuesday: "3:00pm - 8:00pm", Wednesday: "Unavailable", Thursday: "2:00pm - 12:00am", Friday: "8:00am - 11:00am", Saturday: "12:00pm - 5:00pm", Sunday: "7:00am - 9:00am", },
    { Employee: "Aaron Rodgers", Monday: "Available", Tuesday: "Unavailable", Wednesday: "1:00pm - 4:00pm", Thursday: "8:00am - 4:00pm", Friday: "Unavailable", Saturday: "8:00am - 5:00pm", Sunday: "Available", },
    { Employee: "Lightning McQueen", Monday: "5:00pm - 10:00pm", Tuesday: "12:00pm - 8:00pm", Wednesday: "Available", Thursday: "2:00pm - 5:00pm", Friday: "8:00am - 6:00pm", Saturday: "10:00am - 12:00pm", Sunday: "8:00pm - 12:00am", },
    { Employee: "Novak Djokovic", Monday: "7:00am - 4:00pm", Tuesday: "Available", Wednesday: "8:00am - 3:00pm", Thursday: "Unavailable", Friday: "Unavailable", Saturday: "Unavailable", Sunday: "Unavailable", }
]
*/
const GenerateTableModule = (function() {
    let table = null;
    let data = [];
  
    const initialize = function(tableSelector, arr) {
        table = tableSelector;
        data = arr;
    };
  
    const _generateTableHead = function() {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key in data[0]) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    };
  
    const generateTable = function() {
        for (let element of data) {
            let row = table.insertRow();
            for (key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
        _generateTableHead();
    };
    return { initialize, generateTable };
})();
  
let table = document.querySelector("table.empSchedule");

// Here is where schedule array is being used. 
GenerateTableModule.initialize(table, schedule)

GenerateTableModule.generateTable();



    })



