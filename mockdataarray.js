const students = [
    { id: 1, name: "Sei", course: "BSIT", year: 1, age: 20, enrolled: true },
    { id: 2, name: "Anna", course: "BSN", year: 2, age: 21, enrolled: true },
    { id: 3, name: "Muta", course: "BSN", year: 2, age: 19, enrolled: false },
    { id: 4, name: "Bucay", course: "BSIT", year: 4, age: 19, enrolled: true },
    { id: 5, name: "Neeh", course: "BSIT", year: 4, age: 19, enrolled: true },
    { id: 6, name: "Kyla", course: "BSHM", year: 1, age: 18, enrolled: false },
    { id: 7, name: "Lance", course: "BSIT", year: 2, age: 20, enrolled: true },
    { id: 8, name: "Mika", course: "BSN", year: 3, age: 22, enrolled: true },
    { id: 9, name: "Jiro", course: "BSHM", year: 2, age: 19, enrolled: false },
    { id: 10, name: "Yuna", course: "BSIT", year: 3, age: 21, enrolled: true },
    { id: 11, name: "Kyle", course: "BSN", year: 1, age: 18, enrolled: true },
    { id: 12, name: "Rhea", course: "BSHM", year: 4, age: 23, enrolled: false },
    { id: 13, name: "Zein", course: "BSIT", year: 1, age: 19, enrolled: true },
    { id: 14, name: "Aira", course: "BSN", year: 3, age: 20, enrolled: false },
    { id: 15, name: "Ren", course: "BSIT", year: 2, age: 22, enrolled: true }
];

// Display all students
// students.forEach(student => {
//     console.log(`${student.name} - ${student.course} - Year ${student.year}`)
// });

// Get enrolled students name
// const enrolled = students.filter(student => student.enrolled === true)

// for (const student of enrolled) {
//     console.log(student.name)
// }

//Search for a student
// const search = students.find(student => student.name === "Mika")

// console.log(search)

//Get students names
// const studentsName = students.map(student => student.name)
// console.log(studentsName)

//Check Enrollment
// const check = students.some(student => student.enrolled === false)
// console.log(check)

//Check students ages
// const ages = students.every(student => student.age >= 18)
// console.log(ages)

//Sort by ages
const ranking = students.sort((a, b) => b.age - a.age)
console.log("\n==== SORT BY AGES ====")
ranking.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name} - ${student.age}`)
});

//Calculate total age
// let total = 0
// const totalAge = students.reduce((total, student) => {
    
// })
// console.log(totalAge)
