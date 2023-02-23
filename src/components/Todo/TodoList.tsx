import React, {useEffect, useState} from 'react';
import Api from "../../service/api";

interface Todo {
    id: number;
    name: string;
    isDone: boolean
}

const TodoList = () => {
    const api = new Api();

    // @ts-ignore
    const [todos, setTodos] = useState<Array<Todo>>([]);

    // @ts-ignore
    useEffect((e: any) => {
        let {getTodos} = new Api();
        const obj = {
            token: window.localStorage.getItem("token")
        }
        // @ts-ignore
        let arr = getTodos(obj);
        // @ts-ignore
        setTodos(arr);

    }, [todos])
    const completeTodo = (event: any) => {
        const id = event.target.id;
        const token = window.localStorage.getItem("token");
        const obj = {
            id,
            token
        }
        api.completeTodo(obj);
    };


    return (
        <div>
            <ul>
                {todos.map(todo => {

                    return (
                        <>
                            <li>{todo.name}</li>
                            <li>Задача {!todo.isDone ? "не " : ""} выполнена <button id={todo.id.toString()}
                                                                                     onClick={completeTodo}>Выполнить
                                задачу</button></li>
                        </>
                    )
                })}
            </ul>
        </div>)
};

export default TodoList;