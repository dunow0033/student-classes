class Student {
    constructor(student){
        this.id = student.id;
        this.name = student.name;
    }

    renderStudent(){
        return `
        <h2>${ this.name }</h2>
        <ul data-subject="${this.id}" id="user-subject-${this.id}"></ul>
        <button data-id=${this.id} class="new-subject">Add New Class</button>
        <button class="delete-btn">x</button>
        `
    }
}