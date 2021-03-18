let studentsList = document.querySelector('div#students-list')
let newStudentForm = document.querySelector('div#student-form')
let allStudents = document.querySelector('div#all-students')
document.querySelector("#new-student").addEventListener('click', displayStudentForm)
let student_id = null
let list = null
let students = []

const init = () => {
    renderStudents();
}

const renderStudents = () => {
    newStudentForm.innerHTML = "";
    studentsList.innerHTML = "";
    fetch('http://localhost:3000/students')
        .then(res => res.json())
        .then(data => {
                data.forEach(student => {
                    const newStudent = new Student(student);
                    studentsList.innerHTML += newStudent.renderStudent();
                    students.push(newStudent)
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

function createStudent(e){
    e.preventDefault()

    const name = { 
                    name: e.target.name.value,
                    subjects: [] 
                 }

    let student = new Student(name);

    submitStudent(student);
    clearStudentForm()
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
    list = document.getElementById(`user-subject-"${student_id}"`)

    let html = `
    <form>
        <p id="subject-name"></p>
        <input type="text" id="subject" name="subject" placeholder="Add Class"><br>
        <input type="submit">
    </form>
    `
    studentsList.innerHTML = "";
    newStudentForm.innerHTML = "";
    studentsList.innerHTML += html;

    const nameSpot = document.getElementById("subject-name")

    fetch(`http://localhost:3000/students/${student_id}`)
        .then(resp => resp.json())
        .then(data => {
            nameSpot.innerHTML += `Add a new class for ${ data.name }`
    })

    document.querySelector('form').addEventListener('submit', function(e){
        //create a new Subject object and attach it to the correct student
        //use fetch post to send new Subject to the Rails API backend
        //put new subject on the DOM on the correct student's box
        //use getElementById to find the form element

        e.preventDefault()

        //console.log(students)

        const name = {
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
            .then(data => {
                let student = students.find(student => student.id == student_id)
                students.forEach(student => {
                    if(student.id == student_id){
                        student.subjects.push(data)
                    }
                })
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
        });

        renderStudents()
    })
}

function createSubject(e, id){
    console.log("hi")
}

function deleteSubject(e){
    console.log("delete")
}

function clearStudentForm() {
    newStudentForm.innerHTML = ""
}

    // const name = { name: subjectName, studentId: id }

    // let subject = new Subject(name);

    // submitSubject(subject);
    // //clearSubjectForm()

function submitSubject(subject){
    console.log(subject);
}

init();
