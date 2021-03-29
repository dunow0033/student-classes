class Subject {
    constructor(subject){
        this.id = subject.id;
        this.name = subject.name;
        this.student_id = subject.studentId;
    }

    renderSubjectDetails(){
        return `
        <h2>${ this.name }</h2>
        <h4>About: ${ this.about }</h4>
        `
    }

    // newSubject(e){    
    //     document.querySelector('form').addEventListener('submit', function(e){
    //         e.preventDefault()
    
    //         console.log(e.target.dataset.id)
    
    //         let newSubject = {
    //             name : e.target.querySelector("#subject").value,
    //             //student_id : student_id
    //         }
    
    //         let subject = new Subject(newSubject)
    
    //         fetch('http://localhost:3000/subjects', {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             },
    //             body: JSON.stringify(subject)
    //         })
    //         .then((res) => res.json())
    //         .then(data => console.log(data));
    //     })
    // }
}