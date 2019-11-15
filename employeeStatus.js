// Get data from setAvail.js and show it in the table.
let schedule = [
    { Employee: "Pele", Monday: "5:30pm - 7:00pm", Tuesday: "Unavailable", Wednesday: "Unavailable", Thursday: "Unavailable", Friday: "Available", Saturday: "11:00am - 1:00pm", Sunday: "8:00am - 12:00pm", },
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
  
let table = document.querySelector("table.mngSchedule");
 
GenerateTableModule.initialize(table, schedule)

GenerateTableModule.generateTable();
