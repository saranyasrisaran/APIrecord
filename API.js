let studentDetails=[
    {Name:"Saranya",
    deg:"MCA",
    college:"SRM",
    place:"Chennai"},
    {Name:"Sridhar",
    deg:"CSC",
    college:"SRC",
    place:"Trichy"},
    {Name:"Sanjay",
    deg:"BTECH",
    college:"Sairam",
    place:"Chennai"},
    {Name:"Dharanya",
    deg:"MSC",
    college:"SSM",
    place:"Chennai"},
    {Name:"Srisaran",
    deg:"BCA",
    college:"MAM",
    place:"Trichy"},
    {Name:"Karthiga",
    deg:"BSC",
    college:"Ramakrishana",
    place:"Trichy"},
    {Name:"Vanitha",
    deg:"MBA",
    college:"SRC",
    place:"Chennai"},
    {Name:"Pushpalatha",
    deg:"BCOM",
    college:"SRM",
    place:"Chennai"},
];

console.log(studentDetails.length)

 const displayStudent  = (student) => {
    return `
    <tbody>
        <td>${student.Name}</td>
        <td>${student.deg}</td>
        <td>${student.college}</td>
        <td>${student.place}</td>
    </tbody>
    `
}

    


let febBatchUI=studentDetails.map((student) => displayStudent(student))
// console.log(febBatchUI)
let container =document.getElementById('student')
container.innerHTML=febBatchUI.join(' ')