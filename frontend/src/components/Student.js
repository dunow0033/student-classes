class Student {
    constructor(student){
        this.id = student.id;
        this.name = student.name;
        this.subjects = student.subjects;
    }

    renderStudent(){
        return `
        <h2>${ this.name }</h2>
        <ul style="list-style-type: none;">
            ${this.renderSubjects()}
        </ul>
        <button data-id=${this.id} class="new-subject">Add New Class</button>
        `
    }

    renderSubjects(){
        return this.subjects.map(element => `<li>${element.name} <button data-id=${element.id} class="delete-btn">x</button></li>` ).join(" ");
    }
}