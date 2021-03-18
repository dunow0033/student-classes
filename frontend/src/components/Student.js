class Student {
    constructor(student){
        this.id = student.id;
        this.name = student.name;
    }

    renderStudent(){
        return `
        <h2>${ this.name }</h2>
        <p data-subject="user-subject-${this.id}" id="user-subject-${this.id}"></p>
        <button data-id=${this.id} class="new-subject">Add New Class</button>
        <button class="delete-btn">x</button>
        `
    }
}