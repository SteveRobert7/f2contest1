

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  const studentsOver50 = arr
    .filter((student) => student.marks > 50)
    .map((student) => console.log(student));
}

function PrintStudentsbyForEach() {
  arr.forEach((student) => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function addData() {
  const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(newStudent);
}

function removeFailedStudent() {
  const passedStudents = arr.filter((student) => student.marks >= 50);
  console.log(passedStudents);
}

function concatenateArray() {
  const newArray = [
    { id: arr.length + 1, name: "Japan", age: "22", marks: 49 },
    { id: arr.length + 2, name: "Afin", age: "24", marks: 55 },
    { id: arr.length + 3, name: "Ottakam", age: "21", marks: 61 },
  ];

  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}
