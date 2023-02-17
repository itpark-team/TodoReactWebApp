import axios from 'axios';
import {useToken} from "../store/store";

class Api {
    private readonly baseUrl: string;
    private authUrl: string;
    private registerUrl: string

    constructor() {
        this.baseUrl = 'http://localhost:8090/api/v1';
        this.authUrl = this.baseUrl + "/authenticate";
        this.registerUrl = this.baseUrl + "/register";
    }

    async authenticate(body?: any) {
        await axios.post(this.authUrl, body).then(successData => {
            let token = successData.data.token;
            console.log(token)
            window.localStorage.setItem("token", token);
            return token;
        }, error => {
            console.log(error);
            return null;
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