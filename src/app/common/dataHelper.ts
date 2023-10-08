"use client";
import { useEffect, useState } from "react";
import { User, dummyUserData } from "./constants";

export const getUserData = () => {
    const [userData, setUserData] = useState<User[]>([])

    useEffect(() => {
        if (userData.length == 0 && typeof window !== 'undefined') {
            const userDataStorage = localStorage.getItem('userDataStorage');
            if (userDataStorage) {
                setUserData(JSON.parse(userDataStorage));
                return;
            }

            setUserData(dummyUserData);
        }
    }, [userData])


    return {
        userData
    };
}