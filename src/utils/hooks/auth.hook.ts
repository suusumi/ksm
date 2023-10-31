import { useCallback, useEffect, useState } from "react";

const storageName = 'userData';

export const useAuth = () => {
    const [userId, setUserId] = useState<number | null>(null);
    const [ready, setReady] = useState<boolean>(false);

    const login = useCallback((id: number) => {
        setUserId(id);
        localStorage.setItem(storageName, JSON.stringify({
            userId: id
        }));
    }, []);

    const logout = useCallback(() => {
        setUserId(null);
        localStorage.removeItem(storageName);
    }, []);

    useEffect(() => {
        const data = localStorage.getItem(storageName);
        if (data !== null) {
            const parsedData = JSON.parse(data);

            if (parsedData && parsedData.userId) {
                login(parsedData.userId);
            }
        }
        setReady(true);
    }, [login]);

    return { login, logout, userId, ready };
}