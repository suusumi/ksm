import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminLoginView } from "./view/AdminLoginView";
import { routes } from "../../assets/routes/routes";
import { AuthContext } from "../../utils/context/AuthContext";

export const AdminLoginScreen = () => {
    const [authInfo, setAuthInfo] = useState({login: '', password: ''});
    const auth = useContext(AuthContext);
    const id = 1;
    const [authError, setAuthError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuthInfo({...authInfo, [event.currentTarget.name]: event.currentTarget.value});
        setAuthError(false);
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if(authInfo.login.length === 0 || authInfo.password.length === 0) {
            setAuthError(true);
            console.log("ERROR");
        } else if (authInfo.login === 'admin' && authInfo.password === 'admin') {
            setAuthError(false);
            console.log('Login: ' + authInfo.login, 'Password: ' + authInfo.password);
            await auth.login(id);
            navigate('redirect');
        } else {
            setAuthError(true);
            console.log('Error');
            // console.log('Login: ' + authInfo.login, 'Password: ' + authInfo.password);
            // navigate(routes.infographics);
        }
        
        // Пока стоит заглушка, после создания запроса, будет кусок кода ниже
        // const response = await auth(authInfo.login, authInfo.password);
        // if (response) {
            // cookies.set(ACCESS_TOKEN_COOKIE_KEY, response.accessToken);
            // cookies.set(ACCESS_TOKEN_EXPIRATION_TIME_COOKIE_KEY, (new Date()).getTime() + response.accessTokenExpirationTime - 1000);
            // cookies.set(REFRESH_TOKEN_COOKIE_KEY, response.refreshToken);
            // cookies.set(REFRESH_TOKEN_EXPIRATION_TIME_COOKIE_KEY, (new Date()).getTime() + response.refreshTokenExpirationTime - 1000);
            // navigate('/home');
        // } else {
            // setAuthError(true);
        // }
        //console.log('Login: ' + form.login, 'Password: ' + form.password, 'Response: ' + response);
    }

    return (
        <AdminLoginView 
            authInfo={authInfo}
            handleChange={handleChange}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            authError={authError}
            handleSubmit={handleSubmit}
        />
    );
}