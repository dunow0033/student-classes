class Student {
    constructor(student){
        this.id = student.id;
        this.name = student.name;
    }

    renderStudent(){
        return `
        <h2>${ this.name }</h2>
        <button class="new-subject">Add New Class</button>
        <button class="delete-btn">x</button>
        `
    }
}