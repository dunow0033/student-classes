class Student {
    constructor(student){
        this.id = student.id;
        this.name = student.name;
        this.subjects = student.subjects;
    }

    renderStudent(){
        return `
        <h2>${ this.name }</h2>
        <ul>
            ${this.renderSubjects()}
        </ul>
        <button data-id=${this.id} class="new-subject">Add New Class</button>
        `
    }

    renderSubjects(){
        return this.subjects.map(element =>  `<li>${element.name}</li><button class="delete-btn">x</button>` );
    }
}