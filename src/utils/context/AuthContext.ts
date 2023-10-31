import { createContext } from "react";

type AuthContextType = {
    userId: number | null;
    login: (id: number) => void;
    logout: () => void;
    isAuthenticated: boolean;
};

function noop(): void {}

export const AuthContext = createContext<AuthContextType>({
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false,
});