const studentsList = document.getElementById('students-list')
let formDiv = document.getElementById('student-form')
document.getElementById("new-student").addEventListener('click', displayStudentForm)

fetch('http://localhost:3000/students')
.then(res => res.json())
.then(data => renderStudents(data));
    // data.forEach(studentObject => {
    //     const newStudent = new Student(studentObject)
    //     studentsList.innerHTML += newStudent.renderStudents(data));

function renderStudents(students){
    students.forEach(student => {
        studentsList.innerHTML += `
            <h2>${ student.name }</h2>
            <button>Add New Class</button>
            <button>x</button>
        `
    });
}

function displayStudentForm(){
    let html = `
    <form>
        <br>
        <input type="text" id="name" placeholder="Student Name"><br>
        <input type="submit">
    </form>
    `
    formDiv.innerHTML = html
    document.querySelector('form').addEventListener('submit', createStudent)
}

function displaySubjectForm(){
    let html = `
    <form>
        <br>
        <input type="text" id="name" placeholder="Add Class"><br>
        <input type="submit">
    </form>
    `
    studentsList.innerHTML = "";
    formDiv.innerHTML = "";
    studentsList.innerHTML += html;
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
        <button>Add New Class</button>
        <button>x</button>
    `
    })
}

function clearForm() {
    formDiv.innerHTML = ""
}

function createStudent(e){
    e.preventDefault()
   let student = new Student(e.target.name.value);

    submitStudent(student);
    clearForm()
}