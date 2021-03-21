let studentsList = document.querySelector('div#students-list')
let newStudentForm = document.querySelector('div#student-form')
let allStudents = document.querySelector('div#all-students')
let details = document.querySelector('#details')
let newStudent = null

let student_id = null
let students = []

const init = () => {
    renderStudents();
}

const renderStudents = () => {
    fetch('http://localhost:3000/students')
        .then(res => res.json())
        .then(data => {
                data.forEach(student => {
                    newStudent = new Student(student);
                    studentsList.innerHTML += newStudent.renderStudent();
                    students.push(newStudent)
            });

            document
                .querySelectorAll('.new-subject')
                .forEach(btn => btn.addEventListener('click', newSubject));
            document
                .querySelectorAll('.student-link')
                .forEach(btn => btn.addEventListener('click', showStudentDetails));
            document
                .querySelectorAll('.delete-btn')
                .forEach(btn => btn.addEventListener('click', deleteSubject));
        });
}

document.querySelector("#new-student").addEventListener('submit', createStudent)
function createStudent(e){
    const name = { 
                    name: e.target.name.value,
                    subjects: [] 
                 }

    let student = new Student(name);

    fetch('http://localhost:3000/students', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(student)
    })
    .then((res) => res.json())
    .then(student => {

        newStudent = new Student(student);
        studentsList.innerHTML += newStudent.renderStudent();

    document
        .querySelectorAll('.new-subject')
        .forEach(btn => btn.addEventListener('click', newSubject));
    document
        .querySelectorAll('.delete-btn')
        .forEach(btn => btn.addEventListener('click', deleteSubject));
    });
}

function newSubject(e){
    student_id = e.target.dataset.id

    const nameSpot = document.getElementById("subject-name")

    fetch(`http://localhost:3000/students/${student_id}`)
        .then(resp => resp.json())
        .then(data => {
            nameSpot.innerHTML = ""
            nameSpot.innerHTML += `<h3>Add New Class For ${ data.name }</h3>`
    })

    document.querySelector('#new-class').addEventListener('submit', function(e){
        let name = {
                        name: e.target.subject.value,
                        student_id
                    }

        fetch(`http://localhost:3000/subjects/`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
                body: JSON.stringify({name}),
            })
            .then(response => response.json())
            .then(subject => {
                students.forEach(student => {
                    if(student.id == student_id){
                        student.subjects.push(subject)
                    }
                   }
                )
            })
        });
    }

function deleteSubject(e){
    subjectId = e.target.dataset.id

    fetch(`http://localhost:3000/subjects/${subjectId}`, {
        method: 'DELETE',
        })
        .then(response => response.json())
        .then(subject => console.log(subject))
        .then((subject) => e.target.parentElement.remove());
}

function showStudentDetails(e){
    const { id } = e.target.dataset;
    console.log(`Item ${id} was clicked`);
    fetch(`http://localhost:3000/students/${id}`)
        .then(res => res.json())
        .then(item => {
            const student = new Student(item);
            details.innerHTML = student.renderStudentDetails();
        })
}

init();