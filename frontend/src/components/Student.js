class Student {
    constructor(student){
        this.id = student.id;
        this.name = student.name;
        this.age = student.age;
        this.about = student.about;
        this.subjects = student.subjects;
    }

    renderStudent(){
        return `
        <h2 class="student-link"><a data-id=${this.id} href="#"> ${ this.name } </a></h2>
        <ul style="list-style-type: none;">
            ${this.renderSubjects()}
        </ul>
        <button data-id=${this.id} class="new-subject">Add New Class</button>
        `
    }

    renderStudentDetails(){
        return `
        <h2>${ this.name }</h2>
        <h4>Age: ${ this.age }</h4>
        <h4>About: ${ this.about }</h4>
        `
    }

    renderSubjects(){
        //return this.subjects.map(element => `<li class="subject-link"><a data-id=${element.id} href="#"> ${element.name} </a><button data-id=${element.id} class="delete-btn">x</button></li>` ).join(" ");
        return this.subjects.map(element => `<li class="subject-link"> <span contentEditable="true">${element.name}</span><button data-id=${element.id} class="delete-btn">x</button></li>` ).join(" ");
    }
}