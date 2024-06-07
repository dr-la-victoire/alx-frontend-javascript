interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  }

  const studentOne: Student = {
    firstName: 'Victory',
    lastName: 'Amadi',
    age: 23,
    location: 'PHC',
    };

    const studentTwo: Student = {
      firstName: 'Gift',
      lastName: 'Sensei',
      age: 24,
      location: 'Nigeria',
      };
const studentList: Student[] = [studentOne, studentTwo];

// Rendering a table with Vanilla Javascript
const table = document.createElement("table");
const tbody = document.createElement("tbody");
// Appending a new row for each element in the array
studentList.forEach((student: Student): void => {
  const row = document.createElement("tr");
  const firstName = document.createElement("td");
  const lastName = document.createElement("td");
  const location = document.createElement("td");

  firstName.textContent = student.firstName;
  lastName.textContent = student.lastName;
  location.textContent = student.location;

  row.appendChild(firstName);
  row.appendChild(lastName);
  row.appendChild(location);

  tbody.appendChild(row);
});

document.body.appendChild(table);

