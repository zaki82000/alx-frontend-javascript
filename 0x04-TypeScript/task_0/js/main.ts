interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
let student1: Student = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 20,
    location: "New York"
};

let student2: Student = {
    firstName: "Bob",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};
  let studentsList: Student[] = [student1, student2];

const stud_table = document.createElement("table");
const stud_body = document.createElement("tbody");

studentsList.forEach((list) => {
  const studFirstName = document.createElement("td");
  const studLocation = document.createElement("td");
  const tableRow = document.createElement("tr");

  studFirstName.textContent = list.firstName;
  studLocation.textContent = list.location;
  tableRow.appendChild(studFirstName);
  tableRow.appendChild(studLocation);
  stud_body.appendChild(tableRow);
});

stud_table.appendChild(stud_body);
document.body.appendChild(stud_table);