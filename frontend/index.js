let formDiv = document.getElementById("student-form")
document.getElementById("new-student").addEventListener('click', displayStudentForm)

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