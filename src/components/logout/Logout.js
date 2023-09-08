import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";

import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";

export const Logout = () => {
    const navigate = useNavigate();
    const { user, userLogout } = useContext(AuthContext);

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                userLogout();
                navigate('/');
            })
            .catch(() => {
                navigate('/')
            })

    })

    return null;
}