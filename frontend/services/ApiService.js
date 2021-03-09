class ApiService {
    constructor() {
        this.baseURL = 'http://localhost:3000'
    }
    
    async fetchStudents() {
        let resp = await fetch(this.baseURL + '/students');
        let data = resp.json();
        return data;
    }

    async createNewStudent(student){
        let configObj = {
            method: 'POST',
            body: JSON.stringify(student),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }

        let resp = await fetch(this.baseURL + '/students', configObj)
    }
}