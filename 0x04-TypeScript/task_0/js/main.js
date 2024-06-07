var studentOne = {
    firstName: 'Victory',
    lastName: 'Amadi',
    age: 23,
    location: 'PHC',
};
var studentTwo = {
    firstName: 'Gift',
    lastName: 'Sensei',
    age: 24,
    location: 'Nigeria',
};
var studentList = [studentOne, studentTwo];
// Rendering a table with Vanilla Javascript
var table = document.createElement("table");
var tbody = document.createElement("tbody");
// Appending a new row for each element in the array
studentList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstName = document.createElement("td");
    var lastName = document.createElement("td");
    var location = document.createElement("td");
    firstName.textContent = student.firstName;
    lastName.textContent = student.lastName;
    location.textContent = student.location;
    row.appendChild(firstName);
    row.appendChild(lastName);
    row.appendChild(location);
    tbody.appendChild(row);
});
document.body.appendChild(table);
