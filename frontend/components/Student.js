class Student {
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.age = data.age;
    }

    renderStudent(){
        main.innerHTML += `
        <h2>${this.name}</h2>
        `
    }

    
}