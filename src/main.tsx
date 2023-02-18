import React from 'react'
import ReactDOM from 'react-dom/client'
// @ts-ignore
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthForm from "./components/AuthForm/AuthForm";
import RegisterForm from "./components/AuthForm/RegisterForm";
import UserSettings from "./components/UserSettings";
import Todos from "./components/Todos";
/*

 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AuthForm/>}/>
            <Route path="/register" element={<RegisterForm/>}/>
            <Route path="/settings" element={<UserSettings/>}/>
            <Route path="/todos" element={<Todos/>}/>
        </Routes>
    </BrowserRouter>,
)
