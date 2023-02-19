import {useForm} from "react-hook-form";
import "./AuthForm.css";
import Api from "../../service/api";
import React, {Fragment, useEffect, useState} from "react";
import {Link, redirect, useNavigate} from "react-router-dom";

// @ts-ignore
const AuthForm = (): any => {
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    });
    const [_token, _setToken] = useState(() => {
        const token = window.localStorage.getItem("token");

        function changeToken(token: string): void {
            window.localStorage.setItem("token", token)
        }

        return [token, changeToken];
    });
    const [message, setMessage] = useState<String | undefined>(undefined);
    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        const api = new Api();
        const token = api.authenticate(data);
        if (token != null) navigate('/todos')
        else {
            setMessage("Неверные данные для ввода");
        }
        reset()
    };

    useEffect(() => {
        if (_token[0] != null) navigate("/todos");
    }, [_token]);

    return (<div className="App">
            <h1>Авторизация</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                {message != undefined ? <h2>{message}</h2> : ""}
                <label>
                    Логин:
                    <input
                        {...register("login", {
                            required: "Поле логин обязательно к заполнению",
                            minLength: {
                                value: 6,
                                message: "Минимум 6 символов."
                            },
                            maxLength: {
                                value: 32,
                                message: "Максимум 32 символа."
                            }
                        })}
                    />
                </label>
                <div style={{height: 40}}>
                    {errors?.firstName && <p>{"Error!"}</p>}
                </div>
                <label>
                    Пароль:
                    <input
                        {...register("password", {
                            required: "Поле логин обязательно к заполнению",
                            minLength: {
                                value: 5,
                                message: "Минимум 5 символов."
                            },
                            maxLength: {
                                value: 32,
                                message: "Максимум 32 символа."
                            }
                        })}
                    />
                </label>
                <div style={{height: 40}}>
                    {errors?.lastName && <p>{"Error!"}</p>}
                </div>

                <input type="submit" disabled={!isValid}/>
                <h2><Link to={"/register"}>Зарегистрироваться</Link></h2>
            </form>
        </div>
    );
};
export default AuthForm
