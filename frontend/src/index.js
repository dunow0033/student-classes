let studentsList = document.querySelector('div#students-list')
let newStudentForm = document.querySelector('div#student-form')
let allStudents = document.querySelector('div#all-students')
document.querySelector("#new-student").addEventListener('click', displayStudentForm)

const init = () => {
    renderStudents();
}

const renderStudents = () => {
    studentsList.innerHTML = "";
    fetch('http://localhost:3000/students')
        .then(res => res.json())
        .then(data => {
                data.forEach(student => {
                    const newStudent = new Student(student);
                    studentsList.innerHTML += newStudent.renderStudent();
            });

            document
                .querySelectorAll('.new-subject')
                .forEach(btn => btn.addEventListener('click', newSubject));
            document
                .querySelectorAll('.delete-btn')
                .forEach(btn => btn.addEventListener('click', deleteSubject));
        });
}

document.querySelector("#all-students").addEventListener('click', renderStudents)

function displayStudentForm(){
    let html = `
    <form>
        <br>
        <input type="text" id="name" placeholder="Student Name"><br>
        <input type="submit">
    </form>
    `
    newStudentForm.innerHTML = html
    document.querySelector('form').addEventListener('submit', createStudent)
}

function submitStudent(data){
    fetch('http://localhost:3000/students', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then(data => {
        studentsList.innerHTML += `
        <h2>${ data.name }</h2>
        <button class="new-subject">Add New Class</button>
        <button class="delete-btn">x</button>
    `
    });
}

init();

function deleteSubject(e){
    console.log("delete")
}

function clearStudentForm() {
    newStudentForm.innerHTML = ""
}

function createStudent(e){
    e.preventDefault()

    const name = { name: e.target.name.value }

    let student = new Student(name);

    submitStudent(student);
    clearStudentForm()
}

function newSubject(e){
    const id = e.target.dataset.id

    let html = `
    <form id="subjectForm">
        <p id="name"></p>
        <input type="text" id="subject" placeholder="Add Class"><br>
        <input type="submit">
    </form>
    `
    studentsList.innerHTML = "";
    newStudentForm.innerHTML = "";
    studentsList.innerHTML += html;

    const nameSpot = document.querySelector("p#name")

    fetch(`http://localhost:3000/students/${id}`)
        .then(resp => resp.json())
        .then(data => {
            nameSpot.innerHTML += `Add a new class for ${ data.name }`
        })
    //document.querySelector('form#subjectForm').addEventListener('submit', createSubject(e, id, nameSpot))

    document.querySelector('form#subjectForm').addEventListener('submit', function(e){
        e.preventDefault()

        console.log(e.target.querySelector("#subject").value)
    })
}

    // const name = { name: subjectName, studentId: id }

    // let subject = new Subject(name);

    // submitSubject(subject);
    // //clearSubjectForm()

// async createNewSubject(subject){
//     let configObj = {
//         method: 'POST',
//         body: JSON.stringify(subject),
//         headers: {
//             'Content-type': 'application/json',
//             'Accept': 'application/json'
//         }
//     }
//     let resp = await fetch(this.baseURL + '/subjectss', configObj)
//     let data = resp.json()
//     return data
// }

function submitSubject(subject){
    console.log(subject);
}