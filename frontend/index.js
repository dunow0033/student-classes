let formDiv = document.getElementById("student-form")
let  main = document.querySelector("#main")
document.getElementById("new-student").addEventListener('click', displayStudentForm)

async function renderStudents() { 
    main.innerHTML = ''
    const students = await apiService.fetchStudents()
    students.map(indStudent => {
        const student = new Student(indStudent)
        student.renderStudent()
    })   
}

function displayStudentForm(){
    let html = `
    <form>
        <label>Student Name:</label>
        <input type="text" id="destination">
        <input type="submit">
    </form>
    `
    formDiv.innerHTML = html
    document.querySelector('form').addEventListener('submit', createStudent)
}