import React, { createRef, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axiosClient";

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState(null);
    const { setUser, setToken } = useStateContext();

    const onSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        setErrors(null);
        axiosClient
            .post("/login", payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    if (response.data.errors) {
                        console.log(response.data.errors);
                        setErrors(response.data.errors);
                    } else {
                        setErrors({
                            email: [response.data.message],
                        });
                    }
                }
            });
    };

    return (
        <div
            className="login_bgnd">
            <div className="row-login">
                <div className="login-title column-login-title">
                
                    <h1 className="login-title">
                    Optimize your business with our powerful ERP solutions
                    </h1>
                    <h4 className="brand-name">InnovateERP</h4>
                </div>
                <div className="column-login-form">
                    <div className="login-signup-form animated fadeInDown">
                        <div className="form">
                            <form onSubmit={onSubmit}>
                                <h1 className="title">
                                    Login into your account
                                </h1>
                                {errors && (
                                    <div className="alert">
                                        {Object.keys(errors).map((key) => (
                                            <p key={key}>{errors[key][0]}</p>
                                        ))}
                                    </div>
                                )}
                                <input
                                    ref={emailRef}
                                    type="email"
                                    placeholder="Email"
                                />
                                <input
                                    ref={passwordRef}
                                    type="password"
                                    placeholder="Password"
                                />
                                <button className="btn btn-block">Login</button>
                                <p className="message">
                                    Not Registered?
                                    <Link to="/signup"> Create an account</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
