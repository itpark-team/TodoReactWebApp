import React from 'react'
import ReactDOM from 'react-dom/client'
// @ts-ignore
import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter, Route, Switch} from "react-router-dom";
import AuthForm from "./components/AuthForm/AuthForm";
/*
 <BrowserRouter>
            <Switch>
                <Route path="/e">

                </Route>
                <Route path="/register">
                    <RegisterForm/>
                </Route>
                <Route path="/settings">
                    <UserSettings/>
                </Route>
                <Route path="/todos">
                    <Todos/>
                </Route>
            </Switch>
        </BrowserRouter>
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthForm/>
    </React.StrictMode>,
)
