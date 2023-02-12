import {useForm} from "react-hook-form";
import "./AuthForm.css";
import Api from "../../service/api";

const AuthForm = () => {
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
        api.authenticate(data);
        reset()
    };

    return (
        <div className="App">
            <h1>Авторизация</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Логин:
                    <input
                        {...register("login", {
                            required: "Поле логин обязательно к заполнению",
                            minLength: {
                                value: 6,
                                message: "Минимум 6 символов."
                            },
                            maxLength:{
                                value:32,
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
                            maxLength:{
                                value:32,
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
export default AuthForm
