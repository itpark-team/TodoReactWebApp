import axios from "axios";
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

    extractToken(successData: any) {
        let token = successData.data.token;
        console.log(token)
        window.localStorage.setItem("token", token);
        return token;
    }

    async authenticate(body?: any) {

        await axios.post(this.authUrl, body).then(successData => {
            return this.extractToken(successData);
        }, error => {
            console.log(error);
            return null;
        });
    }

    async register(body?: any) {
        await axios.post(this.registerUrl, body).then(successData => {
            return this.extractToken(successData);
        }, error => {
            console.log(error);
        });
    }
}

export default Api;