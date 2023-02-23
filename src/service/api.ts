import axios from "axios";

class Api {
    private readonly baseUrl: string;
    private authUrl: string;
    private registerUrl: string
    private createTodoUrl: string;
    private getTodosUrl: string;

    constructor() {
        this.baseUrl = 'http://localhost:8090/api/v1';
        this.authUrl = this.baseUrl + "/authenticate";
        this.registerUrl = this.baseUrl + "/register";
        this.createTodoUrl = this.baseUrl + "/todo";
        this.getTodosUrl = this.createTodoUrl;
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

    async createTodo(body?: any) {
        await axios.post(this.createTodoUrl, body);
    }

    async getTodos(body?: any) {
        await axios.post(this.getTodosUrl, body).then(successData => {
            return successData.data
        }, error => {
            console.log(error)
        })
    }

    async completeTodo(body?: any) {
        await axios.put(this.registerUrl, body)
    }
}

export default Api;