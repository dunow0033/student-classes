class Student {
    constructor(student){
        this.id = student.id;
        this.name = student.name;
        this.subjects = student.subjects;
    }

    renderStudent(){
        return `
        <h2>${ this.name }</h2>
        <ul data-subject="${this.id}" id="user-subject"></ul>
        <button data-id=${this.id} class="new-subject">Add New Class</button>
        <button class="delete-btn">x</button>
        `
    }

    // renderStudent(){
    //     return `
    //     <h2>${ this.name }</h2>
    //     this.subjects.forEach(subject => {
    //         studentsList += `
    //             <li>${subject.name}</li>
    //         `
    //     })
    //     <button data-id=${this.id} class="new-subject">Add New Class</button>
    //     <button class="delete-btn">x</button>
    //     `
    // }

    
}