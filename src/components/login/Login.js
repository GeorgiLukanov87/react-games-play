import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../register/authService";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target))

        console.log(email)
        console.log(password)

        login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/')
                
            })
            .catch(() => {
                navigate('/404')
            })

    }

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" defaultValue="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );

};

export default Login;
