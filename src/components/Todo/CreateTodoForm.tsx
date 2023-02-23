import React from 'react';
import {useForm} from "react-hook-form";
import Api from "../../service/api";

const CreateTodoForm = () => {
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    });
    const onSubmit = (data: any) => {
        let api = new Api();
        const token = window.localStorage.getItem("token");
        data = {...data, token}
        api.createTodo(data);
        reset()
    };

    return (
        <div>
            <form action="/api/v1/todo" method="post" className="form-control mt-5">
                <label style={{"color": "black", "fontSize": "25px"}}>
                    Суть задачи:
                    <input
                        style={{"border": "1px solid black"}} placeholder={"Введите суть задачи"}
                        {...register("name", {
                            required: "Поле name обязательно к заполнению",
                        })}
                    />
                </label>
                <input type="submit" className="btn btn-primary" disabled={!isValid}/>
            </form>
        </div>
    )
};

export default CreateTodoForm;