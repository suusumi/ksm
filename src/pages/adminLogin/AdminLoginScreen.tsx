import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminLoginView } from "./view/AdminLoginView";
import { AuthContext } from "../../utils/context/AuthContext";
import { authAdmin } from "../../api/auth/request";

export const AdminLoginScreen = () => {
    const [form, setForm] = useState({login: '', password: ''});
    const auth = useContext(AuthContext);
    const [authError, setAuthError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [event.currentTarget.name]: event.currentTarget.value});
        setAuthError(false);
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if(form.login.length === 0 || form.password.length === 0) {
            setAuthError(true);
        } 
        const response = await authAdmin(form.login, form.password).catch(error => console.error(error));
        
        if (response) {
            setAuthError(false);
            auth.login(response.id);
            navigate('redirect');
        } else {
            setAuthError(true);
        }
    }

    return (
        <AdminLoginView 
            authInfo={form}
            handleChange={handleChange}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            authError={authError}
            handleSubmit={handleSubmit}
        />
    );
}