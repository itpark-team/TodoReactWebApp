import {useForm} from "react-hook-form";
import "./AuthForm.css";
import Api from "../../service/api";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import getTokenFromLS from "../utils/getTokenFromLS";

// @ts-ignore
const RegisterForm = (): any => {
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    });
    const [_token, _setToken] = useState(getTokenFromLS);
    const [message, setMessage] = useState<String | undefined>(undefined);
    const navigate = useNavigate();

    const onSubmit = (data: any) => {
        let api = new Api();
        const token = api.register(data);
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
            <h1>Регистрация</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                {message != undefined ? <h2>{message}</h2> : ""}
                <label>
                    Имя:
                    <input
                        {...register("name", {
                            required: "Поле имя обязательно к заполнению",
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

                <label>
                    Пароль:
                    <input
                        {...register("password", {
                            required: "Поле password обязательно к заполнению",
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
                <label>
                    Email:
                    <input
                        {...register("email", {
                            required: "Поле email обязательно к заполнению",
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
            </form>
        </div>
    );
};
export default RegisterForm
