import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import CreateTodoForm from "./Todo/CreateTodoForm";
import getTokenFromLS from "./utils/getTokenFromLS";
import TodoList from "./Todo/TodoList";
import Api from "../service/api";

function Todos() {
    const [_token, _setToken] = useState(getTokenFromLS);

    const navigate = useNavigate();

    useEffect(() => {
        if (_token[0] == null) navigate("/");
    }, [_token]);

    return (
        <div className="container">
            <CreateTodoForm/>
            <TodoList/>
        </div>
    );
}

export default Todos;