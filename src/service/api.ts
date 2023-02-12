import axios from 'axios';

class Api {
    private readonly baseUrl: string;
    private authUrl: string;
    private registerUrl: string

    constructor() {
        this.baseUrl = 'http://localhost:8090/api/v1';
        this.authUrl = this.baseUrl + "/authenticate";
        this.registerUrl = this.baseUrl + "/register";
    }

    authenticate(body?: any) {
        axios.post(this.authUrl, body).then(successData => {
            localStorage.setItem("token", successData.data.token);
        }, error => {
            console.log(error);
        });
    }
    register(body?: any) {
        axios.post(this.registerUrl, body).then(successData => {
            console.log(successData);
        }, error => {
            console.log(error);
        });
    }
}

export default Api;